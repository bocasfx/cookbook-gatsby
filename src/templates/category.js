import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const RecipeDate = styled.span`
  color: #ccc;
  font-size: 0.8rem;
  margin-left: 32px;
`

const Category = ({ data }) => {
  if (!data.allPrismicRecipe) {
    return <div>Nothing to see here. Move along...</div>
  }
  return (
    <div>
      {data.allPrismicRecipe.edges.map(({ node }) => {
        const category = node.data.category.document[0].data.category.toLowerCase()
        const url = `/${category}/${node.uid}/`
        return (
          <Link to={url} key={node.uid}>
            <h3>
              {node.data.title.text} <RecipeDate>({node.last_publication_date})</RecipeDate>
            </h3>
          </Link>
        )
      })}
    </div>
  )
}

Category.propTypes = {
  data: PropTypes.object
}

export default Category

export const query = graphql`
  query CategoryQuery($category: String!) {
    allPrismicRecipe(filter: {data:{category:{document: {data: {category: {eq: $category}}}}}}) {
      edges {
        node {
          uid
          last_publication_date
          data {
            title {
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
