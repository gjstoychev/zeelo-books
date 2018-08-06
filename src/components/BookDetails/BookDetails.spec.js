import React from 'react'
import { shallow } from 'enzyme'

import Navbar from '../Navbar'
import BookDetails from './BookDetails'
import BookDetailsPage from './BookDetailsPage'
import './BookDetails.css'

describe('(Component) BookDetails', () => {
  let wrapper, getItemDetails

  beforeEach(() => {
    getItemDetails = jest.fn()

    const location = {
      pathname: '/312'
    }

    const details = {
      id: 312,
      title: 'Nine Princes in Amber',
      author: 'Roger Zelazny'
    }

    wrapper = shallow(
      <BookDetails
        details={details}
        loading={false}
        location={location}
        getItemDetails={getItemDetails}
      />
    )
  })

  it('should render the component', () => {
    expect(wrapper.equals(
      <div>
        <Navbar />
        <BookDetailsPage item={{
          id: 312,
          title: 'Nine Princes in Amber',
          author: 'Roger Zelazny'
        }} />
      </div>
    )).toEqual(true)
  })

  it('should render the loading state of the component', () => {
    const wrapper = shallow(
      <BookDetails
        details={{}}
        loading={true}
        location={location}
        getItemDetails={getItemDetails}
      />
    )

    expect(wrapper.equals(
      <div>
        <Navbar />
        <div className='loading-details'>
          <h3>Loading Book Details...</h3>
        </div>
      </div>
    )).toEqual(true)
  })

  it('should not render the component without items', () => {
    const wrapper = shallow(
      <BookDetails
        details={{}}
        loading={false}
        location={location}
        getItemDetails={getItemDetails}
      />
    )

    expect(wrapper.equals(null)).toEqual(true)
  })

  it('should call getItemDetails for a certain item on component mount', () => {
    expect(getItemDetails).toHaveBeenCalledTimes(1)
    expect(getItemDetails).toBeCalledWith('312')
  })
})
