import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { categories, getCategory } from '../data/categories'
import { articles } from '../data/articles'

export default function Library() {
  const { categoryId } = useParams()
  const [query, setQuery] = useState('')
  const activeCategory = categoryId ? getCategory(categoryId) : undefined

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory = !categoryId || a.categoryId === categoryId
      const matchesQuery =
        !query.trim() ||
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.summary.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [categoryId, query])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-stone-800">Thư viện kiến thức nông nghiệp</h1>
        <p className="mt-2 text-stone-500">
          {activeCategory
            ? activeCategory.description
            : 'Tổng hợp kiến thức về nông nghiệp truyền thống và ứng dụng công nghệ cao.'}
        </p>
      </div>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Tìm bài viết theo từ khóa..."
        className="w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />

      <div className="flex flex-wrap gap-2">
        <Link
          to="/thu-vien"
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
            !categoryId ? 'bg-brand-600 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          Tất cả
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/thu-vien/${cat.id}`}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              categoryId === cat.id
                ? 'bg-brand-600 text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {cat.icon} {cat.shortName}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-stone-300 p-8 text-center text-stone-400">
          Không tìm thấy bài viết phù hợp.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => {
            const cat = getCategory(article.categoryId)
            return (
              <Link
                key={article.slug}
                to={`/thu-vien/bai-viet/${article.slug}`}
                className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="mb-2 inline-flex w-fit items-center gap-1 rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-500">
                  {cat?.icon} {cat?.shortName}
                </span>
                <h3 className="font-semibold text-stone-800">{article.title}</h3>
                <p className="mt-1.5 flex-1 text-sm text-stone-500">{article.summary}</p>
                <span className="mt-3 text-xs text-stone-400">📖 {article.readMinutes} phút đọc</span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
