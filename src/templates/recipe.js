import React from 'react'
import Ingredients from '../components/ingredients'
import Images from '../components/images'
import Steps from '../components/steps'
import PropTypes from 'prop-types'

const Recipe = ({ data }) => {
  if (!data.allPrismicRecipe) {
    return null
  }
  const node = data.allPrismicRecipe.edges[0].node
  const recipe = node.data
  return (
    <div>
      <h1>{recipe.title.text}</h1>
      <div>
        <span>Published on:</span>
        <span>{node.last_publication_date}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: recipe.description.html }} />
      <Images images={recipe.images} />
      <Ingredients ingredients={recipe.ingredients} />
      <Steps steps={recipe.steps} />
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
          }
        }
      }
    }
  }
`
