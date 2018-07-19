import React from 'react'
import PropTypes from 'prop-types'

const RecipeHeader = ({ date }) => {
  return (
    <div>
      <span>Published on:</span>
      <span>{date}</span>
    </div>
  )
}

RecipeHeader.propTypes = {
  date: PropTypes.string.isRequired
}

export default RecipeHeader
