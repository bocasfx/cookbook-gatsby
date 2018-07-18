import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const RecipeDate = styled.span`
  color: #ccc;
  font-size: 0.8rem;
  margin-left: 32px;
`

export default ({ data }) => {
  return (
    <div>
      {data.allWordpressPost.edges.map(({ node }) => {
        const url = `/${node.categories[0].name.toLowerCase()}/${node.slug}/`
        return (
          <Link to={url} key={node.id}>
            <h3>
              {node.title} <RecipeDate>({node.date})</RecipeDate>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </Link>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query CategoryQuery($category: String!) {
    allWordpressPost(filter: { categories: { name: { eq: $category } } }) {
      edges {
        node {
          id
          title
          excerpt
          date
          slug
          categories {
            name
          }
        }
      }
    }
  }
`
