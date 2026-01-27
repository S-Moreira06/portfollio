import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ article }) {
  const formattedDate = article.date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-slate-700">
      {/* Image */}
      <div className="relative w-full h-68 overflow-hidden bg-gray-100 dark:bg-slate-700">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Contenu */}
      <div className="px-6 py-3">
        {/* Category Badge */}
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20 rounded-full">
          {article.category}
        </span>

        {/* Titre */}
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {article.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between mb-4 text-xs text-gray-500 dark:text-gray-400">
          <span>{formattedDate}</span>
          <span>{article.readTime}</span>
        </div>

        {/* Tags */}
        <div className="mb-2 flex flex-wrap gap-1">
          {article.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-slate-700 text-black dark:text-gray-900 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <Link
          href={`/blog/${article.slug}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm hover:gap-2 gap-1 transition-all"
        >
          Lire l'article →
        </Link>
      </div>
    </article>
  );
}
