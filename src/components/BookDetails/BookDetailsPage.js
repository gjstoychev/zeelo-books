import React from 'react'
import PropTypes from 'prop-types'

import Badge from './Badge'
import WidgetRow from './WidgetRow'
import ProgressBar from './ProgressBar'

import './BookDetailsPage.css'

const BookDetailsPage = ({item}) => (
  <div
    className='container-fluid text-center details-container'
    style={{
      backgroundImage: `url("https://picsum.photos/2048/1024?image=${item.id + 10}")`,
      backgroundRepeat: 'no-repeat'
    }}
  >
    <div className='row details-row'>
      <div className='col-md-offset-2 col-md-4 details'>
        <img className='details-img' src={`https://picsum.photos/600/720?image=${item.id + 10}`} alt={`${item.title} Cover`} />
        <div className='details-info'>
          <div className='details-info-table'>
            <p className='details-info-cell'>{item.title.split(' ')[0]}</p>
          </div>
          <div className='details-info-table'>
            <p className='details-info-cell bottom-cell'>{item.title.split(' ')[1]}</p>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <WidgetRow label='title'>
          <h2>{item.title}</h2>
        </WidgetRow>
        <WidgetRow label='author'>
          <h2>{item.author}</h2>
        </WidgetRow>
        <WidgetRow label='published'>
          <h3>{item.year}</h3>
        </WidgetRow>
        <WidgetRow label='score'>
          <div>
            <h1 className='inner-label'>
              <span className='avg-score'>{item.score}</span>
              <span className='max-score'> / 10 </span>
              <Badge className='badge progress-bar-warning'>{item.votes} votes</Badge>
            </h1>
            <ProgressBar
              min={0}
              max={10}
              bsStyle='warning'
              now={item.score}
              label={`Score: ${item.score}`}
            />
          </div>
        </WidgetRow>
        <WidgetRow label='popularity'>
          <div>
            <h2 className='inner-label'>{item.popularity}</h2>
            <ProgressBar
              min={0}
              max={200}
              bsStyle='success'
              now={item.popularity}
              label={`Popularity: ${item.popularity}`}
            />
          </div>
        </WidgetRow>
      </div>
    </div>
  </div>
)

BookDetailsPage.propTypes = {
  item: PropTypes.object.isRequired
}

export default BookDetailsPage
