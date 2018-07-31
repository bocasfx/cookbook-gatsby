import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import RecipeCard from '../components/recipe-card'

const Category = ({ data }) => {
  if (!data.allPrismicRecipe) {
    return <div>Nothing to see here. Move along...</div>
  }
  return (
    <Fragment>
      {data.allPrismicRecipe.edges.map(({ node }, idx) => {
        const category = node.data.category.document[0].data.category.toLowerCase()
        const url = `/${category}/${node.uid}/`
        const imageUrl = node.data.images[0].image.url
        const date = node.last_publication_date
        const title = node.data.title.text
        const description = node.data.description.text ? node.data.description.text.slice(0, 300) + '...' : ''
        return (
          <RecipeCard
            url={url}
            key={idx}
            title={title}
            date={date}
            imageUrl={imageUrl}
            description={description}
          />
        )
      })}
    </Fragment>
  )
}

Category.propTypes = {
  data: PropTypes.object
}

export default Category

export const query = graphql`
  query CategoryQuery($category: String!) {
    allPrismicRecipe(
      filter: {
        data: {
          category: { document: { data: { category: { eq: $category } } } }
        }
      }
    ) {
      edges {
        node {
          uid
          last_publication_date
          data {
            title {
              text
            }
            images {
              image {
                url
              }
            }
            description {
              text
            }
            category {
              document {
                data {
                  category
                }
              }
            }
          }
        }
      }
    }
  }
`
