'use client';

import { useTranslation } from 'react-i18next';

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-md py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {t('blog.title', 'Blog')}
          </h1>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Post Cards */}
            {[1, 2, 3, 4, 5, 6].map((post) => (
              <article key={post} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video bg-gray-200 rounded-t-xl"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-500">
                      {t('blog.date', 'Ocak 15, 2025')}
                    </span>
                    <span className="text-sm text-blue-600">
                      {t('blog.category', 'Teknoloji')}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('blog.postTitle', 'Blog Post Başlığı')} {post}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {t('blog.excerpt', 'Bu blog yazısının kısa özeti burada yer alacak. Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    {t('blog.readMore', 'Devamını Oku')} →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
