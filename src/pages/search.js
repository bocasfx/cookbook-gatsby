import React from 'react'
import PropTypes from 'prop-types'
import qs from 'query-string'

const Search = ({ data, location }) => {
  return <div>Searching for: {qs.parse(location.search).term}</div>
}

Search.propTypes = {
  location: PropTypes.object
}

export default Search

export const query = graphql`
  query SearchQuery {
    allPrismicRecipe(
      filter: {
        data: {
          category: { document: { data: { category: { eq: "appetizers" } } } }
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
