import { Link } from 'react-router-dom'
import { TAGS } from '../data/tags'
import { articles } from '../data/articles'
import { quizQuestions } from '../data/quizzes'

export default function Home() {
  const latestArticles = articles.slice(0, 6)

  return (
    <div className="space-y-16">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 via-brand-700 to-brand-500 px-6 py-14 text-white sm:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-medium">
            Miễn phí • Không quảng cáo • Học mọi lúc
          </p>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Tra cứu kiến thức nông nghiệp &amp; công nghệ cao, kiểm tra hiểu biết của bạn
          </h1>
          <p className="mt-4 text-base text-brand-50 sm:text-lg">
            FarmBlock Academy giúp bạn tìm hiểu về đất, nước, dinh dưỡng cây trồng và ứng dụng công nghệ
            trong nông nghiệp — sau đó làm quiz để tự đánh giá mức độ am hiểu.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/thu-vien"
              className="rounded-full bg-white px-6 py-3 font-semibold text-brand-700 shadow transition hover:bg-brand-50"
            >
              📚 Khám phá thư viện
            </Link>
            <Link
              to="/quiz"
              className="rounded-full border-2 border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              🧠 Làm quiz ngay
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
        <Stat label="Chủ đề" value={TAGS.length} />
        <Stat label="Bài viết kiến thức" value={articles.length} />
        <Stat label="Câu hỏi quiz" value={quizQuestions.length} />
        <Stat label="Chi phí" value="0đ" />
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-stone-800">Lọc theo chủ đề</h2>
          <Link to="/thu-vien" className="text-sm font-medium text-brand-700 hover:underline">
            Xem tất cả bài viết →
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <Link
              key={tag}
              to={`/thu-vien?tag=${encodeURIComponent(tag)}`}
              className="rounded-full border border-stone-200 bg-white px-4 py-1.5 text-sm font-medium text-stone-600 transition hover:border-brand-300 hover:text-brand-700"
            >
              {tag}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-stone-800">Bài viết mới nhất</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latestArticles.map((article) => (
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
      </section>

      <section className="rounded-3xl border border-stone-200 bg-white p-8 text-center">
        <h2 className="text-2xl font-bold text-stone-800">Sẵn sàng thử thách kiến thức của bạn?</h2>
        <p className="mx-auto mt-2 max-w-xl text-stone-500">
          Chọn một chủ đề, làm bài quiz trắc nghiệm và nhận kết quả ngay lập tức kèm giải thích chi tiết
          cho từng câu hỏi.
        </p>
        <Link
          to="/quiz"
          className="mt-5 inline-block rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
        >
          Bắt đầu làm quiz
        </Link>
      </section>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white py-5">
      <div className="text-2xl font-extrabold text-brand-700">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wide text-stone-400">{label}</div>
    </div>
  )
}
