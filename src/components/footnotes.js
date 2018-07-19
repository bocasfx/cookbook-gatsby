import React from 'react'
import PropTypes from 'prop-types'

const Footnotes = ({ footnotes }) => {
  return (
    <section>
      <h1>Footnotes</h1>
      <div dangerouslySetInnerHTML={{ __html: footnotes }} />
    </section>
  )
}

Footnotes.propTypes = {
  footnotes: PropTypes.string
}

export default Footnotes
