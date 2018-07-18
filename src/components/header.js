import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: mistyrose;
  margin-bottom: 1.45rem;
`;

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.0875rem;
`;

const H1 = styled.h1`
  margin: 0;
`;

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Inner>
      <H1>
        <Link
          to="/"
          style={{
            color: 'dimgray',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </H1>
    </Inner>
  </Wrapper>
);

export default Header;
