export const articles = [
  {
    id: 1,
    slug: "guide-complet-nextjs-16-app-router",
    title: "Guide Complet: Next.js 16 avec App Router",
    description: "Découvrez les meilleures pratiques pour utiliser Next.js 16 avec le nouvel App Router et optimisez vos performances.",
    excerpt: "Next.js 16 apporte des améliorations majeures. Apprenez comment utiliser l'App Router pour créer des applications ultra-rapides.",
    author: "Steph M.",
    date: new Date("2026-01-20"),
    readTime: "8 min",
    category: "Tutorial",
    tags: ["Next.js", "React", "App Router", "JavaScript"],
    image: "/images/blog-nextjs.jpg", // À créer
    content: `
# Guide Complet: Next.js 16 avec App Router

Next.js 16 est sortie avec des améliorations révolutionnaires. Dans ce guide, nous allons explorer les meilleures pratiques pour utiliser le nouvel **App Router**.

## Qu'est-ce que l'App Router?

L'App Router est le nouveau système de routage introduit dans Next.js 13+ qui utilise une **architecture basée sur des dossiers** plutôt que des fichiers.

### Avantages:
- **Layouts imbriqués**: Réutilisez des composants entre pages
- **Route segments**: Organisez votre code logiquement
- **Streaming & Suspense**: Rendez vos pages plus rapides
- **Server Components par défaut**: Réduisez le JavaScript côté client

## Structure de Base

\`\`\`
app/
├── layout.jsx          # Layout racine
├── page.jsx            # Page d'accueil (/)
├── blog/
│   ├── layout.jsx      # Layout pour /blog
│   ├── page.jsx        # Liste articles
│   └── [slug]/
│       └── page.jsx    # Article détail
└── contact/
    └── page.jsx        # Page contact
\`\`\`

## Dynamic Routes

Pour les articles, on utilise **[slug]** qui crée une route dynamique:

- \`/blog/article-1\`
- \`/blog/article-2\`
- \`/blog/article-3\`

## Performance

Avec Next.js 16, vous pouvez atteindre:
- **Lighthouse 90+** facilement
- **Core Web Vitals** optimisées
- **Build time** ultra-rapide

## Conclusion

Next.js 16 est la meilleure option pour les portfolios modernes. Commencez maintenant! 🚀
    `,
  },
  {
    id: 2,
    slug: "construire-un-portfolio-web-performant",
    title: "Construire un Portfolio Web Performant",
    description: "Les stratégies essentielles pour créer un portfolio web qui impressionne et convertit les visiteurs en clients.",
    excerpt: "Un bon portfolio n'est pas seulement beau, il est aussi performant. Découvrez les techniques pour optimiser chaque aspect.",
    author: "Steph M.",
    date: new Date("2026-01-15"),
    readTime: "12 min",
    category: "Web Design",
    tags: ["Portfolio", "Performance", "SEO", "UX"],
    image: "/images/blog-portfolio.jpg",
    content: `
# Construire un Portfolio Web Performant

Votre portfolio est votre **carte de visite numérique**. Il doit être beau, rapide, et surtout, convertir les visiteurs!

## Les 5 Piliers d'un Portfolio Excellent

### 1. Performance (Lighthouse 90+)
- Images optimisées (WebP, lazy loading)
- CSS minifié
- JavaScript code-split
- Fonts chargées intelligemment

### 2. Design Moderne
- Mobile-first responsive
- Animations subtiles et fluides
- Palette de couleurs cohérente
- Typography lisible

### 3. SEO Optimisé
- Metadata complètes (Open Graph, Twitter Card)
- Structured data (JSON-LD)
- Sitemap & robots.txt
- Internal linking strategy

### 4. Accessibilité (WCAG AA)
- Contraste suffisant
- ARIA labels
- Keyboard navigation
- Focus states visibles

### 5. Contenu de Qualité
- Projets détaillés avec démos
- Articles de blog réguliers
- Témoignages/case studies
- Call-to-action clairs

## Stack Tech Recommandée

**Frontend**: Next.js 16 + React 19 + Tailwind CSS 4
**Hosting**: Vercel (déploiement automatique)
**Analytics**: Vercel Analytics (intégré)

## Checklist Pré-Déploiement

- [ ] Lighthouse 90+ sur tous les metrics
- [ ] Mobile responsive (testé sur plusieurs appareils)
- [ ] Tous les liens fonctionnent (pas de 404)
- [ ] Formulaire de contact opérationnel
- [ ] SEO metadata complètes
- [ ] Images optimisées

## Conclusion

Un portfolio performant, c'est un portfolio qui convertit. Investissez du temps dans les fondamentaux! 💪
    `,
  },
  {
    id: 3,
    slug: "les-secrets-de-laravel-pour-backends-robustes",
    title: "Les Secrets de Laravel pour Backends Robustes",
    description: "Explorez les features avancées de Laravel pour construire des APIs et des applications backend professionnelles.",
    excerpt: "Laravel est le framework PHP le plus populaire. Voyons pourquoi et comment l'utiliser pour construire des backends solides.",
    author: "Steph M.",
    date: new Date("2026-01-10"),
    readTime: "10 min",
    category: "Backend",
    tags: ["Laravel", "PHP", "Backend", "API"],
    image: "/images/blog-laravel.jpg",
    content: `
# Les Secrets de Laravel pour Backends Robustes

Laravel est le **framework PHP de choix** pour les développeurs sérieux. Voici pourquoi et comment l'utiliser efficacement.

## Pourquoi Laravel?

### Élégance du Code
Laravel utilise des concepts de programmation modernes et une syntax fluide qui rend le code lisible et maintenable.

### Ecosystem Complet
- **Eloquent ORM**: Requêtes élégantes
- **Migrations**: Versioning du schéma DB
- **Factories & Seeders**: Test data
- **Nova**: Admin panel

### Security by Default
- CSRF protection
- SQL injection prevention
- Password hashing (bcrypt)
- Authentication & Authorization

## Architecture Moderne

\`\`\`
app/
├── Models/             # Eloquent Models
├── Controllers/        # Business logic
├── Requests/          # Form validation
├── Resources/         # API responses
└── Services/          # Réusable services
\`\`\`

## Best Practices

### 1. Utilisez Eloquent Relationships
\`\`\`php
// User has many posts
$user->posts()->get();
\`\`\`

### 2. Validez Côté Backend
\`\`\`php
$validated = $request->validate([
  'email' => 'required|email|unique:users',
  'password' => 'required|min:8'
]);
\`\`\`

### 3. Utilisez des Services
Séparez la logique métier des contrôleurs.

## Déploiement

- **Heroku**: Gratuit et simple
- **DigitalOcean App Platform**: Production-ready
- **AWS**: À grande échelle

## Conclusion

Laravel + React = La stack parfaite pour les full-stack developers! 🔥
    `,
  },
  {
    id: 4,
    slug: "react-19-les-nouvelles-features",
    title: "React 19: Les Nouvelles Features à Connaître",
    description: "React 19 apporte des améliorations majeures. Découvrez les nouvelles features et comment les utiliser dans vos projets.",
    excerpt: "React 19 est là! Apprenez les changements importants et comment migrer votre code vers les meilleures pratiques.",
    author: "Steph M.",
    date: new Date("2026-01-05"),
    readTime: "9 min",
    category: "Frontend",
    tags: ["React", "JavaScript", "Frontend", "Web Dev"],
    image: "/images/blog-react.jpg",
    content: `
# React 19: Les Nouvelles Features à Connaître

React 19 apporte une **vague de nouvelles fonctionnalités** conçues pour améliorer la productivité des développeurs.

## Nouvelles Features

### 1. React Server Components (RSC)
Les composants côté serveur réduisent le JavaScript côté client.

\`\`\`jsx
// App.jsx (Server Component par défaut)
export default async function App() {
  const data = await fetch('/api/data');
  return <div>{/* ... */}</div>;
}
\`\`\`

### 2. use() Hook
Déclarez vos dépendances de manière plus élégante.

\`\`\`jsx
function Component({ promise }) {
  const data = use(promise);
  return <div>{data}</div>;
}
\`\`\`

### 3. Actions
Simplifiez les formulaires et mutations.

\`\`\`jsx
'use server';

export async function updateUser(formData) {
  const name = formData.get('name');
  // Update database
}
\`\`\`

### 4. Suspense Amélioré
Le streaming est maintenant plus efficace.

## Migration depuis React 18

### Before (React 18)
\`\`\`jsx
const [data, setData] = useState(null);

useEffect(() => {
  fetchData().then(setData);
}, []);
\`\`\`

### After (React 19)
\`\`\`jsx
// Directement dans le Server Component
const data = await fetchData();
\`\`\`

## Performance Gains

- **Moins de JavaScript**: Server Components
- **Streaming HTML**: Rendez plus rapidement
- **Automatic batching**: Moins de re-renders

## Conclusion

React 19 est un grand pas en avant pour le développement web moderne! 🎉
    `,
  },
  {
    id: 5,
    slug: "tailwind-css-4-guide-complet",
    title: "Tailwind CSS 4: Guide Complet et Astuces",
    description: "Découvrez Tailwind CSS 4 avec ses nouvelles features et comment l'utiliser pour créer des designs modernes rapidement.",
    excerpt: "Tailwind CSS 4 revolutionne le styling. Apprenez les nouveautés et les meilleures pratiques pour des designs cohérents.",
    author: "Steph M.",
    date: new Date("2025-12-28"),
    readTime: "7 min",
    category: "CSS",
    tags: ["Tailwind CSS", "CSS", "Styling", "Design"],
    image: "/images/blog-tailwind.jpg",
    content: `
# Tailwind CSS 4: Guide Complet et Astuces

Tailwind CSS 4 est la **dernière génération** du framework utility-first le plus populaire au monde.

## Pourquoi Tailwind CSS?

### ⚡ Rapidité
Écrivez des designs 10x plus vite avec les utilities pre-built.

### 🎨 Cohérence
Un design system prédéfini pour une cohérence maximale.

### 📦 Petite taille
Tailwind purge le CSS inutilisé (production = ~5-15kb).

### 🔧 Customizable
Tailwind CSS 4 offre une vraie flexibilité via \`@apply\` et variables CSS.

## Installation (Next.js 16 + Tailwind 4)

\`\`\`bash
pnpm add -D tailwindcss@latest postcss autoprefixer
npx tailwindcss init -p
\`\`\`

## Configuration de Base

\`\`\`js
// tailwind.config.js
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
      },
    },
  },
  plugins: [],
};
\`\`\`

## Composants Réutilisables

\`\`\`jsx
// Button.jsx
export default function Button({ children, variant = 'primary' }) {
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
  };
  
  return (
    <button className={\`px-4 py-2 rounded-lg font-medium \${variants[variant]}\`}>
      {children}
    </button>
  );
}
\`\`\`

## Dark Mode

\`\`\`jsx
// globals.css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0f172a;
    --color-text: #f1f5f9;
  }
}

// Ou avec Tailwind classes
<html className="dark">
  <body className="bg-white dark:bg-slate-900">
    ...
  </body>
</html>
\`\`\`

## Astuces de Pro

1. **Utilisez @apply pour les composants**
2. **Créez des variables CSS pour la couleur primaire**
3. **Utilisez les breakpoints responsive**
4. **Organisez votre config tailwind.config.js**

## Conclusion

Tailwind CSS 4 = Développement UI ultra-rapide et professionnel! 🎨
    `,
  },
];

// Fonction utilitaire pour obtenir un article par slug
export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}

// Fonction utilitaire pour obtenir tous les slugs (pour la génération statique)
export function getAllSlugs() {
  return articles.map((article) => ({ slug: article.slug }));
}

// Fonction utilitaire pour récupérer les articles par catégorie
export function getArticlesByCategory(category) {
  return articles.filter((article) => article.category === category);
}

// Trier les articles par date (les plus récents d'abord)
export function getSortedArticles() {
  return [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
}
