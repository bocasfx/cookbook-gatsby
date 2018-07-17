import React from "react";

export default ({ data }) => {
  const recipe = data.allWordpressPost.edges[0].node;
  return (
    <div>
      <h1>{recipe.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: recipe.content }} />
    </div>
  )
  // return data.allWordpressPost.edges.map(({ node }) => {
  //   return (
  //     <div>
  //       <h1>{node.title}</h1>
  //       <div dangerouslySetInnerHTML={{ __html: node.content }} />
  //     </div>
  //   )
  // })
}

export const query = graphql`
  query RecipeQuery($slug: String!) {
    allWordpressPost(filter: {slug: {eq: $slug}}) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`