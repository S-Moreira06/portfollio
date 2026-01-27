"use client";

import { useState, useMemo } from "react";
import BlogCard from "@/components/BlogCard";
import { getSortedArticles, articles } from "@/lib/articles";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const allArticles = getSortedArticles();

  // Extraire toutes les catégories uniques
  const categories = [
    "All",
    ...new Set(articles.map((article) => article.category)),
  ];

  // Filtrer les articles par catégorie
  const filteredArticles = useMemo(() => {
    if (selectedCategory === "All") {
      return allArticles;
    }
    return allArticles.filter((article) => article.category === selectedCategory);
  }, [selectedCategory, allArticles]);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold my-4">Mon Blog</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Articles sur le développement web, React, Next.js, et bien d'autres
            sujets passionnants.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        {/* Filters */}
        <div className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Catégories
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 hover:border-blue-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Aucun article trouvé dans cette catégorie.
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {allArticles.length}
              </p>
              <p className="text-gray-600 dark:text-gray-400">Articles</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                {categories.length - 1}
              </p>
              <p className="text-gray-600 dark:text-gray-400">Catégories</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                ~{Math.round(allArticles.reduce((acc, a) => acc + parseInt(a.readTime), 0) / allArticles.length)}
              </p>
              <p className="text-gray-600 dark:text-gray-400">Min de lecture</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
