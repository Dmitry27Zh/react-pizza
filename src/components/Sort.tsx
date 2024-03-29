import React, { useCallback, useEffect, useRef, useState } from 'react'
import { changeSort, selectFilter } from '../redux/slices/filter'
import { SortOption } from '../types'
import { useAppDispatch, useAppSelector } from '../redux/store'

const Sort = () => {
  const { sortOptions, sort } = useAppSelector(selectFilter)
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const element = useRef<HTMLDivElement>(null)
  const handleToggleClick = useCallback(() => {
    setIsOpen((prevState) => !prevState)
  }, [])
  const handleChange = useCallback((option: SortOption) => {
    dispatch(changeSort(option))
    setIsOpen(false)
  }, [])
  useEffect(() => {
    const node = element.current

    if (node) {
      const handleDocumentClick = (e: MouseEvent) => {
        if (!e.composedPath().includes(node)) {
          setIsOpen(false)
        }
      }
      document.addEventListener('click', handleDocumentClick)

      return () => {
        document.removeEventListener('click', handleDocumentClick)
      }
    }
  }, [])

  return (
    <div ref={element} className="sort">
      <div className="sort__label">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={handleToggleClick}>{sort.title}</span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {sortOptions.map((option) => (
              <li
                key={option._id}
                className={sort._id === option._id ? 'active' : ''}
                onClick={() => handleChange(option)}
              >
                {option.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default React.memo(Sort)
