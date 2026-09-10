import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { categories, getCategory } from '../data/categories'
import { quizQuestions } from '../data/quizzes'
import type { Difficulty, QuizQuestion } from '../types'
import { saveAttempt } from '../lib/storage'

type Stage = 'setup' | 'playing' | 'result'

const difficultyLabels: Record<Difficulty, string> = {
  de: 'Dễ',
  'trung-binh': 'Trung bình',
  kho: 'Khó',
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export default function Quiz() {
  const { categoryId: paramCategory } = useParams()
  const navigate = useNavigate()

  const [stage, setStage] = useState<Stage>('setup')
  const [categoryId, setCategoryId] = useState<string>(paramCategory ?? 'tong-hop')
  const [difficulty, setDifficulty] = useState<Difficulty | 'hon-hop'>('hon-hop')
  const [questionCount, setQuestionCount] = useState(10)
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>([])

  const pool = useMemo(() => {
    let base = categoryId === 'tong-hop' ? quizQuestions : quizQuestions.filter((q) => q.categoryId === categoryId)
    if (difficulty !== 'hon-hop') base = base.filter((q) => q.difficulty === difficulty)
    return base
  }, [categoryId, difficulty])

  function startQuiz() {
    const count = Math.min(questionCount, pool.length)
    const selectedQuestions = shuffle(pool).slice(0, count)
    setQuestions(selectedQuestions)
    setAnswers(new Array(selectedQuestions.length).fill(null))
    setCurrentIndex(0)
    setSelected(null)
    setStage('playing')
  }

  function chooseAnswer(index: number) {
    if (selected !== null) return
    setSelected(index)
    const next = [...answers]
    next[currentIndex] = index
    setAnswers(next)
  }

  function nextQuestion() {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1)
      setSelected(null)
    } else {
      finishQuiz()
    }
  }

  function finishQuiz() {
    const score = questions.reduce(
      (acc, q, i) => acc + (answers[i] === q.correctIndex ? 1 : 0),
      0,
    )
    const cat = categoryId === 'tong-hop' ? null : getCategory(categoryId)
    saveAttempt({
      id: `${Date.now()}`,
      categoryId: categoryId === 'tong-hop' ? 'tong-hop' : (categoryId as never),
      categoryName: cat ? cat.name : 'Tổng hợp mọi chủ đề',
      score,
      total: questions.length,
      percent: Math.round((score / questions.length) * 100),
      date: new Date().toISOString(),
      difficulty,
    })
    setStage('result')
  }

  function reset() {
    setStage('setup')
    setSelected(null)
  }

  if (stage === 'setup') {
    return (
      <div className="mx-auto max-w-2xl space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold text-stone-800">Kiểm tra kiến thức</h1>
          <p className="mt-2 text-stone-500">
            Chọn chủ đề, độ khó và số câu hỏi, sau đó bắt đầu làm bài để tự đánh giá mức độ am hiểu của bạn.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-stone-400">Chủ đề</h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <button
              onClick={() => setCategoryId('tong-hop')}
              className={`rounded-xl border p-3 text-left text-sm font-medium transition ${
                categoryId === 'tong-hop'
                  ? 'border-green-600 bg-green-50 text-green-800'
                  : 'border-stone-200 bg-white text-stone-600 hover:border-green-300'
              }`}
            >
              🎯 Tổng hợp
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryId(cat.id)}
                className={`rounded-xl border p-3 text-left text-sm font-medium transition ${
                  categoryId === cat.id
                    ? 'border-green-600 bg-green-50 text-green-800'
                    : 'border-stone-200 bg-white text-stone-600 hover:border-green-300'
                }`}
              >
                {cat.icon} {cat.shortName}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-stone-400">Độ khó</h2>
          <div className="flex flex-wrap gap-2">
            {(['hon-hop', 'de', 'trung-binh', 'kho'] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  difficulty === d
                    ? 'bg-green-600 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {d === 'hon-hop' ? 'Hỗn hợp' : difficultyLabels[d]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-stone-400">Số câu hỏi</h2>
          <div className="flex flex-wrap gap-2">
            {[5, 10, 15, 20].map((n) => (
              <button
                key={n}
                onClick={() => setQuestionCount(n)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  questionCount === n
                    ? 'bg-green-600 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {n} câu
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-stone-200 bg-white p-4 text-sm text-stone-500">
          Có <strong className="text-stone-700">{pool.length}</strong> câu hỏi phù hợp với lựa chọn hiện
          tại. Bài quiz sẽ gồm{' '}
          <strong className="text-stone-700">{Math.min(questionCount, pool.length)}</strong> câu ngẫu
          nhiên.
        </div>

        <button
          disabled={pool.length === 0}
          onClick={startQuiz}
          className="w-full rounded-full bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-stone-300"
        >
          Bắt đầu làm bài
        </button>
      </div>
    )
  }

  if (stage === 'playing') {
    const question = questions[currentIndex]
    const cat = getCategory(question.categoryId)
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="flex items-center justify-between text-sm text-stone-500">
          <span>
            Câu {currentIndex + 1}/{questions.length}
          </span>
          <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium">
            {cat?.icon} {cat?.shortName} · {difficultyLabels[question.difficulty]}
          </span>
        </div>

        <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
          <div
            className="h-full rounded-full bg-green-600 transition-all"
            style={{ width: `${((currentIndex + (selected !== null ? 1 : 0)) / questions.length) * 100}%` }}
          />
        </div>

        <h2 className="text-xl font-bold text-stone-800">{question.question}</h2>

        <div className="space-y-3">
          {question.options.map((option, i) => {
            const isCorrect = i === question.correctIndex
            const isSelected = i === selected
            let stateClass = 'border-stone-200 bg-white hover:border-green-300'
            if (selected !== null) {
              if (isCorrect) stateClass = 'border-green-500 bg-green-50'
              else if (isSelected) stateClass = 'border-red-400 bg-red-50'
              else stateClass = 'border-stone-200 bg-white opacity-60'
            }
            return (
              <button
                key={i}
                onClick={() => chooseAnswer(i)}
                disabled={selected !== null}
                className={`w-full rounded-xl border p-4 text-left text-sm font-medium text-stone-700 transition ${stateClass}`}
              >
                <span className="mr-2 font-semibold">{String.fromCharCode(65 + i)}.</span>
                {option}
                {selected !== null && isCorrect && <span className="ml-2">✅</span>}
                {selected !== null && isSelected && !isCorrect && <span className="ml-2">❌</span>}
              </button>
            )
          })}
        </div>

        {selected !== null && (
          <div className="rounded-xl bg-stone-100 p-4 text-sm text-stone-600">
            <strong className="text-stone-800">Giải thích: </strong>
            {question.explanation}
          </div>
        )}

        <button
          onClick={nextQuestion}
          disabled={selected === null}
          className="w-full rounded-full bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-stone-300"
        >
          {currentIndex + 1 < questions.length ? 'Câu tiếp theo →' : 'Xem kết quả'}
        </button>
      </div>
    )
  }

  // result stage
  const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.correctIndex ? 1 : 0), 0)
  const percent = Math.round((score / questions.length) * 100)
  const verdict =
    percent >= 90
      ? { text: 'Xuất sắc! Bạn rất am hiểu về chủ đề này.', emoji: '🏆' }
      : percent >= 70
        ? { text: 'Khá tốt! Bạn nắm khá vững kiến thức.', emoji: '🌟' }
        : percent >= 50
          ? { text: 'Ổn! Bạn nên đọc thêm để củng cố kiến thức.', emoji: '📘' }
          : { text: 'Hãy quay lại thư viện kiến thức để ôn tập nhé.', emoji: '💪' }

  return (
    <div className="mx-auto max-w-2xl space-y-8 text-center">
      <div>
        <div className="text-5xl">{verdict.emoji}</div>
        <h1 className="mt-3 text-3xl font-extrabold text-stone-800">
          {score}/{questions.length} câu đúng
        </h1>
        <p className="mt-1 text-lg font-semibold text-green-700">{percent}%</p>
        <p className="mt-2 text-stone-500">{verdict.text}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={reset}
          className="rounded-full bg-green-600 px-6 py-2.5 font-semibold text-white hover:bg-green-700"
        >
          Làm bài khác
        </button>
        <button
          onClick={() => navigate('/thu-vien')}
          className="rounded-full border border-stone-300 px-6 py-2.5 font-semibold text-stone-600 hover:bg-stone-50"
        >
          Ôn lại kiến thức
        </button>
        <button
          onClick={() => navigate('/lich-su')}
          className="rounded-full border border-stone-300 px-6 py-2.5 font-semibold text-stone-600 hover:bg-stone-50"
        >
          Xem lịch sử
        </button>
      </div>

      <div className="space-y-3 text-left">
        <h2 className="text-lg font-bold text-stone-800">Xem lại đáp án</h2>
        {questions.map((q, i) => {
          const correct = answers[i] === q.correctIndex
          return (
            <div
              key={q.id}
              className={`rounded-xl border p-4 text-sm ${correct ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}
            >
              <p className="font-medium text-stone-800">
                {i + 1}. {q.question}
              </p>
              <p className="mt-1 text-stone-600">
                Đáp án đúng: <strong>{q.options[q.correctIndex]}</strong>
                {!correct && answers[i] !== null && (
                  <>
                    {' '}
                    · Bạn chọn: <strong>{q.options[answers[i] as number]}</strong>
                  </>
                )}
              </p>
              <p className="mt-1 text-stone-500">{q.explanation}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
