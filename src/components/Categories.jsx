const Categories = ({ items, current, onChange }) => {
  return (
    <div className="categories">
      <ul>
        {items.map((item) => (
          <li key={item._id} className={item._id === current ? 'active' : ''} onClick={() => onChange(item._id)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
