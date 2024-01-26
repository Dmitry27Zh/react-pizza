import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './scss/app.scss'
import Cart from './pages/Cart'
import categories from './assets/json/categories.json'

export const AppContext = createContext({})

function App() {
  const [currentCategory, setCurrentCategory] = useState(categories[0])
  const handleCategoryChange = (category) => {
    setCurrentCategory(category)
  }

  return (
    <AppContext.Provider value={{ categories, currentCategory, handleCategoryChange }}>
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
