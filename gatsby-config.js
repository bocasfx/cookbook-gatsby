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
        accessToken: 'MC5XMUhQVWlVQUFDZ0FHdkxv.77-9C2Dvv71peC9sF--_ve-_vQrvv71dM--_ve-_ve-_vUJc77-9GO-_vRgM77-977-9CAlmZO-_vQ',
        linkResolver: ({ node, key, value }) => doc => {
          // Your link resolver
        },
        htmlSerializer: ({ node, key, value }) =>
          (type, element, content, children) => {
            // Your HTML serializer
          }
      }
    }
  ]
}
