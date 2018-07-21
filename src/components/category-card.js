import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

const setBackground = props => (props.url ? `url(${props.url});` : 'white')

const Card = styled.div`
  border: 1px solid #ccc;
  display: grid;
  grid-template-rows: 80% 20%;
  height: 100%;
`

const Image = styled.div`
  background: ${setBackground};
  background-size: cover;
  background-position: 50%;
`

const Footer = styled.div`
  padding: 16px;
  border-top: 1px solid #ccc;
  text-align: right;
`

const CategoryCard = ({ category, url, imageUrl }) => {
  return (
    <Link to={url}>
      <Card>
        <Image url={imageUrl} />
        <Footer>{category}</Footer>
      </Card>
    </Link>
  )
}

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default CategoryCard
