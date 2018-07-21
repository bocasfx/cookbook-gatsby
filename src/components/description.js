import React from 'react'
import PropTypes from 'prop-types'

const Description = ({ description }) => {
  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </section>
  )
}

Description.propTypes = {
  description: PropTypes.string
}

export default Description
