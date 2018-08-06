import React from 'react'
import { shallow } from 'enzyme'

import Pagination from './Pagination'
import Footer from './Footer'
import './Footer.css'

describe('(Component) Footer', () => {
  it('should render the component with pagination', () => {
    const pagination = {
      activePage: 2,
      totalItems: 100,
      totalPages: 5,
      offset: 20,
      count: 20
    }

    const wrapper = shallow(
      <Footer
        pagination={pagination}
        updateList = {jest.fn()}
        setActivePage = {jest.fn()}
      />
    )

    expect(wrapper.equals(
      <div className='container-fluid text-center footer'>
        <Pagination bsSize='large'>
          <Pagination.Item active={false} onClick={wrapper.instance().handlePageSelect}>{1}</Pagination.Item>
          <Pagination.Item active={true} onClick={wrapper.instance().handlePageSelect}>{2}</Pagination.Item>
          <Pagination.Item active={false} onClick={wrapper.instance().handlePageSelect}>{3}</Pagination.Item>
          <Pagination.Item active={false} onClick={wrapper.instance().handlePageSelect}>{4}</Pagination.Item>
          <Pagination.Item active={false} onClick={wrapper.instance().handlePageSelect}>{5}</Pagination.Item>
        </Pagination>
        <p className='footer-text'>20 - 40 / 100</p>
      </div>
    )).toEqual(true)
  })

  it('should render the component without pagination', () => {
    const wrapper = shallow(
      <Footer
        pagination={{}}
        updateList = {jest.fn()}
        setActivePage = {jest.fn()}
      />
    )

    expect(wrapper.equals(
      <div className='container-fluid text-center footer no-pagination'>
        <p className='footer-text'>showing all items without pagination</p>
      </div>
    )).toEqual(true)
  })

  it('should handle pagination click', () => {
    const updateList = jest.fn()
    const setActivePage = jest.fn()

    const pagination = {
      activePage: 2,
      totalItems: 100,
      totalPages: 5,
      offset: 20,
      count: 20
    }

    const wrapper = shallow(
      <Footer
        pagination={pagination}
        updateList = {updateList}
        setActivePage = {setActivePage}
      />
    )

    const PaginationItem = wrapper.find('Pagination').childAt(0)
    const page = {target: {firstChild: {data: 5}}}

    PaginationItem.simulate('click', page)

    expect(updateList).toHaveBeenCalledTimes(1)
    expect(updateList).toBeCalledWith(80, 20)

    expect(setActivePage).toHaveBeenCalledTimes(1)
    expect(setActivePage).toBeCalledWith(5)
  })
})
