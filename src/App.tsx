import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Library from './pages/Library'
import ArticleDetail from './pages/ArticleDetail'
import Quiz from './pages/Quiz'
import History from './pages/History'

export default function App() {
  return (
    <BrowserRouter basename="/FarmBlock-academy">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="thu-vien" element={<Library />} />
          <Route path="thu-vien/bai-viet/:slug" element={<ArticleDetail />} />
          <Route path="thu-vien/:categoryId" element={<Library />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="quiz/:categoryId" element={<Quiz />} />
          <Route path="lich-su" element={<History />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
