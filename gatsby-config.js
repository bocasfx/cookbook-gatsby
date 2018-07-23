module.exports = {
  siteMetadata: {
    title: 'Munchtime'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'munchtime',
        accessToken:
          'MC5XMUhQVWlVQUFDZ0FHdkxv.77-9C2Dvv71peC9sF--_ve-_vQrvv71dM--_ve-_ve-_vUJc77-9GO-_vRgM77-977-9CAlmZO-_vQ',
        linkResolver: ({ node, key, value }) => doc => {
          // Your link resolver
        },
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children
        ) => {
          // Your HTML serializer
        }
      }
    },
    {
      resolve: `@andrew-codes/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: ['title', 'uid', 'category'],
        // How to resolve each field's value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields' values
          PrismicRecipe: {
            title: node => node.data.title.text,
            uid: node => node.uid,
            category: node => node.data.category.raw.uid
          }
        }
      }
    }
  ]
}
