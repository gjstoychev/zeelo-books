import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import configureMockStore from 'redux-mock-store'

import BookListContainer from './BookListContainer'
import BookList from '../components/BookList'

describe('(Redux Container) BookListContainer', () => {
  let container, component

  beforeEach(() => {
    const store = configureMockStore()({
      books: {
        listItems: [{
            id: 1,
            title: 'Donnerjack',
            author: 'Roger Zelazny'
          },
          {
            id: 2,
            title: 'Nine Princes in Amber',
            author: 'Roger Zelazny'
          }
        ],
        pagination: {
          activePage: 1,
          totalItems: 100,
          totalPages: 5,
          offset: 0,
          count: 20
        },
        loading: true
      }
    })

    const wrapper = mount(
      <Provider store = {store} >
        <MemoryRouter >
          <BookListContainer / >
        </MemoryRouter>
      </Provider>
    )

    container = wrapper.find(BookListContainer)
    component = container.find(BookList)
  })

  it('should render the component with the provided item list', () => {
    const got = component.prop('books')

    const want = [{
        id: 1,
        title: 'Donnerjack',
        author: 'Roger Zelazny'
      },
      {
        id: 2,
        title: 'Nine Princes in Amber',
        author: 'Roger Zelazny'
      }
    ]

    expect(got).toEqual(want)
  })

  it('should render the component with the provided pagination', () => {
    const got = component.prop('pagination')

    const want = {
      activePage: 1,
      totalItems: 100,
      totalPages: 5,
      offset: 0,
      count: 20
    }

    expect(got).toEqual(want)
  })

  it('should render the component with the provided loading statement', () => {
    const got = component.prop('loading')

    expect(got).toEqual(true)
  })
})
