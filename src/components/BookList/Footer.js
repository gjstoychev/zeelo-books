import React from 'react'
import PropTypes from 'prop-types'

import Pagination from './Pagination'

import './Footer.css'

class Footer extends React.PureComponent {
  static propTypes = {
    pagination: PropTypes.object.isRequired,
    updateList: PropTypes.func.isRequired,
    setActivePage: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.handlePageSelect = this.handlePageSelect.bind(this)
  }

  handlePageSelect(event) {
    const {pagination, setActivePage, updateList} = this.props
    const page = event.target.firstChild.data
    const offset = (page - 1) * pagination.count

    updateList(offset, pagination.count)
    setActivePage(page)
  }

  render() {
    const {activePage, totalItems, totalPages, offset, count} = this.props.pagination

    if (!totalPages) {
      return (
        <div className='container-fluid text-center footer no-pagination'>
          <p className='footer-text'>showing {totalItems ? `all ${totalItems}` : 'all'} items without pagination</p>
        </div>
      )
    }

    const paginationItems = []

    for (let number = 1; number <= totalPages; number++) {
      paginationItems.push(
        <Pagination.Item key={number} active={number === activePage} onClick={this.handlePageSelect}>
          {number}
        </Pagination.Item>
      )
    }

    return (
      <div className='container-fluid text-center footer'>
        <Pagination bsSize='large'>{paginationItems}</Pagination>
        <p className='footer-text'>{offset} - {(offset + count < totalItems) ? offset + count : totalItems} / {totalItems}</p>
      </div>
    )
  }
}

export default Footer
