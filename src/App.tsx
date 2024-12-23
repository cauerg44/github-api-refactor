import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import HomePage from './routes/Home/HomePage'
import SearchPage from './routes/Home/SearchPage'
import GithubSearchCard from './components/GithubSearchCard'
import NotFound from './routes/Home/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} >
            <Route path=":user" element={<GithubSearchCard />} />
            <Route path="user/not-found" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
