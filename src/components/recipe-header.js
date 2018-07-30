import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = styled.section`
  color: #ccc;
  text-align: center;
`

const Title = styled.h1`
  margin-bottom: 0;
  font-size: 3rem;
`

const DateContainer = styled.div`
  font-size: 0.7rem;
  margin-bottom: 64px;
`

const RecipeHeader = ({ title, date }) => {
  const formattedDate = new Date(date)
  const dateLabel = `${formattedDate.getDate()}-${formattedDate.getMonth()}-${formattedDate.getFullYear()}`
  return (
    <Header>
      <Title>{title}</Title>
      <DateContainer>Published on: {dateLabel}</DateContainer>
    </Header>
  )
}

RecipeHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default RecipeHeader
