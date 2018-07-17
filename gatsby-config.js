module.exports = {
  siteMetadata: {
    title: 'Cookbook',
    categories: [
      'antojitos',
      'appetizers',
      'bread',
      'breakfast',
      'cakes',
      'dessert',
      'enchiladas',
      'fish',
      'flatbreads',
      'meat',
      'moles',
      'pasta',
      'rice',
      'poultry',
      'preserves',
      'salads',
      'salsas',
      'soups',
      'veggies',
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/pages/recipes`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
};
