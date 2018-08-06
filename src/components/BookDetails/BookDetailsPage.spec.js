import React from 'react'
import { shallow } from 'enzyme'

import Badge from './Badge'
import WidgetRow from './WidgetRow'
import ProgressBar from './ProgressBar'
import BookDetailsPage from './BookDetailsPage'
import './BookDetailsPage.css'

describe('(Component) BookDetailsPage', () => {
  it('should render the component', () => {
    const details = {
      id: 312,
      score: 9,
      year: 2002,
      votes: 4020,
      popularity: 150,
      title: 'Nine Princes',
      author: 'Roger Zelazny'
    }

    const wrapper = shallow(
      <BookDetailsPage item={details} />
    )

    expect(wrapper.equals(
      <div
        className='container-fluid text-center details-container'
        style={{
          backgroundImage: 'url("https://picsum.photos/2048/1024?image=322")',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='row details-row'>
          <div className='col-md-offset-2 col-md-4 details'>
            <img className='details-img' src={'https://picsum.photos/600/720?image=322'} alt={'Nine Princes Cover'} />
            <div className='details-info'>
              <div className='details-info-table'>
                <p className='details-info-cell'>Nine</p>
              </div>
              <div className='details-info-table'>
                <p className='details-info-cell bottom-cell'>Princes</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <WidgetRow label='title'>
              <h2>Nine Princes</h2>
            </WidgetRow>
            <WidgetRow label='author'>
              <h2>Roger Zelazny</h2>
            </WidgetRow>
            <WidgetRow label='published'>
              <h3>{2002}</h3>
            </WidgetRow>
            <WidgetRow label='score'>
              <div>
                <h1 className='inner-label'>
                  <span className='avg-score'>{9}</span>
                  <span className='max-score'> / 10 </span>
                  <Badge className='badge progress-bar-warning'>{4020} votes</Badge>
                </h1>
                <ProgressBar
                  now={9}
                  min={0}
                  max={10}
                  bsStyle='warning'
                  label={'Score: 9'}
                />
              </div>
            </WidgetRow>
            <WidgetRow label='popularity'>
              <div>
                <h2 className='inner-label'>{150}</h2>
                <ProgressBar
                  now={150}
                  min={0}
                  max={200}
                  bsStyle='success'
                  label={'Popularity: 150'}
                />
              </div>
            </WidgetRow>
          </div>
        </div>
      </div>
    )).toEqual(true)
  })
})
