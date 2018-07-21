import React from 'react'
import PropTypes from 'prop-types'

const Images = ({ images }) => {
  return (
    <section>
      {images.map((image, idx) => {
        return <img src={image.image.url} key={idx} width='500' />
      })}
    </section>
  )
}

Images.propTypes = {
  images: PropTypes.array.isRequired
}

export default Images
