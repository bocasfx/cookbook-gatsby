import React from 'react'
import PropTypes from 'prop-types'

const RecipeHeader = ({ date }) => {
  return (
    <section>
      <span>Published on:</span>
      <span>{date}</span>
    </section>
  )
}

RecipeHeader.propTypes = {
  date: PropTypes.string.isRequired
}

export default RecipeHeader
