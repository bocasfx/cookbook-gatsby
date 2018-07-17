import React from 'react';
import Link from 'gatsby-link';

export default ({ data }) => {
  return (
    <ul>
      {
        data.allWordpressCategory.edges.map(({ node }, idx) => {

          return (
            <li key={idx}>
              <Link to={node.name.toLowerCase()}>
                <div>
                  <span>{node.name}</span>
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
    allWordpressCategory(filter: {name: {ne: "Uncategorized"}}) {
      edges {
        node {
          name
        }
      }
    }
  }
`
