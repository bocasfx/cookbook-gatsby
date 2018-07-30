import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Image = styled.div`
  background: url(${props => props.url});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 200px;
`

const Images = ({ url }) => {
  return (
    <section>
      <Image url={url} />
    </section>
  )
}

Images.propTypes = {
  url: PropTypes.string.isRequired
}

export default Images
