import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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

const IndexPage = ({ data }) => {
  if (!data) {
    return null
  }
  return (
    <List className='recipes'>
      {data.allPrismicCategory.edges.map(({ node: { data: { category } } }, idx) => {
        return (
          <Link to={category.toLowerCase()} key={idx}>
            <Item>
              <div>
                <Name>{category}</Name>
              </div>
            </Item>
          </Link>
        )
      })}
    </List>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allPrismicCategory(sort: {fields: [data___category], order: ASC}) {
      edges {
        node {
          data {
            category
          }
        }
      }
    }
  }
`
