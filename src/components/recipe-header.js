import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = styled.section`
  color: #ccc;
`

const Title = styled.h1`
  margin-bottom: 4px;
`

const Date = styled.div`
  font-size: 0.7rem;
`

const RecipeHeader = ({ title, date }) => {
  return (
    <Header>
      <Title>{title}</Title>
      <Date>Published on: {date}</Date>
    </Header>
  )
}

RecipeHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default RecipeHeader
