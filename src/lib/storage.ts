import type { QuizAttempt } from '../types'

const HISTORY_KEY = 'farmblock.quiz.history.v1'

export function getHistory(): QuizAttempt[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    if (!raw) return []
    return JSON.parse(raw) as QuizAttempt[]
  } catch {
    return []
  }
}

export function saveAttempt(attempt: QuizAttempt) {
  try {
    const history = getHistory()
    history.unshift(attempt)
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 100)))
  } catch {
    // localStorage unavailable (private mode, etc.) — silently skip persistence
  }
}

export function clearHistory() {
  try {
    localStorage.removeItem(HISTORY_KEY)
  } catch {
    // ignore
  }
}
