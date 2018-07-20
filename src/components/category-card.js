import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

const setBackground = props => (props.url ? `url(${props.url});` : 'white')

const Image = styled.div`
  border: 1px solid #ccc;
  background: ${setBackground};
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;

  &:hover {
    background-color: #f8f8f8;
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 16px;
  }
`

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  background: white;
  width: 100%;
`

const CategoryCard = ({ category, url, imageUrl }) => {
  return (
    <div>
      <Image url={imageUrl}>
        <Link to={url} />
        <Footer>
          <Link to={url}>{category}</Link>
        </Footer>
      </Image>
    </div>
  )
}

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default CategoryCard
