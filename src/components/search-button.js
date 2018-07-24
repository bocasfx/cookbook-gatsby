import React from 'react'
import styled from 'styled-components'
import { push } from 'gatsby-link'

const SearchBox = styled.div`
  position: relative;
  display
`

const SearchInput = styled.input`
  border: none;
  background: none;
  width: 25px;
  height: 25px;
  transition: all 0.25s ease-in 0.25s;
  color: transparent;
  font-size: 0.75rem;
  line-height: 25px;
  position: absolute;
  top: 5px;
  right: 0;
  z-index: 1;

  &:hover {
    cursor: pointer;
    &:focus {
      cursor: text;
    }
  }
  &:focus {
    width: 200px;
    padding: 0 10px;
    outline: none;
    color: black;
    background: none;
    color: white;

    + span {
      width: 200px;
      height: 26px;
      border-radius: 2px;
      padding: 4px 10px;
    }

    ~ span.handle {
      opacity: 0;
    }
  }
`

const Icon = styled.span`
  z-index: 0;
  position: absolute;
  border: 2px solid white;
  top: 5px;
  right: 0;
  width: 18px;
  height: 18px;
  transition: all 0.25s ease-in 0.25s;
  border-radius: 18px;
`

const Handle = styled.span`
  position: absolute;
  border: 2px solid white;
  border-radius: 5px;
  top: 22px;
  right: -6px;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(45deg);
  width: 10px;
  transition: all 0.25s ease-in 0.25s;
`

const searchTerm = (event) => {
  if (event.keyCode === 13) {
    const searchUrl = `/search?term=${event.target.value}`
    push(searchUrl)
  }
}

const SearchButton = () => {
  return (
    <SearchBox>
      <SearchInput onKeyDown={searchTerm} />
      <Icon />
      <Handle className='handle' />
    </SearchBox>
  )
}

export default SearchButton
