import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

const DateContainer = styled.span`
  color: #ccc;
  font-size: 0.8rem;
`

const Title = styled.h3`
  color: crimson;
  margin-bottom: 0;
`

const Card = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-column-gap: 24px;
  margin-bottom: 48px;
  transition: all 0.5s;
  border: 1px solid transparent;
  overflow: hidden;
  
  @media (max-width: 832px) {
    border: 1px solid #ddd;
    border-radius: 4px;
    grid-template-columns: 50% 50%;

    &:hover {

      & > div:first-child {
        transform: scale(1.2);
        transition: all 0.5s;
      }
    }
  }
  `

const Image = styled.div`
  background: url(${props => props.url});
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 150px;
  border-radius: 4px;
  transition: all 0.5s;
  position: relative;
  
  @media (max-width: 832px) {
    width: 100%;
    height: 150px;
    border-radius: 4px 0 0 4px;
  }
`

const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 832px) {
    align-items: center;
  }
`

const Description = styled.div`
  color: #666;
  margin-top: 16px;

  @media (max-width: 832px) {
    display: none;
  }
`

const RecipeCard = ({ title, date, url, imageUrl, description }) => {
  const formattedDate = new Date(date)
  const dateLabel = `${formattedDate.getDate()}-${formattedDate.getMonth()}-${formattedDate.getFullYear()}`

  return (
    <Link to={url}>
      <Card>
        <Image url={imageUrl} />
        <Info>
          <Title>{title}</Title>
          <DateContainer>Published on {dateLabel}</DateContainer>
          <Description dangerouslySetInnerHTML={{__html: description}} />
        </Info>
      </Card>
    </Link>
  )
}

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default RecipeCard
