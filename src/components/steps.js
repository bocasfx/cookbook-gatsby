import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Step = styled.div`
  padding: 0 0 16px 16px;
`

const Steps = ({ steps }) => {
  return (
    <section>
      <h1>Steps</h1>
      <ol>
        {steps.map((step, idx) => {
          return (
            <li>
              <Step dangerouslySetInnerHTML={{ __html: step.step.html }} key={idx}/>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

Steps.propTypes = {
  steps: PropTypes.array.isRequired
}

export default Steps
