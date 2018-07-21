import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'

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
    <div
      style={{
        padding: '0 1rem',
        maxWidth: 960,
        paddingBottom: ' 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
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
