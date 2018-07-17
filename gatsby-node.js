/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allWordpressCategory(filter: {name: {ne: "Uncategorized"}}) {
          edges {
            node {
              name
            }
          }
        }
        allWordpressPost {
          edges {
            node {
              slug
              categories {
                name
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allWordpressCategory.edges.forEach(({ node }) => {
        createPage({
          path: `/${node.name.toLowerCase()}/`,
          component: path.resolve(`./src/templates/category.js`),
          context: {
            category: node.name
          }
        })
      })
      result.data.allWordpressPost.edges.forEach(({ node }) => {
        const recipePath = `/${node.categories[0].name.toLowerCase()}/${node.slug}/`
        createPage({
          path: recipePath,
          component: path.resolve(`./src/templates/recipe.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
}
