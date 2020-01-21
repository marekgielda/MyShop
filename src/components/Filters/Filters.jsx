import React, { useState, useEffect } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'

import { sort, searchPhrase } from '@store/actions'

const Filters = ({ onSearchPhrase, onSort }) => {
  const [phrase, setPhrase] = useState('')
  const [sortingType, setSortingType] = useState('id')
  const [sortingDirection, setSortingDirection] = useState()

  useEffect(() => {
    onSort(sortingType, sortingDirection)
  }, [sortingType, sortingDirection, onSort])

  const handlePhraseChange = () => (e) => {
    const newPhrase = e.target.value
    setPhrase(newPhrase)
    onSearchPhrase(newPhrase)
  }

  const handleSortingChange = () => (e) => {
    setSortingType(e.target.value)
  }

  const handleSortDirectionChange = () => (e) => {
    setSortingDirection(e.target.value)
  }

  return (
    <div className="search">
      <input
        className="search-input"
        placeholder="Szukaj..."
        value={phrase}
        onChange={handlePhraseChange()}
      />
      <select
        className="search-select"
        defaultValue={sortingType}
        onBlur={handleSortingChange()}
        onChange={handleSortingChange()}
      >
        <option value="id">Domyślnie</option>
        <option value="name">Nazwa</option>
        <option value="price">Cena</option>
      </select>
      <select
        className="search-select"
        defaultValue={sortingDirection}
        onBlur={handleSortDirectionChange()}
        onChange={handleSortDirectionChange()}
      >
        <option value="ascending">Rosnąco</option>
        <option value="descending">Malejąco</option>
      </select>
    </div>
  )
}

Filters.propTypes = {
  onSearchPhrase: func.isRequired,
  onSort: func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  onSearchPhrase: (phrase) => {
    dispatch(searchPhrase(phrase))
  },
  onSort: (type, direction) => {
    dispatch(sort(type, direction))
  },
})

export default connect(null, mapDispatchToProps)(Filters)
