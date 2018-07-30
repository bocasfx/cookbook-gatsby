import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Image = styled.div`
  background: url(${props => props.url});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
  filter: contrast(${props => props.contrast}) grayscale(${props => props.grayscale});
  transition: all 0.5s;
`

class Images extends React.Component {
  static propTypes = {
    url: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.props = props
    this.state = {
      contrast: 10,
      grayscale: 1
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        contrast: 1,
        grayscale: 0
      })
    }, 100)
  }

  render () {
    return <Image url={this.props.url} contrast={this.state.contrast} grayscale={this.state.grayscale} />
  }
}

export default Images
