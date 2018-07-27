import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import styled from 'styled-components'
import './index.css'

const Children = styled.div`
  margin: 64px auto;
  max-width: 800px;

  @media (max-width: 1024px) {
    margin: 64px 32px;
  }
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Cookbook' },
        { name: 'keywords', content: 'cooking, cookbook, recipes, food' }
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Children>{children()}</Children>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
