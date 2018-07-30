import React, { Fragment } from 'react'
import Ingredients from '../components/ingredients'
import Images from '../components/images'
import Steps from '../components/steps'
import Footnotes from '../components/footnotes'
import PropTypes from 'prop-types'
import RecipeHeader from '../components/recipe-header'
import Description from '../components/description'
import styled from 'styled-components'

const IngredientsContainer = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 2%;
`

const Recipe = ({ data }) => {
  if (!data.allPrismicRecipe) {
    return null
  }

  const node = data.allPrismicRecipe.edges[0].node
  const recipe = node.data
  const title = recipe.title.text
  const date = node.last_publication_date
  const description = recipe.description.html
  const images = recipe.images
  const ingredients = recipe.ingredients
  const steps = recipe.steps
  const footnotes = recipe.footnotes.html

  return (
    <Fragment>
      <RecipeHeader title={title} date={date} />
      {(description && description.length > 0) && <Description description={description} />}
      <IngredientsContainer>
        {(ingredients && ingredients.length > 0) && <Ingredients ingredients={ingredients} />}
        {(images && images.length > 0) && <Images images={images} />}
      </IngredientsContainer>
      {(steps && steps.length > 0) && <Steps steps={steps} />}
      {(footnotes && footnotes.length > 0) && <Footnotes footnotes={footnotes} />}
    </Fragment>
  )
}

Recipe.propTypes = {
  data: PropTypes.object.isRequired
}

export default Recipe

export const query = graphql`
  query RecipeQuery($slug: String!) {
    allPrismicRecipe(filter: {uid: {eq: $slug}}) {
      edges {
        node {
          last_publication_date
          data {
            title {
              text
            }
            ingredients {
              amount
              measure
              ingredient
            }
            images {
              image {
                url
              }
            }
            description {
              html
            }
            steps {
              step {
                html
              }
            }
            footnotes {
              html
            }
          }
        }
      }
    }
  }
`
