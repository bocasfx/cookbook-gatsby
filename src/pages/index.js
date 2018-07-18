import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Item = styled.li`
  width: 200px;
  height: 200px;
  padding: 32px;
  border: 1px solid #ccc;

  &:hover {
    background: #eee;
  }
`

const Name = styled.div`
  font-size: 1rem;
`

export default ({ data }) => {
  if (!data) {
    return null
  }
  return (
    <List className='recipes'>
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
    allWordpressCategory(filter: {name: {ne: "Uncategorized"}}, sort: {fields: [name], order: ASC}) {
      edges {
        node {
          name
        }
      }
    }
  }
`
