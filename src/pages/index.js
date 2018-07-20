import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CategoryCard from '../components/category-card'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr [col-start]);
  grid-auto-rows: 300px;
  grid-column-gap: 24px;
  row-gap: 24px;
  margin: 0 32px;
`

const IndexPage = ({ data }) => {
  if (!data) {
    return null
  }
  return (
    <GridContainer>
      {data.allPrismicCategory.edges.map(({ node }, idx) => {
        const category = node.data.category
        const imageUrl = node.data.image.url
        return (
          <CategoryCard
            category={category}
            url={category.toLowerCase()}
            imageUrl={imageUrl}
            key={idx}
          />
        )
      })}
    </GridContainer>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allPrismicCategory(sort: { fields: [data___category], order: ASC }) {
      edges {
        node {
          data {
            category
            image {
              url
            }
          }
        }
      }
    }
  }
`
