import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import SearchButton from './search-button'

const Wrapper = styled.div`
  background: crimson;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width: 832px) {
    padding: 1rem 16px;
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

const Title = styled.span`
  &::after {
    content: "${props => props.title}";
  }

  @media (max-width: 640px) {
    &::after {
      content: "${props => props.shortTitle}";
    }
  }
`

// const renderSearchButton = location => {
//   if (typeof window !== 'undefined' && window.location.pathname !== '/search') {
//     return <SearchButton />
//   }
//   return null
// }

const Header = ({ data }) => {
  return (
    <Wrapper>
      <Inner>
        <H1>
          <Link to='/'>
            <Title title='Munchtime!' shortTitle='M!' />
          </Link>
        </H1>
        {/* {renderSearchButton()} */}
      </Inner>
    </Wrapper>
  )
}

Header.propTypes = {
  data: PropTypes.object
}

export default Header

export const query = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
