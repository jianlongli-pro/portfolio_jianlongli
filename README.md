# Portfolio — Jian Long Li

Portfolio personnel (style "Academic Color" en liquid glass) : parcours, projets de recherche, blog, sélecteur de langue FR/EN/中.

## Stack
- Vite + React
- React Router (`react-router-dom`)
- Tailwind CSS
- lucide-react (icônes)

## Démarrage

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production dans dist/
```

## Structure

```
src/
  data/content.js       # traductions + parcours + projets + articles de blog
  context/LangContext   # état de langue partagé (fr/en/zh)
  components/
    Glass.jsx            # surfaces "liquid glass" (Glass = panneaux, GlassButton = contrôles)
    Waveform.jsx          # motif décoratif (tracé de signal)
    Nav.jsx / Footer.jsx
  pages/
    Home.jsx              # hero, parcours, projets, aperçu blog
    Blog.jsx               # liste des articles
    BlogPost.jsx            # article individuel (/blog/:slug)
```

### Ajouter une nouvelle page

1. Crée `src/pages/MaPage.jsx`.
2. Importe-la dans `src/App.jsx`.
3. Ajoute `<Route path="/ma-page" element={<MaPage />} />`.

## À personnaliser
- Le contenu des 3 articles de blog dans `src/data/content.js` est un point de départ rédigé à partir de ton CV — à réécrire avec ta propre voix.
- Les traductions EN/ZH couvrent la structure du site (nav, titres, libellés). Le contenu des articles est en français uniquement pour l'instant.
- Ajoute une vraie photo de profil dans `public/` si tu veux remplacer le monogramme "JL".

## Déployer sur GitHub Pages

1. Crée un dépôt GitHub et pousse ce code sur la branche `main`.
2. Dans **Settings → Pages**, choisis la source **GitHub Actions**
   (le workflow `.github/workflows/deploy.yml` est déjà inclus et se
   déclenche à chaque push sur `main`).
3. Ouvre `vite.config.js` et ajuste `base` :
   - Si le dépôt s'appelle `mon-repo` et sera servi sur
     `https://<user>.github.io/mon-repo/` → `base: '/mon-repo/'`
   - Si le dépôt est `<user>.github.io` (site racine) → `base: '/'`
4. Commit, push. L'action build le site et le publie automatiquement.
   L'URL apparaît dans l'onglet **Actions** puis dans **Settings → Pages**.

Un `404.html` identique à `index.html` est généré au build : c'est ce qui
permet aux routes React (`/blog/mon-article`, `/templates/signal-lab`…)
de fonctionner correctement après un rafraîchissement de page sur GitHub
Pages, qui ne gère pas nativement le routing côté client.

## Stack

- [Vite](https://vitejs.dev/) — bundler
- [React Router](https://reactrouter.com/) — routage multi-pages
- [Tailwind CSS](https://tailwindcss.com/) — styles
- [lucide-react](https://lucide.dev/) — icônes

## Note technique
Ce projet utilise React Router (SPA), pas Next.js. Pour un déploiement statique simple
(Vercel, Netlify, GitHub Pages), configure une règle de réécriture vers `index.html`
pour que les routes `/blog/:slug` fonctionnent au rechargement de page.