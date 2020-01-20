import React, { useState, useEffect } from 'react'
import {
  func,
} from 'prop-types'
import { connect } from 'react-redux'

import {
  sort,
  searchPhrase,
} from '../../store/actions'
import './Browser.css'

const Browser = ({ onSearchPhrase, onSort }) => {
  const [phrase, setPhrase] = useState('')
  const [sortingType, setSortingType] = useState('id')
  const [sortingDirection, setSortingDirection] = useState()

  useEffect(() => {
    onSort(sortingType, sortingDirection)
  }, [sortingType, sortingDirection, onSort])

  const onPhraseChange = (e) => {
    const newPhrase = e.target.value
    setPhrase(newPhrase)
    onSearchPhrase(newPhrase)
  }

  const onSortingTypeSelectBlur = (e) => {
    setSortingType(e.target.value)
  }

  const onSortingDirectionSelectBlur = (e) => {
    setSortingDirection(e.target.value)
  }

  return (
    <div className="search">
      <input
        className="search-input"
        placeholder="Szukaj..."
        value={phrase}
        onChange={(e) => onPhraseChange(e)}
      />
      <select
        className="search-select"
        defaultValue={sortingType}
        onBlur={(e) => onSortingTypeSelectBlur(e)}
        onChange={(e) => onSortingTypeSelectBlur(e)}
      >
        <option value="id">Domyślnie</option>
        <option value="name">Nazwa</option>
        <option value="price">Cena</option>
      </select>
      <select
        className="search-select"
        defaultValue={sortingDirection}
        onBlur={(e) => onSortingDirectionSelectBlur(e)}
        onChange={(e) => onSortingDirectionSelectBlur(e)}
      >
        <option>Domyślnie</option>
        <option value="ascending">Alfabetycznie rosnąco</option>
        <option value="descending">Alfabetycznie malejąco</option>
      </select>
    </div>
  )
}

Browser.defaultProps = {
  onSearchPhrase: () => {},
  onSort: () => {},
}

Browser.propTypes = {
  onSearchPhrase: func,
  onSort: func,
}

const mapDispatchToProps = (dispatch) => ({
  onSearchPhrase: (phrase) => {
    dispatch(searchPhrase(phrase))
  },
  onSort: (type, direction) => {
    dispatch(sort(type, direction))
  },
})

export default connect(null, mapDispatchToProps)(Browser)
