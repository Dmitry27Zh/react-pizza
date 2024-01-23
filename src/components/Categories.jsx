const CATEGORIES = [
  { _id: 1, title: 'Все' },
  { _id: 2, title: 'Мясные' },
  { _id: 3, title: 'Вегетарианская' },
  { _id: 4, title: 'Гриль' },
  { _id: 5, title: 'Острые' },
  { _id: 6, title: 'Закрытые' },
]

const Categories = () => {
  return (
    <div className="categories">
      <ul>
        {CATEGORIES.map((category) => (
          <li key={category._id}>{category.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
