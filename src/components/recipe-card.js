import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Date = styled.span`
  color: #ccc;
  font-size: 0.8rem;
`

const Title = styled.h3`
  color: crimson;
  margin-bottom: 0;
`

const Card = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-column-gap: 24px;
`

const Image = styled.img`
`

const Info = styled.div`
`

const Description = styled.div`
  color: #666;
  margin-top: 16px;
`

const RecipeCard = ({ title, date, url, imageUrl, description }) => {
  return (
    <Link to={url}>
      <Card>
        <Image src={imageUrl} />
        <Info>
          <Title>{title}</Title>
          <Date>({date})</Date>
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
