import './App.css'
import Header from './components/Header'
import Categories from './components/Categories'
import './scss/app.scss'
import Sort from './components/Sort'
import PizzaBlock from './components/PizzaBlock'
import pizzas from './assets/json/pizzas.json'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map(({ _id, ...rest }) => (
                <PizzaBlock key={_id} {...rest} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
