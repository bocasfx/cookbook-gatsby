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
        accessToken: 'MC5XMUNLckNFQUFDRUFmZk1t.ABLvv71QEO-_ve-_vS5Le--_vXpe77-977-9XzXvv71SFlMfce-_vXPvv70SH--_ve-_vWgO',
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
