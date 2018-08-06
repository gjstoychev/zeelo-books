import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Card.css'

const Card = ({book}) => (
  <div className='card'>
    <img
      src={book.image}
      alt={'Missing Cover'}
      className='img-thumbnail img-responsive card-img'
    />
    <Link to={{pathname: `/${book.id}`}}>
      <div className='card-info'>
        <div className='card-info-table'>
          <p className='card-info-cell card-info-cell-title'>{book.title}</p>
        </div>
        <div className='card-info-table'>
          <p className='card-info-cell'>{book.author}</p>
        </div>
      </div>
    </Link>
  </div>
)

Card.propTypes = {
  book: PropTypes.object.isRequired
}

export default Card
