import React from 'react';
import Link from 'gatsby-link';

export default ({ data }) => {
  return (
    <ul>
      {
        data.site.siteMetadata.categories.map((category, idx) => {
          return (
            <li key={idx}>
              <Link to={category}>
                <div>
                  <span>{category}</span>
                  <span>{category.recipeCount}</span>
                </div>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        categories
      }
    }
  }
`
