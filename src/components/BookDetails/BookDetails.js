import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../Navbar'
import BookDetailsPage from './BookDetailsPage'

import './BookDetails.css'

class BookDetails extends React.PureComponent {
  static propTypes = {
    details: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    getItemDetails: PropTypes.func.isRequired
  }

  componentDidMount() {
    const {location, getItemDetails} = this.props

    const id = location.pathname.split('/').reverse()[0]

    getItemDetails(id)
  }

  render () {
    const {details, loading} = this.props

    if (loading) {
      return (
        <div>
          <Navbar />
          <div className='loading-details'>
            <h3>Loading Book Details...</h3>
          </div>
        </div>
      )
    }

    if (!details.id) {
      return null
    }

    return (
      <div>
        <Navbar />
        <BookDetailsPage item={details} />
      </div>
    )
  }
}

export default BookDetails
