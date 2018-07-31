import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Image = styled.div`
  background: url(${props => props.url});
  background-size: cover;
  background-position: center;
  box-shadow: 4px 4px 4px 0px rgba(204,204,204,1);
  width: 100%;
  height: 100%;
`

const Images = ({ images }) => {
  return (
    <section>
      {images.map((image, idx) => {
        return (
          <Image url={image.image.url} key={idx} />
        )
      })}
    </section>
  )
}

Images.propTypes = {
  images: PropTypes.array.isRequired
}

export default Images
