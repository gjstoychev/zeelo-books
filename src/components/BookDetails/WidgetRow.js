import React from 'react'
import PropTypes from 'prop-types'

import './WidgetRow.css'

const WidgetRow = ({label, children}) => (
  <div className='widget-wrapper'>
    <div className='widget-label'>{label}</div>
    {children}
  </div>
)

WidgetRow.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default WidgetRow
