import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Navbar.css'

class Navbar extends React.PureComponent {
  static propTypes = {
    count: PropTypes.number,
    createItem: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.handleCreateItem = this.handleCreateItem.bind(this)
  }

  handleCreateItem() {
    const {count, createItem} = this.props

    createItem(count)
  }

  render () {
    return (
      <div className='container-fluid text-center nav'>
        <Link to={{pathname: '/'}}>
          <h1 className='nav-title'><span className='nav-title-blue'>zeelo</span> books</h1>
          { this.props.createItem && <button className='btn btn-default nav-btn' onClick={this.handleCreateItem}>add new book</button> }
        </Link>
      </div>
    )
  }
}

export default Navbar
