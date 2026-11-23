# Nordgården – eksamensprojekt (Multimediedesign, 4. semester)

Astro + React · Supabase · Netlify · GitHub · VS Code

## Kom i gang

```bash
npm install
npm run dev
```
Åbn http://localhost:4321

## Hvad er sat op

- **Astro** med **React** slået til (`astro.config.mjs`)
- **Supabase**-forbindelse klar i `src/lib/supabase.js` – nøglerne skal i `.env` (kopiér `.env.example`)
- **Netlify** bygger fra `netlify.toml`
- Én tom side (`src/pages/index.astro`) og ét layout (`src/layouts/Layout.astro`)

Resten – komponenter, sider og database – laver vi selv efter cardsorting.

## Sådan bruger man de to

- Nye sider: læg en `.astro`-fil i `src/pages/` – filnavnet bliver URL'en.
- Komponenter: `.astro` til indhold, `.jsx` (React) til det, der skal reagere på klik/input.
- En React-komponent skal have et `client:`-direktiv for at virke interaktivt i en Astro-side, fx `<MinKomponent client:load />`.

## Arbejdsgang

```bash
git checkout main && git pull
git checkout -b feature/navn
# ... kod ...
git add . && git commit -m "Hvad du lavede"
git push -u origin feature/navn
```
Opret pull request på GitHub → den anden kigger → merge.
