import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { TAGS } from '../data/tags'
import { articles } from '../data/articles'

export default function Library() {
  const [searchParams] = useSearchParams()
  const activeTag = searchParams.get('tag')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesTag = !activeTag || a.tags.includes(activeTag)
      const matchesQuery =
        !query.trim() ||
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.summary.toLowerCase().includes(query.toLowerCase())
      return matchesTag && matchesQuery
    })
  }, [activeTag, query])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-stone-800">Thư viện kiến thức nông nghiệp</h1>
        <p className="mt-2 text-stone-500">
          {activeTag
            ? `Bài viết thuộc chủ đề "${activeTag}".`
            : 'Tổng hợp kiến thức về nông nghiệp và ứng dụng công nghệ cao.'}
        </p>
      </div>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Tìm bài viết theo tiêu đề hoặc mô tả ngắn..."
        className="w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />

      <div>
        <h2 className="mb-2 text-sm font-semibold text-stone-700">Lọc theo chủ đề</h2>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/thu-vien"
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              !activeTag
                ? 'border-brand-600 bg-brand-600 text-white'
                : 'border-stone-200 bg-white text-stone-600 hover:border-brand-300'
            }`}
          >
            Tất cả
          </Link>
          {TAGS.map((tag) => (
            <Link
              key={tag}
              to={`/thu-vien?tag=${encodeURIComponent(tag)}`}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                activeTag === tag
                  ? 'border-brand-600 bg-brand-600 text-white'
                  : 'border-stone-200 bg-white text-stone-600 hover:border-brand-300'
              }`}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-stone-300 p-8 text-center text-stone-400">
          Chưa có bài viết nào cho chủ đề này.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <Link
              key={article.slug}
              to={`/thu-vien/bai-viet/${article.slug}`}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-2 flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex w-fit items-center rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-semibold text-stone-800">{article.title}</h3>
              <p className="mt-1.5 flex-1 text-sm text-stone-500">{article.summary}</p>
              <span className="mt-3 text-xs text-stone-400">📖 {article.readMinutes} phút đọc</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
