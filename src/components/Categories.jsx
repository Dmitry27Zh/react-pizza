const Categories = ({ categories, currentCategory, handleCategoryChange }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li
            key={category._id}
            className={category._id === currentCategory ? 'active' : ''}
            onClick={() => handleCategoryChange(category._id)}
          >
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
