import React from 'react'
import PropTypes from 'prop-types'

const Ingredients = ({ ingredients }) => {
  return (
    <section>
      <h1>Ingredients</h1>
      {ingredients.map((ingredient, idx) => {
        return (
          <div key={idx}>
            <span>{ingredient.amount}</span>
            <span>{ingredient.ingredient}</span>
          </div>
        )
      })}
    </section>
  )
}

Ingredients.propTypes = {
  ingredients: PropTypes.array.isRequired
}

export default Ingredients
