import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'

const Footer = () => {
  return (
    <footer class="footer">
      <span class="filters">
        <FilterLink filter="SHOW_ALL">All</FilterLink>
        <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
        <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
      </span>
    </footer>
  )
}

export default Footer