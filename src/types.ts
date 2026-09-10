export type CategoryId =
  | 'trong-trot'
  | 'chan-nuoi'
  | 'agtech'
  | 'du-lieu-ai'
  | 'blockchain'
  | 'ben-vung'

export interface Category {
  id: CategoryId
  name: string
  shortName: string
  description: string
  icon: string
  color: string
}

export interface Article {
  slug: string
  categoryId: CategoryId
  title: string
  summary: string
  readMinutes: number
  content: string[]
}

export type Difficulty = 'de' | 'trung-binh' | 'kho'

export interface QuizQuestion {
  id: string
  categoryId: CategoryId
  difficulty: Difficulty
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface QuizAttempt {
  id: string
  categoryId: CategoryId | 'tong-hop'
  categoryName: string
  score: number
  total: number
  percent: number
  date: string
  difficulty: Difficulty | 'hon-hop'
}
