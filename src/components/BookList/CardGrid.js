import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

import './CardGrid.css'

const CardGrid = ({books}) => (
  <div className='container-fluid text-center card-grid'>
    { books.map(book => <Card key={book.id} book={book} />) }
  </div>
)

CardGrid.propTypes = {
  books: PropTypes.array.isRequired
}

export default CardGrid
