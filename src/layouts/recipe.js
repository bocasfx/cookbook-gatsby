import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import styled from 'styled-components'
import './index.css'

const Children = styled.div`
  margin: 0 auto;
`

const Layout = ({ children, data }) => {
  return (
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
}

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
}

export default Layout

export const query = graphql`
  query RecipeTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    allPrismicRecipe {
      edges {
        node {
          data {
            images {
              image {
                url
              }
            }
          }
        }
      }
    }
  }
`
