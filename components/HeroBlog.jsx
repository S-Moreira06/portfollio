import Link from "next/link";
import BlogCard from "./BlogCard";
import { getSortedArticles } from "@/lib/articles";

export default function HeroBlog() {
  const articles = getSortedArticles().slice(0, 3); // Les 3 plus récents

  return (
    <section id="blog" className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mon Blog
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Des articles sur le développement web, React, Next.js, et bien d'autres sujets.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Voir tous les articles
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
