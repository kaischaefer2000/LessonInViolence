# The Lesson in Violence Website

Source code of [lessoninviolence.com](https://lessoninviolence.com) – built with
[Next.js](https://nextjs.org) (React, TypeScript) and exported as a static website.

## Getting started

You need [Node.js](https://nodejs.org) 20.9 or newer.

```bash
npm install      # once
npm run dev      # development server on http://localhost:3000 (e.g. /live.html)
npm run build    # builds the website into ./out (incl. image optimization)
npm start        # serves ./out locally to check the finished build
```

Pushing to GitHub deploys automatically: the workflow
`.github/workflows/LessonInViolence-build.yaml` runs `npm run build` and IONOS
Deploy Now uploads the folder `out/`.

## Adding content

### A new concert

Open `data/shows.ts`, copy an entry and adjust date, name, location and bands.
For a flyer, put the picture into `images/flyer/`, import it at the top of the
file and use it as `flyer: { src: ..., alt: "..." }`. Ticket button:
`ticket: { label: "Tickets", url: "https://..." }` – without `url` the button is
shown as disabled (e.g. `{ label: "No tickets available yet" }`).

That's all: when the site is built, past shows are greyed out automatically and
the "Next show" box on the home, live and about-us page shows the next upcoming
concert. (Because this is calculated during the build, a show only turns grey
with the next deployment after the concert.)

### A news post

Open `data/news.tsx` and add an entry at the top of the list. Text is written as
JSX (`<br />` for line breaks, `<a href="...">` for links). Pictures go into
`images/` and are added with `<NewsPicture src={...} alt="..." width="40%" />`.

### Other content

| What                          | Where                                   |
| ----------------------------- | --------------------------------------- |
| Concert pictures, videos      | `data/gallery.ts`                       |
| Audio tracks                  | `data/tracks.ts`, MP3s in `public/audioPlayer/` |
| Merch products                | `data/merch.tsx`                        |
| Press downloads               | `data/downloads.ts`, files in `public/download-items/` |
| Page texts                    | `app/<page>/page.tsx`                   |

## Project structure

```
app/          one folder per page (page.tsx + page styles), layout.tsx, globals.css
components/   header, footer, audio player, lightbox, ... (each with its *.module.css)
data/         content: shows, news, gallery, merch, tracks, downloads
images/       all pictures that are shown on the website (optimized during the build)
public/       files delivered unchanged: MP3s, videos, downloads, favicon, .htaccess
```

### Pictures

Pictures in `images/` are imported in the code
(`import flyer from "@/images/flyer/xyz.jpg"`) and displayed with the `Img`
component. During `npm run build`,
[next-image-export-optimizer](https://github.com/Niels-IO/next-image-export-optimizer)
creates WebP versions in several sizes, so every visitor only loads what their
screen needs. Simply use the original, large picture – no need to resize or
convert it by hand.

### Styles

Plain CSS: `app/globals.css` contains the base styles and the replacement for
the Bootstrap grid (`row`, `col-*`, ...), every component and page has its own
CSS module (`*.module.css`). The home page uses the Bootstrap 5 grid defaults,
all other pages the Bootstrap 4 defaults (class `bs5`/`bs4` on the page wrapper).
