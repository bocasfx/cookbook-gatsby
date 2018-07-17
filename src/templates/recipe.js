import React from "react";

export default ({ data }) => {
  const recipe = data.markdownRemark;
  return (
    <div>
      <h1>{recipe.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: recipe.html }} />
    </div>
  );
};

export const query = graphql`
  query RecipeQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;