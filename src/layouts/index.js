import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import styled from 'styled-components'
import './index.css'

const Children = styled.div`
  margin: 64px auto;
  max-width: 700px;

  @media (max-width: 832px) {
    padding: 0 16px;
  }
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Munchtime!' },
        { name: 'keywords', content: 'cooking, cookbook, recipes, food' }
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} shortTitle={data.site.siteMetadata.shortTitle} />
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
