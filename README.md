# Pranav Patkari Portfolio

A React + Vite portfolio site for selling websites to local businesses.

## Run it

```bash
npm install
npm run dev        # open the local link it prints (usually http://localhost:5173)
```

## Edit your details

Almost everything you'll want to change is in two files:

| What | File |
|---|---|
| Name, WhatsApp number, email, Instagram | `src/data/site.js` → `owner` |
| Prices and package contents | `src/data/site.js` → `plans` |
| Services, process steps, FAQ, skills | `src/data/site.js` |
| Projects, descriptions, screenshots | `src/data/projects.js` |

**Set your WhatsApp number first.** In `src/data/site.js`, set `whatsapp` to your number with
country code and no spaces or `+`, for example `'919876543210'`. Every WhatsApp button and the
contact form use it.

## Add a project

1. Put the screenshots in `src/assets/projects/` (`.webp`, `.png` or `.jpg`).
2. Import them at the top of `src/data/projects.js`.
3. Copy an existing entry in the `projects` list and change the text.

Use real screenshots (on Arch: `grim`, `flameshot` or the browser's own screenshot tool) rather
than phone photos of the screen.

## Publish it for free

```bash
npm run build      # creates the dist/ folder
```

- **Netlify:** drag the `dist` folder onto https://app.netlify.com/drop
- **Vercel:** `npx vercel` in this folder, or import the repo on vercel.com
- **GitHub Pages:** push the repo and deploy `dist` with GitHub Actions

The build uses relative paths, so `dist` works from any host or sub-folder.

## Structure

```
src/
  App.jsx              page sections in order
  index.css            all styles (colours at the top, light + dark themes)
  utils.js             WhatsApp link helper
  data/site.js         your details, prices, services, FAQ
  data/projects.js     portfolio projects
  assets/projects/     screenshots
  components/          Header, Hero, Benefits, Projects, Services,
                       Pricing, Process, About, FAQ, Contact, Footer
```
