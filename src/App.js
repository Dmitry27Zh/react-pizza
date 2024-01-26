import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './scss/app.scss'
import Cart from './pages/Cart'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('')
  const handleSearch = (value) => {
    setSearch(value)
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Header search={search} onSearch={handleSearch} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
