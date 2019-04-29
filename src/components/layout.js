import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import styled from 'styled-components'
import './layout.css'

const Children = styled.div`
  margin: 64px auto;
  max-width: 700px;

  @media (max-width: 832px) {
    padding: 0 16px;
  }
`

const Layout = ({ children }) => (
  <div>
    <Helmet
      title='Munchtime!'
      meta={[
        { name: 'description', content: 'Munchtime!' },
        { name: 'keywords', content: 'cooking, cookbook, recipes, food' }
      ]}
    />
    <Header />
    <Children>{children}</Children>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func
  // data: PropTypes.object
}

export default Layout
