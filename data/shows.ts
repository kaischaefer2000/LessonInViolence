import type { StaticImageData } from "next/image";
import { plain } from "./image";

/*
 * All concerts shown on the live page (newest first – the list is sorted by
 * date automatically, so the order here doesn't matter).
 *
 * To add a new show, copy one entry and adjust it. Put the flyer into
 * images/flyer/ and import it below. Whether a show is over (grey) and which
 * show appears in the "Next show" box is calculated from the date when the
 * site is built.
 */

export type Show = {
  /** "DD.MM.YYYY" */
  date: string;
  name: string;
  location: string;
  bands: string;
  flyer?: {
    src: StaticImageData;
    alt: string;
    /** width of the flyer after clicking on it (desktop only), default "30vw" */
    zoomWidth?: string;
  };
  /** ticket button; without url it is shown as disabled (e.g. "No tickets available yet") */
  ticket?: { label: string; url?: string };
  /** QR code shown next to the ticket button */
  qrCode?: { src: StaticImageData; alt: string };
  /** link "More details" below the flyer */
  moreDetailsUrl?: string;
  /** show the ticket button above the flyer instead of below */
  ticketBeforeFlyer?: boolean;
  /** not shown on the website */
  hidden?: boolean;
  /** prevent browser translation of the show name */
  nameNoTranslate?: boolean;
  /** narrower label column on small screens – set automatically for the older entries (see getShows) */
  legacyLayout?: boolean;
};

import thrashAssaultFuerthPlakatFlyer from "@/images/flyer/ThrashAssaultFuerth_Plakat_Flyer.jpg";
import lessonsInMetal6Flyer from "@/images/flyer/Lessons in Metal6_Flyer.jpg";
import metalNight26 from "@/images/flyer/Metal Night26.jpeg";
import moshpitX from "@/images/flyer/Moshpit X.jpg";
import bhof from "@/images/flyer/bhof.jpeg";
import thrashAssaultBonnFlyer from "@/images/flyer/ThrashAssaultBonn_Flyer.jpg";
import lim5Flyer from "@/images/flyer/LIM5Flyer.jpg";
import battleOfBoars from "@/images/flyer/BattleOfBoars.jpeg";
import fellfresseWismarFlyer from "@/images/flyer/Fellfresse-Wismar-Flyer.jpg";
import sharkFest1 from "@/images/flyer/SharkFest1.jpeg";
import metalExplosionFlyer from "@/images/flyer/MetalExplosionFlyer.jpeg";
import thrashTalkFlyer from "@/images/flyer/ThrashTalkFlyer.jpeg";
import madnessOverValhalla from "@/images/flyer/MadnessOverValhalla.jpeg";
import lessonsInMetal4Flyer from "@/images/flyer/LessonsInMetal4_Flyer.jpg";
import undergroundPit from "@/images/flyer/UndergroundPit.jpeg";
import rockMetalDays from "@/images/flyer/Rock&MetalDays.jpg";
import mff2024Flyer from "@/images/flyer/MFF2024.jpeg";
import muensterFlyer from "@/images/flyer/Münster.jpeg";
import walsrodeFlyer from "@/images/flyer/WalsrodeFlyer.jpg";
import bastardsBashFlyer23 from "@/images/flyer/BastardsBash-flyer23.jpg";
import lim3Flyer from "@/images/flyer/LIM3_PlakatA6-min.jpg";
import parasitePitFlyer from "@/images/flyer/ParasitePitFlyer.jpg";
import birthdayMoshpit23 from "@/images/flyer/birthdayMoshpit23.jpeg";
import flyerZykloopenAir from "@/images/flyer/Flyer Zykloopen Air.jpg";
import flyerMetalMassacer from "@/images/flyer/FlyerMetalMassacer.jpeg";
import flyerLessonsInMetal2 from "@/images/flyer/Flyer Lessons in Metal 2.jpg";
import infernumFlyer from "@/images/flyer/InfernumFlyer.jpg";
import fylerBirthdayMoshpit from "@/images/flyer/FylerBirthdayMoshpit.jpeg";
import mff2022Flyer from "@/images/flyer/Flyer_MFF.jpg";
import birthdayBashFlyerMin from "@/images/flyer/birthday-bash-flyer-min.jpg";
import lessonsInMetal1FlyerMin from "@/images/flyer/lessons-in-metal-1-flyer-min.jpg";
import qrCodeLim6 from "@/images/flyer/QR Code VVK.jpeg";

const shows: Show[] = [
  {
    date: "28.11.2026",
    name: "Thrash Assault- Fürth",
    location: "Kopf & Kragen / Fürth",
    bands: "Lesson In Violence, Entera, Wanted Inc.",
    flyer: { src: thrashAssaultFuerthPlakatFlyer, alt: "Thrash Assult Fürth Flyer" },
    ticket: { label: "Tickets", url: "https://www.kopfundkragen-club.de/tickets" },
  },
  {
    date: "06.11.2026",
    name: "Lessons in Metal 6 - Schweinfurt",
    location: "Stattbahnhof / Schweinfurt",
    bands: "Lesson In Violence, Extinct, Ratrotten, Headless Hunter",
    flyer: { src: lessonsInMetal6Flyer, alt: "Lessons in Metal 6 Flyer" },
    ticket: { label: "Get your tickets here", url: "https://rausgegangen.de/events/lesson-in-metal-6-0/" },
    qrCode: { src: qrCodeLim6, alt: "Lessons in Metal 6 Ticket VVK" },
  },
  {
    date: "24.10.2026",
    name: "Metal Night - Rendsburg",
    location: "T-Stube / Rendsburg",
    bands: "Lesson In Violence, Extinct, ...",
    flyer: { src: metalNight26, alt: "Metal Night Flyer" },
    ticket: { label: "No tickets available yet" },
    ticketBeforeFlyer: true,
  },
  {
    date: "04.07.2026",
    name: "Birthday Moshpit (private party) – Obervolkach",
    location: "Sportplatz / Obervolkach",
    bands: "Lesson In Violence, Goregonzola, Absorb, Ratrotten",
    flyer: { src: moshpitX, alt: "Moshpit X  Flyer" },
    ticket: { label: "No tickets available yet" },
    ticketBeforeFlyer: true,
  },
  {
    date: "21.03.2026",
    name: "Keep it Rotten 4 - Würzburg",
    location: "B-Hof / Würzburg",
    bands: "Lesson In Violence, Traitor, Ratrotten",
    flyer: { src: bhof, alt: "keep it rotten Flyer" },
    ticket: { label: "Tickets", url: "https://tickets.infield.live/event/keep-it-rotten-iv-traitor-ratrotten-lesson-in-vi-w80sry" },
  },
  {
    date: "08.11.2025",
    name: "Thrash Assault - Bonn",
    location: "RPZ / Bonn",
    bands: "Lesson In Violence, Grufflo, Mähthräsher...",
    flyer: { src: thrashAssaultBonnFlyer, alt: "Trash Assault Bonn Flyer" },
    ticket: { label: "Tickets", url: "https://t.rausgegangen.de/tickets/thrash-assult-bonn" },
  },
  {
    date: "25.10.2025",
    name: "Lessons in Metal 5 - Schweinfurt",
    location: "Stattbahnhof / Schweinfurt",
    bands: "Lesson In Violence, Exa, Grave Dogger, Wanted INC.",
    flyer: { src: lim5Flyer, alt: "Lessons in Metal 5 Flyer" },
    ticket: { label: "Tickets", url: "/merch.html#LIM5Ticket" },
  },
  {
    date: "04.10.2025",
    name: "Exa Thrash - Berlin",
    location: "? / Berlin",
    bands: "Lesson In Violence, Exa, ...",
    ticket: { label: "No tickets available yet" },
    hidden: true,
  },
  {
    date: "20.09.2025",
    name: "Battle of the boars - Oberursel",
    location: "Portstrasse Jugend & Kultur / Oberursel",
    bands: "Lesson In Violence, Lycania, Mein Kopf ist ein brutaler Ort, Curse of Khatru, Fallen Temple",
    flyer: { src: battleOfBoars, alt: "Battle of Boars Flyer" },
    ticket: { label: "Tickets", url: "https://tickets.taunus-metal.de/battleoftheboars/" },
  },
  {
    date: "05.04.2025",
    name: "Fellfresse - Wismar",
    location: "Fellfresse / Wismar",
    bands: "Lesson In Violence, Full Assault, Fatal Collapse",
    flyer: { src: fellfresseWismarFlyer, alt: "Fellfresse Flyer", zoomWidth: "40vw" },
    ticket: { label: "No tickets available yet" },
  },
  {
    date: "22.03.2025",
    name: "Sharkfest - Utrecht (NL)",
    location: "Utrecht (NL)",
    bands: "Lesson In Violence, Grindpad, Fusion Bomb, Headless Hunter",
    flyer: { src: sharkFest1, alt: "Shark Fest 1 Concert Flyer", zoomWidth: "35vw" },
    ticket: { label: "Tickets", url: "https://dbs.stager.co/web/tickets/111487708" },
  },
  {
    date: "22.02.2025",
    name: "Metal Explosion - Burglengenfeld",
    location: "VAZ / Burglengenfeld",
    bands: "Lesson In Violence, Wanted Inc., Road Crue",
    flyer: { src: metalExplosionFlyer, alt: "Metal Explosion Concert Flyer", zoomWidth: "40vw" },
    ticket: { label: "Tickets", url: "https://www.eventim.de/event/metal-explosion-veranstaltungszentrum-pfarrheim-19180286/?affiliate=GMD" },
  },
  {
    date: "30.11.2024",
    name: "Thrash Talk - Berlin",
    location: "JUK Spirale / Berlin",
    bands: "Lesson In Violence, Campa, Exa, Infestation, Signifance",
    flyer: { src: thrashTalkFlyer, alt: "Thrash Talk Concert Flyer" },
    ticket: { label: "No tickets available yet" },
  },
  {
    date: "26.10.2024",
    name: "Madness over Valhalla - Köln",
    location: "Valhalla Metal Pub / Köln",
    bands: "Lesson In Violence, Tempest, Shredhammer",
    flyer: { src: madnessOverValhalla, alt: "Madness over Valhalla Flyer", zoomWidth: "40vw" },
    ticket: { label: "Tickets", url: "https://www.f4btickets.de/" },
  },
  {
    date: "12.10.2024",
    name: "Lessons in Metal 4 - Schweinfurt",
    location: "Stattbahnhof / Schweinfurt",
    bands: "Lesson In Violence, Grindpad, Taskforce Toxicator, Campa",
    flyer: { src: lessonsInMetal4Flyer, alt: "Lessons in Metal 4 Flyer" },
    ticket: { label: "Tickets", url: "merch.html#lim4ticketAnchor" },
  },
  {
    date: "28.09.2024",
    name: "Underground Pit - Kulmbach",
    location: "Kulturscheune / Kulmbach-Gößmannsreuth",
    bands: "Lesson In Violence, Terminal Carnage, Eraser",
    flyer: { src: undergroundPit, alt: "UndergroundPit Flyer" },
    ticket: { label: "No tickets for pre sales" },
  },
  {
    date: "28.06.2024",
    name: "Rock & Metal Day`z - Oschersleben",
    location: "Motorsport Arena / Oschersleben",
    bands: "Lesson In Violence, Nervosa, Burning Witches, Hiraes, Bloodland, Odium, Volter, Mysterica, …",
    flyer: { src: rockMetalDays, alt: "Lessons in Metal 3 Flyer" },
    ticket: { label: "Tickets", url: "https://mfoa.tickettoaster.de/produkte/150-tickets-rock-metal-day-z-2024-motorsportarena-oschersleben-oschersleben-am-27-06-2024" },
  },
  {
    date: "19.04.2024",
    name: "Metal Franconia Festival – Geiselwind",
    location: "Musichall Strohofer / Geiselwind",
    bands: "Lesson In Violence, Knife, Die Apokalyptischen Reiter, Endseeker, Equilbrium, Varg, Eisregen,..",
    flyer: { src: mff2024Flyer, alt: "Metal Franconia 2024 Flyer" },
    ticket: { label: "Tickets", url: "https://www.metal-franconia.de/shop/?fbclid=IwAR0DMgiHkklNRF2mdM_EY8_Ws2f0vq3czRe5hGsB-NtPY0fp284qagCAT-0" },
  },
  {
    date: "06.04.2024",
    name: "Shallows of Aalake - Münster",
    location: "Baracke / Münster",
    bands: "Lesson In Violence, Taskforce Toxicator, Frostshock, Mordkaul",
    flyer: { src: muensterFlyer, alt: "Shallows of Aalake - Münster Flyer" },
    ticket: { label: "No tickets available yet" },
  },
  {
    date: "08.03.2024",
    name: "Thrash over Walsrode Part VI",
    location: "Kulturzentrum Mittendrin / Walsrode",
    bands: "Lesson in Violence, Knife, Phantom Corporation",
    flyer: { src: walsrodeFlyer, alt: "Thrash over Walsrode Part VI Flyer" },
    ticket: { label: "Order tickets via mail", url: "mailto:info@mittendrin-walsrode.de" },
  },
  {
    date: "18.11.2023",
    name: "Bastard`s Bash - Hof",
    location: "Rockclub Wiesla / Hof",
    bands: "Lesson in Violence, Bastard`s Breed, Pantsdown, Chapter Eleven",
    flyer: { src: bastardsBashFlyer23, alt: "Bastards Bash 2023 Flyer", zoomWidth: "45vw" },
    ticket: { label: "No tickets available yet" },
  },
  {
    date: "23.09.2023",
    name: "Lessons in Metal 3 - Schweinfurt",
    location: "Schweinfurt - Stattbahnhof",
    bands: "Lesson in Violence, Ravager, Space Parasites, Paxtilence",
    flyer: { src: lim3Flyer, alt: "Lessons in Metal 3 Flyer" },
    ticket: { label: "Tickets", url: "https://www.facebook.com/events/1164954047461067" },
  },
  {
    date: "16.09.2023",
    name: "Parasite Pit - Berlin / Kreuzberg",
    location: "Tommyhaus Berlin / Kreuzberg",
    bands: "Lesson in Violence, Space Parasites, Hellmaze, Assi Assassin",
    flyer: { src: parasitePitFlyer, alt: "ParasitePitFlyer" },
    ticket: { label: "No tickets available yet" },
  },
  {
    date: "01.07.2023",
    name: "Birthday Moshpit (private party) - Obervolkach",
    location: "Obervolkach",
    bands: "Lesson in Violence, Ratrotten, Painstyle, Beyond Orcus",
    flyer: { src: birthdayMoshpit23, alt: "Lessons in Metal Flyer" },
    ticket: { label: "No tickets available yet" },
  },
  {
    date: "13.05.2023",
    name: "Zykloopen Air - Mainbernheim",
    location: "Zykloopenhof Mainbernheim",
    bands: "Lesson in Violence, Warpath, Disbelief, Profanity, Soul Demise, Detraktor, Sacrifice, Disminded, Goregonzola, Nump, Brlabl",
    flyer: { src: flyerZykloopenAir, alt: "Lessons in Metal Flyer" },
    ticket: { label: "Tickets", url: "https://www.facebook.com/events/568788995020320" },
  },
  {
    date: "18.03.2023",
    name: "Metal Massacre - Schweinfurt",
    location: "Schweinfurt / Stattbahnhof",
    bands: "Lesson in Violence, Hatred, Powergame, Abandoned",
    flyer: { src: flyerMetalMassacer, alt: "Metal Massacre Flyer" },
  },
  {
    date: "02.10.2022",
    name: "Lessons in Metal 2 - Schweinfurt",
    location: "Schweinfurt / Stattbahnhof",
    bands: "Lesson in Violence, Entera, Godslave, Reactory",
    flyer: { src: flyerLessonsInMetal2, alt: "Lessons in Metal Flyer" },
  },
  {
    date: "03.09.2022",
    name: "Infernum meets Porkcore Fistevil Festival - Büchold",
    location: "Festivalgelände Büchold",
    bands: "Lesson in Violence, Ektomorf, Debauchery, Crisix, Cypecore",
    flyer: { src: infernumFlyer, alt: "Infernum meets Porkcore Fistevil Festival Flyer", zoomWidth: "25vw" },
    moreDetailsUrl: "https://infernum-meets-porkcore.de/",
    nameNoTranslate: true,
  },
  {
    date: "02.07.2022",
    name: "Birthday Moshpit (private party) - Obervolkach",
    location: "Obervolkach",
    bands: "Lesson in Violence, Shredhammer, Bastard`s Breed, Absorb, Goregonzola",
    flyer: { src: fylerBirthdayMoshpit, alt: "Birthday Moshpit Flyer" },
    nameNoTranslate: true,
  },
  {
    date: "09.04.2022",
    name: "Metal Franconia Festival - Geiselwind",
    location: "Geiselwind / Musichall Strohofer",
    bands: "Lesson in Violence, JBO, Milking the Goatmachine, Bodyfarm, Fleshcrawl, Cypecore, and many more...",
    flyer: { src: mff2022Flyer, alt: "Bonebreaker Festival Flyer", zoomWidth: "35vw" },
    moreDetailsUrl: "https://sw.metal-franconia.de/",
  },
  {
    date: "22.02.2020",
    name: "Goregonzola Birthday Bash - Schweinfurt",
    location: "Schweinfurt / Stattbahnhof",
    bands: "Lesson in Violence, Goregonzola, Painstyle, Rawside, April in Flames",
    flyer: { src: birthdayBashFlyerMin, alt: "Bonebreaker Festival Flyer", zoomWidth: "35vw" },
    nameNoTranslate: true,
  },
  {
    date: "30.11.2019",
    name: "Lessons in Metal 1 - Schweinfurt",
    location: "Schweinfurt / Jugendhaus",
    bands: "Lesson in Violence, Goregonzola, Insulter, April in Flames",
    flyer: { src: lessonsInMetal1FlyerMin, alt: "Bonebreaker Festival Flyer", zoomWidth: "40vw" },
    nameNoTranslate: true,
  },
  {
    date: "06.07.2019",
    name: "Birthday Moshpit (private party) - Obervolkach",
    location: "Obervolkach",
    bands: "Lesson in Violence, Absorb, Road Crew, Turn the course, Legal Hate",
    nameNoTranslate: true,
  },
];

/** Date of a show as Date object (local time, start of the day). */
export function showDate(show: Show): Date {
  const [day, month, year] = show.date.split(".").map(Number);
  return new Date(year, month - 1, day);
}

function startOfToday(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

/** A show is over from the day after the concert on. */
export function isOver(show: Show, today = startOfToday()): boolean {
  return showDate(show) < today;
}

/** Shows up to this date keep the layout of the former page. */
const LEGACY_LAYOUT_UNTIL = new Date(2022, 8, 3);

/** All visible shows, newest first (images without the inline blur data – they go to a client component). */
export function getShows(): Show[] {
  return shows
    .filter((show) => !show.hidden)
    .sort((a, b) => showDate(b).getTime() - showDate(a).getTime())
    .map((show) => ({
      ...show,
      legacyLayout: showDate(show) <= LEGACY_LAYOUT_UNTIL,
      flyer: show.flyer && { ...show.flyer, src: plain(show.flyer.src) },
      qrCode: show.qrCode && { ...show.qrCode, src: plain(show.qrCode.src) },
    }));
}

/** The next upcoming show – or the latest show if there is none planned. */
export function getNextShow(): Show | undefined {
  const visible = getShows();
  const upcoming = visible.filter((show) => !isOver(show));
  return upcoming.length > 0 ? upcoming[upcoming.length - 1] : visible[0];
}
