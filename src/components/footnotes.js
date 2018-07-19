import React from 'react'
import PropTypes from 'prop-types'

const Footnotes = ({ footnotes }) => {
  return (
    <div>
      <h1>Footnotes</h1>
      <div dangerouslySetInnerHTML={{ __html: footnotes }} />
    </div>
  )
}

Footnotes.propTypes = {
  footnotes: PropTypes.string
}

export default Footnotes
