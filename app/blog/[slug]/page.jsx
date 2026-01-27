import Link from "next/link";
import Image from "next/image";
import { getArticleBySlug, getAllSlugs, getSortedArticles } from "@/lib/articles";
import { notFound } from "next/navigation";

// Génération statique des routes
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

// Metadata SEO
export async function generateMetadata({ params }) {
  // ✅ AWAIT params (c'est ça le fix!)
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article non trouvé",
    };
  }
  return {
    title: `${article.title} | Steph-M Blog`,
    description: article.description,
    keywords: article.tags.join(", "),
    openGraph: {
      title: article.title,
      description: article.description,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
      publishedTime: article.date.toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}


// Main Page Component (pas async, juste un composant React normal)
export default async function ArticlePage({ params }) {
  // ✅ AWAIT params ici aussi!
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const formattedDate = article.date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Obtenir les articles voisins pour suggestions
  const allArticles = getSortedArticles();
  const currentIndex = allArticles.findIndex((a) => a.slug === article.slug);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 pt-10">
      {/* Article Header */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
            Blog
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">{article.title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {article.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600 dark:text-gray-400">
          <span>Par {article.author}</span>
          <span>•</span>
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{article.readTime}</span>
          <span>•</span>
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold">
            {article.category}
          </span>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-96 rounded-lg overflow-hidden mb-12 bg-gray-200 dark:bg-slate-800">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="prose dark:prose-invert max-w-none mb-12">
          {article.content.split("\n").map((line, i) => {
            if (line.startsWith("# ")) {
              return (
                <h1 key={i} className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                  {line.replace("# ", "")}
                </h1>
              );
            }
            if (line.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-bold mt-6 mb-3 text-gray-900 dark:text-white">
                  {line.replace("## ", "")}
                </h2>
              );
            }
            if (line.startsWith("### ")) {
              return (
                <h3 key={i} className="text-xl font-bold mt-4 mb-2 text-gray-900 dark:text-white">
                  {line.replace("### ", "")}
                </h3>
              );
            }
            if (line.startsWith("- ")) {
              return (
                <li key={i} className="ml-6 mb-2 text-gray-700 dark:text-gray-300 list-disc">
                  {line.replace("- ", "")}
                </li>
              );
            }
            if (line.trim().startsWith("```")) {
              return null; // Skip code fences
            }
            if (line.trim()) {
              return (
                <p key={i} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {line}
                </p>
              );
            }
            return null;
          })}
        </div>

        {/* Tags */}
        <div className="mb-12 pb-8 border-b border-gray-200 dark:border-slate-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
            Tags:
          </h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Card */}
        <div className="mb-12 p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
              {article.author.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">
                {article.author}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Développeur Full-Stack passionné par React, Next.js et Node.js
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Articles */}
        <nav className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {prevArticle ? (
            <Link
              href={`/blog/${prevArticle.slug}`}
              className="group p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors"
            >
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                ← Article Précédent
              </p>
              <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {prevArticle.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {nextArticle ? (
            <Link
              href={`/blog/${nextArticle.slug}`}
              className="group p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors text-right"
            >
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                Article Suivant →
              </p>
              <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {nextArticle.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </nav>

        {/* CTA */}
        <div className="p-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-2">Vous avez aimé cet article?</h3>
          <p className="mb-4 opacity-90">
            Consultez d'autres articles ou contactez-moi pour discuter d'un projet.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/blog"
              className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Voir tous les articles
            </Link>
            <a
              href="/#contact"
              className="px-6 py-2 bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg transition-colors"
            >
              Me Contacter
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
