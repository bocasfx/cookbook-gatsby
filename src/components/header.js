import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SearchButton from './search-button'

const Wrapper = styled.div`
  background: crimson;
  margin-bottom: 1.45rem;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width: 1024px) {
    margin: 0 32px;
  }
`

const H1 = styled.h1`
  margin-bottom: 0;
  font-weight: normal;
  a {
    color: white;
    text-decoration: none;
    font-family: 'Permanent Marker', cursive;
    font-size: 1em;
    letter-spacing: 0.07em;

    &:hover {
      color: white;
    }
  }
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Inner>
      <H1>
        <Link to='/'>{siteTitle}!</Link>
      </H1>
      <SearchButton />
    </Inner>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

export default Header
