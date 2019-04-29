import React from 'react'
import { graphql } from 'gatsby'
import Ingredients from '../components/ingredients'
import Steps from '../components/steps'
import Footnotes from '../components/footnotes'
import PropTypes from 'prop-types'
import RecipeHeader from '../components/recipe-header'
import Description from '../components/description'
import ImageHeader from '../components/image-header'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto 128px;

  @media (max-width: 832px) {
    padding: 0 16px;
  }
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
    <div>
      <RecipeHeader title={title} date={date} />
      <ImageHeader url={images[0].image.url} />
      <Container>
        {(description && description.length > 0) && <Description description={description} />}
        {(ingredients && ingredients.length > 0) && <Ingredients ingredients={ingredients} />}
        {(steps && steps.length > 0) && <Steps steps={steps} />}
        {(footnotes && footnotes.length > 0) && <Footnotes footnotes={footnotes} />}
      </Container>
    </div>
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
