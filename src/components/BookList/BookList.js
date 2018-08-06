import React from 'react'
import PropTypes from 'prop-types'

import Footer from './Footer'
import Navbar from '../Navbar'
import CardGrid from './CardGrid'

import './BookList.css'

class BookList extends React.PureComponent {
  static propTypes = {
    books: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    pagination: PropTypes.object.isRequired,
    getListItem: PropTypes.func.isRequired,
    setActivePage: PropTypes.func.isRequired,
    createItem: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.handleListUpdate = this.handleListUpdate.bind(this)
  }

  handleListUpdate(offset, count) {
    this.props.getListItem(offset, count)
  }

  componentDidMount() {
    const {activePage, offset, count} = this.props.pagination
    const {getListItem} = this.props

    const defaultPage = 1
    const defaultOffset = 0
    const defaultCount = 50

    if (activePage === defaultPage) {
      return getListItem(defaultOffset, defaultCount)
    }

    getListItem(offset, count)
  }

  render () {
    const {books, pagination, loading, createItem, setActivePage} = this.props

    if (loading) {
      return (
        <div>
          <Navbar />
          <div className='loading-list'>
            <h3>Loading Book List...</h3>
          </div>
        </div>
      )
    }

    if (!books || !books.length) {
      return null
    }

    return (
      <div className='wrapper-list'>
        <Navbar
          count={pagination.count}
          createItem={createItem}
        />
        <CardGrid books={books} />
        <Footer
          pagination={pagination}
          setActivePage={setActivePage}
          updateList={this.handleListUpdate}
        />
      </div>
    )
  }
}

export default BookList
