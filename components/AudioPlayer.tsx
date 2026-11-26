"use client";

import { useEffect, useRef, useState } from "react";
import Img from "./Img";
import type { Track } from "@/data/tracks";
import playIcon from "@/images/audioPlayer/play.png";
import pauseIcon from "@/images/audioPlayer/pause.png";
import downloadIcon from "@/images/audioPlayer/download-icon.png";
import styles from "./AudioPlayer.module.css";
import { cx } from "./cx";

const PLAY_EVENT = "liv-audio-play";

/** "m:ss" */
function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds - min * 60);
  return `${min}:${sec < 10 ? `0${sec}` : sec}`;
}

/** One track with cover, play/pause button, seek bar and optional download link. */
export default function AudioPlayer({ track, download = false }: { track: Track; download?: boolean }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState<{ current: number; duration: number } | null>(null);

  // only one track plays at a time
  useEffect(() => {
    const pauseOthers = (e: Event) => {
      if ((e as CustomEvent).detail !== audio.current) audio.current?.pause();
    };
    window.addEventListener(PLAY_EVENT, pauseOthers);
    return () => window.removeEventListener(PLAY_EVENT, pauseOthers);
  }, []);

  useEffect(() => {
    const el = audio.current;
    if (!el) return;
    const update = () => setTime({ current: el.currentTime, duration: el.duration });
    update();
    const events = ["timeupdate", "loadedmetadata", "durationchange"];
    events.forEach((e) => el.addEventListener(e, update));
    return () => events.forEach((e) => el.removeEventListener(e, update));
  }, []);

  const togglePlay = () => {
    const el = audio.current;
    if (!el) return;
    if (el.paused) {
      window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: el }));
      void el.play();
    } else {
      el.pause();
    }
  };

  const alt = `single cover ${track.title}`;

  return (
    <div className={cx("col-12 col-sm-6 col-lg-4", playing && styles.playing)}>
      <Img src={track.cover} className={styles.background} alt={alt} sizes="40vw" />
      <audio
        ref={audio}
        src={track.src}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      ></audio>

      <div className={styles.container}>
        <div className={styles.box}></div>
        <Img src={track.cover} alt={alt} className={styles.thumbnail} sizes="(min-width: 576px) 40vw, 75vw" />
        <Img
          src={playing ? pauseIcon : playIcon}
          onClick={togglePlay}
          className={styles.playPause}
          alt={playing ? "Pause" : "Play"}
          sizes="64px"
        />
        <div className={styles.songArtist} translate="no">
          Lesson in Violence
        </div>
        <div className={styles.songTitle} translate="no">
          {track.title}
        </div>
        {download && (
          <a href={track.src} download>
            <Img src={downloadIcon} className={styles.download} alt="Download" sizes="64px" />
          </a>
        )}
        <input
          type="range"
          className={styles.progressBar}
          min={0}
          max={time && Number.isFinite(time.duration) ? time.duration : 100}
          step="any"
          value={time?.current ?? 0}
          aria-label={`Position in ${track.title}`}
          onChange={(e) => {
            if (audio.current) audio.current.currentTime = Number(e.target.value);
          }}
        />
        <div className={styles.currentTime}>{time && formatTime(time.current)}</div>
        <div className={styles.durationTime}>{time && formatTime(time.duration)}</div>
      </div>
    </div>
  );
}
