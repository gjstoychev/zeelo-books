import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'

import Card from './Card'
import './Card.css'

describe('(Component) Card', () => {
  it('should render the component', () => {
    const book = {
      id: 1,
      title: 'Nine Princes',
      author: 'Roger Zelazny',
      image: 'https://example-image.com/123.jpg'
    }

    const wrapper = shallow(
      <Card book={book} />
    )

    expect(wrapper.equals(
      <div className='card'>
        <img
          src={'https://example-image.com/123.jpg'}
          alt={'Missing Cover'}
          className='img-thumbnail img-responsive card-img'
        />
        <Link to={{pathname: '/1'}}>
          <div className='card-info'>
            <div className='card-info-table'>
              <p className='card-info-cell card-info-cell-title'>Nine Princes</p>
            </div>
            <div className='card-info-table'>
              <p className='card-info-cell'>Roger Zelazny</p>
            </div>
          </div>
        </Link>
      </div>
    )).toEqual(true)
  })
})
