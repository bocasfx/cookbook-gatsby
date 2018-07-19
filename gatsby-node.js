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
        allPrismicCategory(sort: {fields: [data___category], order: ASC}) {
          edges {
            node {
              data {
                category
              }
            }
          }
        }
        allPrismicRecipe {
          edges {
            node {
              uid
              last_publication_date
              data {
                title {
                  text
                }
                category {
                  document {
                    data {
                      category
                    }
                  }
                }
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allPrismicCategory.edges.forEach(({ node }) => {
        createPage({
          path: `/${node.data.category.toLowerCase()}/`,
          component: path.resolve(`./src/templates/category.js`),
          context: {
            category: node.data.category
          }
        })
      })
      result.data.allPrismicRecipe.edges.forEach(({ node }) => {
        const category = node.data.category.document[0].data.category.toLowerCase()
        const recipePath = `/${category}/${node.uid}/`
        createPage({
          path: recipePath,
          component: path.resolve(`./src/templates/recipe.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.uid
          },
        })
      })
      resolve()
    })
  })
}
