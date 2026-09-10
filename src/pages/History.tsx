import { useState } from 'react'
import { Link } from 'react-router-dom'
import { clearHistory, getHistory } from '../lib/storage'

export default function History() {
  const [history, setHistory] = useState(getHistory())

  const bestScore = history.length ? Math.max(...history.map((h) => h.percent)) : 0
  const avgScore = history.length
    ? Math.round(history.reduce((acc, h) => acc + h.percent, 0) / history.length)
    : 0

  function handleClear() {
    clearHistory()
    setHistory([])
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-stone-800">Kết quả của tôi</h1>
        <p className="mt-2 text-stone-500">
          Lịch sử các lần làm quiz được lưu trực tiếp trên trình duyệt của bạn (không gửi lên máy chủ nào).
        </p>
      </div>

      {history.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-300 p-10 text-center">
          <p className="text-stone-400">Bạn chưa làm bài quiz nào.</p>
          <Link
            to="/quiz"
            className="mt-4 inline-block rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
          >
            Làm quiz đầu tiên
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="rounded-2xl border border-stone-200 bg-white py-5">
              <div className="text-2xl font-extrabold text-green-700">{history.length}</div>
              <div className="mt-1 text-xs font-medium uppercase text-stone-400">Lượt làm bài</div>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white py-5">
              <div className="text-2xl font-extrabold text-green-700">{bestScore}%</div>
              <div className="mt-1 text-xs font-medium uppercase text-stone-400">Điểm cao nhất</div>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white py-5">
              <div className="text-2xl font-extrabold text-green-700">{avgScore}%</div>
              <div className="mt-1 text-xs font-medium uppercase text-stone-400">Điểm trung bình</div>
            </div>
          </div>

          <div className="space-y-3">
            {history.map((h) => (
              <div
                key={h.id}
                className="flex items-center justify-between rounded-xl border border-stone-200 bg-white p-4"
              >
                <div>
                  <p className="font-semibold text-stone-800">{h.categoryName}</p>
                  <p className="text-xs text-stone-400">
                    {new Date(h.date).toLocaleString('vi-VN')} ·{' '}
                    {h.difficulty === 'hon-hop' ? 'Hỗn hợp' : h.difficulty}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-700">
                    {h.score}/{h.total}
                  </p>
                  <p className="text-xs text-stone-400">{h.percent}%</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleClear}
            className="text-sm font-medium text-red-500 hover:underline"
          >
            Xóa toàn bộ lịch sử
          </button>
        </>
      )}
    </div>
  )
}
