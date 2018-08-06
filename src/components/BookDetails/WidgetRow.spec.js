import React from 'react'
import { shallow } from 'enzyme'

import WidgetRow from './WidgetRow'
import './WidgetRow.css'

describe('(Component) WidgetRow', () => {
  it('should render the component', () => {
    const wrapper = shallow(
      <WidgetRow label={'Widget Label'}>
        <div>something</div>
      </WidgetRow>
    )

    expect(wrapper.equals(
      <div className='widget-wrapper'>
        <div className='widget-label'>Widget Label</div>
        <div>something</div>
      </div>
    )).toEqual(true)
  })
})
