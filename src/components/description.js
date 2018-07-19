import React from 'react'
import PropTypes from 'prop-types'

const Description = ({ description }) => {
  return (
    <section>
      <h1>Description</h1>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </section>
  )
}

Description.propTypes = {
  description: PropTypes.string
}

export default Description
