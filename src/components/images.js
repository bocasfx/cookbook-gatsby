import React from 'react'
import PropTypes from 'prop-types'

const Images = ({ images }) => {
  return (
    <div>
      {images.map((image, idx) => {
        return <img src={image.image.url} key={idx} width='300' />
      })}
    </div>
  )
}

Images.propTypes = {
  images: PropTypes.array.isRequired
}

export default Images
