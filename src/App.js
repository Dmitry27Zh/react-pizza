import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './scss/app.scss'
import Cart from './pages/Cart'
import { createContext, useState } from 'react'

export const AppContext = createContext({})

function App() {
  const [search, setSearch] = useState('')
  const handleSearch = (value) => {
    setSearch(value)
  }

  return (
    <AppContext.Provider value={{ search, handleSearch }}>
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
