import React from 'react';

export default ({ data }) => {
  const recipe = data.allWordpressPost.edges[0].node;
  return (
    <div>
      <h1>{recipe.title}</h1>
      <div className="recipe" dangerouslySetInnerHTML={{ __html: recipe.content }} />
    </div>
  );
};

export const query = graphql`
  query RecipeQuery($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`;
