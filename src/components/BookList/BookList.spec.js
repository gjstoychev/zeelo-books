import React from 'react'
import { shallow } from 'enzyme'

import Footer from './Footer'
import Navbar from '../Navbar'
import CardGrid from './CardGrid'
import BookList from './BookList'
import './BookList.css'

describe('(Component) BookList', () => {
  let wrapper, createItem, getListItem, setActivePage

  beforeEach(() => {
    createItem = jest.fn()
    getListItem = jest.fn()
    setActivePage = jest.fn()

    const books = [
      {id: 1, title: 'Nine Princes in Amber', author: 'Roger Zelazny'},
      {id: 2, title: 'The Guns of Avalon', author: 'Roger Zelazny'},
      {id: 3, title: 'Sign of the Unicorn', author: 'Roger Zelazny'}
    ]

    const pagination = {
      activePage: 1,
      totalItems: 11,
      totalPages: 1,
      offset: 0,
      count: 50
    }

    wrapper = shallow(
      <BookList
        books={books}
        pagination={pagination}
        loading={false}
        createItem={createItem}
        getListItem={getListItem}
        setActivePage={setActivePage}
      />
    )
  })

  it('should render the component', () => {
    expect(wrapper.equals(
      <div className='wrapper-list'>
        <Navbar
          count={50}
          createItem={createItem}
        />
        <CardGrid books={[
          {id: 1, title: 'Nine Princes in Amber', author: 'Roger Zelazny'},
          {id: 2, title: 'The Guns of Avalon', author: 'Roger Zelazny'},
          {id: 3, title: 'Sign of the Unicorn', author: 'Roger Zelazny'}
        ]} />
        <Footer
          pagination={{activePage: 1, totalItems: 11, totalPages: 1, offset: 0, count: 50}}
          updateList={wrapper.instance().handleListUpdate}
          setActivePage={setActivePage}
        />
      </div>
    )).toEqual(true)
  })

  it('should render the loading state of the component', () => {
    const wrapper = shallow(
      <BookList
        books={[]}
        pagination={{}}
        loading={true}
        getListItem={getListItem}
        setActivePage={setActivePage}
      />
    )

    expect(wrapper.equals(
      <div>
        <Navbar />
        <div className='loading-list'>
          <h3>Loading Book List...</h3>
        </div>
      </div>
    )).toEqual(true)
  })

  it('should not render the component without items', () => {
    const wrapper = shallow(
      <BookList
        books={[]}
        pagination={{}}
        loading={false}
        getListItem={getListItem}
        setActivePage={setActivePage}
      />
    )

    expect(wrapper.equals(null)).toEqual(true)
  })

  it('should call getListItem with default offset and count on component mount', () => {
    expect(getListItem).toHaveBeenCalledTimes(1)
    expect(getListItem).toBeCalledWith(0, 50)
  })

  it('should call getListItem with diferent offset and count on component mount', () => {
    const getListItem = jest.fn()
    const setActivePage = jest.fn()

    const books = [
      {id: 1, title: 'Nine Princes in Amber', author: 'Roger Zelazny'},
      {id: 2, title: 'The Guns of Avalon', author: 'Roger Zelazny'}
    ]

    const pagination = {
      activePage: 2,
      totalItems: 200,
      totalPages: 10,
      offset: 20,
      count: 20
    }

    shallow(
      <BookList
        books={books}
        pagination={pagination}
        loading={false}
        getListItem={getListItem}
        setActivePage={setActivePage}
      />
    )

    expect(getListItem).toHaveBeenCalledTimes(1)
    expect(getListItem).toBeCalledWith(20, 20)
  })

  it('should handle update list callback on a footer pagination click', () => {
    const getListItem = jest.fn()

    const books = [
      {id: 1, title: 'Nine Princes in Amber', author: 'Roger Zelazny'},
      {id: 2, title: 'The Guns of Avalon', author: 'Roger Zelazny'}
    ]

    const pagination = {
      activePage: 3,
      totalItems: 300,
      totalPages: 3,
      offset: 200,
      count: 100
    }

    const wrapper = shallow(
      <BookList
        books={books}
        pagination={pagination}
        loading={false}
        getListItem={getListItem}
        setActivePage={setActivePage}
      />
    )

    const footer = wrapper.find('Footer').props()

    footer.updateList()

    expect(getListItem).toHaveBeenCalledTimes(2)
    expect(getListItem).toBeCalledWith(200, 100)
  })
})
