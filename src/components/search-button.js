import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const SearchBtn = styled.div`
  position:relative;
  display:inline-block;
  background: none;
  border-radius: 30px;
  height: 16px;
  width: 16px;
  border: 3px solid white;
  
  &:after {
    content: "";
    height: 4px;
    width: 10px;
    background: #fff;
    position: absolute;
    top: 11px;
    left: 8px;
    transform: rotate(45deg);
  }
`

const SearchBox = styled.input`
  margin-right: 8px;
  border: none;
  border-radius: 2px;
  padding: 4px 8px;
  color: #333;
  font-size: 0.9rem;
`

const SearchButton = () => {
  return (
    <Wrapper>
      <SearchBox type='text' />
      <Link to='/'>
        <SearchBtn />
      </Link>
    </Wrapper>
  )
}

export default SearchButton
