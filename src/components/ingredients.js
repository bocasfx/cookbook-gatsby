import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 15% 85%;
  width: 300px;
  margin-bottom: 8px;
  line-height: 1.5rem;
`

const Ingredients = ({ ingredients }) => {
  return (
    <section>
      <h1>Ingredients</h1>
      {ingredients.map((ingredient, idx) => {
        return (
          <Wrapper key={idx}>
            <span>{ingredient.amount}</span>
            <span>{ingredient.measure}</span>
            <span>{ingredient.ingredient}</span>
          </Wrapper>
        )
      })}
    </section>
  )
}

Ingredients.propTypes = {
  ingredients: PropTypes.array.isRequired
}

export default Ingredients
