import type { StaticImageData } from "next/image";
import { plain } from "./image";
import thrashfallCoverImage from "@/images/audioPlayer/thrash-metal-mankind-thumbnail.jpg";
import noNeedForDeathCoverImage from "@/images/audioPlayer/no-need-for-death-thumbnail.jpg";

// passed to a client component: without the inline blur data
const thrashfallCover = plain(thrashfallCoverImage);
const noNeedForDeathCover = plain(noNeedForDeathCoverImage);

/*
 * Audio tracks. The MP3 files are in public/audioPlayer/ and are delivered
 * unchanged.
 */

export type Track = { title: string; src: string; cover: StaticImageData };

export const tracks = {
  // album "No need for death"
  noNeedForDeath: { title: "No need for death", src: "/audioPlayer/No Need For Death.mp3", cover: noNeedForDeathCover },
  menKillMen: { title: "Men kill men", src: "/audioPlayer/Men Kill Men.mp3", cover: noNeedForDeathCover },
  theWorldIsMine: { title: "The world is mine", src: "/audioPlayer/The World Is Mine.mp3", cover: noNeedForDeathCover },
  // album "The Thrashfall of Mankind"
  thrashMetalMankind: { title: "Thrash Metal Mankind", src: "/audioPlayer/thrash metal mankind.mp3", cover: thrashfallCover },
  lessonInViolence: { title: "Lesson in Violence", src: "/audioPlayer/lesson in violence.mp3", cover: thrashfallCover },
  lostInYourself: { title: "Lost in yourself", src: "/audioPlayer/lost in yourself.mp3", cover: thrashfallCover },
  scumOfSociety: { title: "Scum of Society", src: "/audioPlayer/scum of society.mp3", cover: thrashfallCover },
} satisfies Record<string, Track>;
