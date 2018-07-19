import React from 'react'
import PropTypes from 'prop-types'

const Steps = ({ steps }) => {
  return (
    <section>
      <h1>Steps</h1>
      {steps.map((step, idx) => {
        return <div dangerouslySetInnerHTML={{ __html: step.step.html }} key={idx}/>
      })}
    </section>
  )
}

Steps.propTypes = {
  steps: PropTypes.array.isRequired
}

export default Steps
