export interface Article {
  slug: string
  tags: string[]
  title: string
  summary: string
  readMinutes: number
  content: string[]
}

export type Difficulty = 'de' | 'trung-binh' | 'kho'

export interface QuizQuestion {
  id: string
  tags: string[]
  difficulty: Difficulty
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface QuizAttempt {
  id: string
  tagName: string
  score: number
  total: number
  percent: number
  date: string
  difficulty: Difficulty | 'hon-hop'
}
