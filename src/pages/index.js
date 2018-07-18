import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Name = styled.div`
  font-size: 1.5rem;
`;

export default ({ data }) => {
  return (
    <ul>
      {data.allWordpressCategory.edges.map(({ node: category }, idx) => {
        return (
          <li key={idx}>
            <Link to={category.name.toLowerCase()}>
              <div>
                <Name>{category.name}</Name>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export const query = graphql`
  query IndexQuery {
    allWordpressCategory(filter: { name: { ne: "Uncategorized" } }) {
      edges {
        node {
          name
        }
      }
    }
  }
`;
