import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'

import Navbar from './Navbar'
import './Navbar.css'

describe('(Component) Navbar', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Navbar />)

    expect(wrapper.equals(
      <div className='container-fluid text-center nav'>
        <Link to={{pathname: '/'}}>
          <h1 className='nav-title'><span className='nav-title-blue'>zeelo</span> books</h1>
        </Link>
      </div>
    )).toEqual(true)
  })

  it('should render the component with button', () => {
    const wrapper = shallow(<Navbar count={50} createItem={jest.fn()} />)

    expect(wrapper.equals(
      <div className='container-fluid text-center nav'>
        <Link to={{pathname: '/'}}>
          <h1 className='nav-title'><span className='nav-title-blue'>zeelo</span> books</h1>
          <button className='btn btn-default nav-btn' onClick={wrapper.instance().handleCreateItem}>add new book</button>
        </Link>
      </div>
    )).toEqual(true)
  })

  it('should handle the create item click event', () => {
    const createItem = jest.fn()
    const wrapper = shallow(<Navbar count={33} createItem={createItem} />)

    wrapper.find('button').simulate('click')

    expect(createItem).toHaveBeenCalledTimes(1)
    expect(createItem).toBeCalledWith(33)
  })
})
