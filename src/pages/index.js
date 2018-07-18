import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-direction: row;
`

const Item = styled.li`
  margin-right: 16px;
  width: 200px;
  height: 200px;
  padding: 32px;
  border: 1px solid #666;

  &:hover {
    background: #eee;
  }
`

const Name = styled.div`
  font-size: 1.5rem;
`

export default ({ data }) => {
  return (
    <List className="recipes">
      {data.allWordpressCategory.edges.map(({ node: category }, idx) => {
        return (
          <Link to={category.name.toLowerCase()} key={idx}>
            <Item>
              <div>
                <Name>{category.name}</Name>
              </div>
            </Item>
          </Link>
        )
      })}
    </List>
  )
}

export const query = graphql`
  query IndexQuery {
    allWordpressCategory(filter: { name: { ne: "Uncategorized" } }) {
      edges {
        node {
          name
        }
      }
    }
  }
`
