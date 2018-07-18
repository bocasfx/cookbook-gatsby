import React from 'react';
import Link from 'gatsby-link';

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.allWordpressPost.edges.map(({ node }) => {
        const url = `/${node.categories[0].name.toLowerCase()}/${node.slug}/`;
        return (
          <Link to={url} key={node.id}>
            <h3>
              {node.title} <span>— {node.date}</span>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </Link>
        );
      })}
    </div>
  );
};

export const query = graphql`
  query CategoryQuery($category: String!) {
    allWordpressPost(filter: { categories: { name: { eq: $category } } }) {
      edges {
        node {
          id
          title
          excerpt
          date
          slug
          categories {
            name
          }
        }
      }
    }
  }
`;
