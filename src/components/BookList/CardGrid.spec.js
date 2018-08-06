import React from 'react'
import { shallow } from 'enzyme'

import CardGrid from './CardGrid'
import Card from './Card'
import './CardGrid.css'

describe('(Component) CardGrid', () => {
  const books = [
    {id: 1, title: 'Nine Princes in Amber', author: 'Roger Zelazny'},
    {id: 2, title: 'The Guns of Avalon', author: 'Roger Zelazny'},
    {id: 3, title: 'Sign of the Unicorn', author: 'Roger Zelazny'},
    {id: 4, title: 'The Hand of Oberon', author: 'Roger Zelazny'},
    {id: 5, title: 'The Courts of Chaos', author: 'Roger Zelazny'}
  ]

  it('should render the component', () => {
    const wrapper = shallow(<CardGrid books={books} />)

    expect(wrapper.equals(
      <div className='container-fluid text-center card-grid'>
        <Card book={{id: 1, title: 'Nine Princes in Amber', author: 'Roger Zelazny'}} />
        <Card book={{id: 2, title: 'The Guns of Avalon', author: 'Roger Zelazny'}} />
        <Card book={{id: 3, title: 'Sign of the Unicorn', author: 'Roger Zelazny'}} />
        <Card book={{id: 4, title: 'The Hand of Oberon', author: 'Roger Zelazny'}} />
        <Card book={{id: 5, title: 'The Courts of Chaos', author: 'Roger Zelazny'}} />
      </div>
    )).toEqual(true)
  })
})
