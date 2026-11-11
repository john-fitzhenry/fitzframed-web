# johnfitzhenry.com

John Fitzhenry's personal site: photography, video, live and multimedia production, web design and development, and Syracuse University senior portraits.

It is a [Next.js](https://nextjs.org) project that exports to plain static files, so it can be hosted anywhere (Hostinger, Netlify, Vercel).

## Pages

| Path | What it is |
| --- | --- |
| `/` | Home: all four disciplines, selected work, about and contact |
| `/senior-portraits/` | Syracuse University senior portraits: gallery, how it works, FAQ and booking |

## Editing content

Almost all copy, numbers, videos, projects and photo captions live in [`data/site.js`](data/site.js). Change them there and the pages update.

- **Photos** are in `public/photos/` as `name-640.webp`, `name-1200.webp` and `name-1200.jpg`. To add one, export those three files, add an entry to `photos` in `data/site.js`, and add its name to `seniorGallery` or `homeGallery`.
- **Videos** are click-to-play YouTube embeds. Add an entry to `videos` with the YouTube ID and put `slug-640.webp` and `slug-1280.webp` thumbnails in `public/video/`.
- **Web projects** use screenshots in `public/work/` (`slug-720.webp`, `slug-1440.webp`).
- **Contact forms** post to the Formspree form set in `site.formEndpoint`.

## Run it locally

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:3000.

## fitzframed.com

`fitzframed.com/` holds a copy of the live FitzFramed site (plain HTML, CSS and JS, no build step). Edit the files there and upload the changed ones to that domain's `public_html` on Hostinger. When you change `style.css` or replace an image, bump the `?v=` on the stylesheet link or give the image a new filename, because the host caches both for a long time.

## Build and deploy

```bash
npm run build
```

This writes the finished site to `out/`. Upload the contents of `out/` to the web root of the host (on Hostinger, `public_html`). On Vercel or Netlify, connect the repository; the build command is `npm run build` and the output directory is `out`.
