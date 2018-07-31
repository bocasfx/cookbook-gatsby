import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

const setBackground = props => (props.url ? `url(${props.url});` : 'white')

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  display: grid;
  grid-template-rows: 80% 20%;
  height: 250px;
  transition: all 0.5s;
  
  &:hover {

    & > div {
      transition: all 0.5s;
      border-radius: 4px;
      height: 248px;
    }

    & > div:last-child {
      background-color: #333;
      transition: all 0.5s;
      height: 100%;
      border-radius: 0 0 4px 4px;
      opacity: 0.8;
      color: white;
      font-size: 1.2rem;
    }
  }
`

const Image = styled.div`
  background: ${setBackground};
  background-size: cover;
  background-position: 50%;
  border-radius: 4px 4px 0 0;
  height: 199px;
  width: 100%;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = styled.div`
  padding: 16px;
  text-align: right;
  transition: all 0.5s;
  color: #666;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const CategoryCard = ({ category, url, imageUrl }) => {
  return (
    <Link to={url}>
      <Card>
        <Image url={imageUrl} />
        <Footer><span>{category}</span></Footer>
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
