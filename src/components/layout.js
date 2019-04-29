import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import './layout.css'

const Children = styled.div`
  margin: 64px auto;
  max-width: 700px;

  @media (max-width: 832px) {
    padding: 0 16px;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.title },
            { name: 'keywords', content: 'cooking, cookbook, recipes, food' }
          ]}
        />
        <Header />
        <Children>{children}</Children>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout
