import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import configureMockStore from 'redux-mock-store'

import BookDetailsContainer from './BookDetailsContainer'
import BookDetails from '../components/BookDetails'

describe('(Redux Container) BookDetailsContainer', () => {
  let container, component

  beforeEach(() => {
    const location = {
      pathname: '/12'
    }

    const store = configureMockStore()({
      books: {
        itemDetails: {
          id: 12,
          title: 'Brazil'
        },
        loading: false
      }
    })

    const wrapper = mount(
      <Provider store = {store} >
        <MemoryRouter >
          <BookDetailsContainer location = {location} />
        </MemoryRouter>
      </Provider>
    )

    container = wrapper.find(BookDetailsContainer)
    component = container.find(BookDetails)
  })

  it('should render the component with the provided item details', () => {
    const got = component.prop('details')

    const want = {
      id: 12,
      title: 'Brazil'
    }

    expect(got).toEqual(want)
  })

  it('should render the component with the provided loading statement', () => {
    const got = component.prop('loading')

    expect(got).toEqual(false)
  })
})
