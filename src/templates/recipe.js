import React from 'react'
import Ingredients from '../components/ingredients'
import Images from '../components/images'
import Steps from '../components/steps'
import Footnotes from '../components/footnotes'
import PropTypes from 'prop-types'
import RecipeHeader from '../components/recipe-header';
import Description from '../components/description';

const Recipe = ({ data }) => {
  if (!data.allPrismicRecipe) {
    return null
  }
  const node = data.allPrismicRecipe.edges[0].node
  const recipe = node.data
  return (
    <div>
      <h1>{recipe.title.text}</h1>
      <RecipeHeader date={node.last_publication_date} />
      <Description description={recipe.description.html} />
      <Images images={recipe.images} />
      <Ingredients ingredients={recipe.ingredients} />
      <Steps steps={recipe.steps} />
      <Footnotes footnotes={recipe.footnotes.html} />
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
            footnotes {
              html
            }
          }
        }
      }
    }
  }
`
