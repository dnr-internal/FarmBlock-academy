import { Link, Navigate, useParams } from 'react-router-dom'
import { getArticle, getArticlesByCategory } from '../data/articles'
import { getCategory } from '../data/categories'

export default function ArticleDetail() {
  const { slug } = useParams()
  const article = slug ? getArticle(slug) : undefined

  if (!article) return <Navigate to="/thu-vien" replace />

  const category = getCategory(article.categoryId)
  const related = getArticlesByCategory(article.categoryId).filter((a) => a.slug !== article.slug)

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <nav className="text-sm text-stone-400">
        <Link to="/thu-vien" className="hover:text-green-700">
          Thư viện
        </Link>
        {' / '}
        <Link to={`/thu-vien/${category?.id}`} className="hover:text-green-700">
          {category?.shortName}
        </Link>
      </nav>

      <header>
        <span className="mb-3 inline-flex items-center gap-1 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-500">
          {category?.icon} {category?.name}
        </span>
        <h1 className="text-3xl font-extrabold leading-tight text-stone-800">{article.title}</h1>
        <p className="mt-3 text-stone-500">{article.summary}</p>
        <p className="mt-2 text-xs text-stone-400">📖 {article.readMinutes} phút đọc</p>
      </header>

      <article className="space-y-4 rounded-2xl border border-stone-200 bg-white p-6 leading-relaxed text-stone-700 sm:p-8">
        {article.content.map((paragraph, i) =>
          paragraph.startsWith('## ') ? (
            <h2 key={i} className="pt-2 text-xl font-bold text-stone-800">
              {paragraph.slice(3)}
            </h2>
          ) : (
            <p key={i}>{paragraph}</p>
          ),
        )}
      </article>

      <div className="rounded-2xl bg-green-50 p-6 text-center">
        <p className="font-medium text-green-800">Đã đọc xong? Kiểm tra ngay hiểu biết của bạn!</p>
        <Link
          to={`/quiz/${category?.id}`}
          className="mt-3 inline-block rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
        >
          Làm quiz chủ đề {category?.shortName} →
        </Link>
      </div>

      {related.length > 0 && (
        <div>
          <h2 className="mb-3 text-lg font-bold text-stone-800">Bài viết liên quan</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {related.map((a) => (
              <Link
                key={a.slug}
                to={`/thu-vien/bai-viet/${a.slug}`}
                className="rounded-xl border border-stone-200 bg-white p-4 text-sm font-medium text-stone-700 transition hover:border-green-300 hover:text-green-700"
              >
                {a.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
