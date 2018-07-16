import React from 'react';
import Link from 'gatsby-link';
import { updateLocale } from '../../node_modules/moment';

const categories = [
  'one',
  'two',
  'three',
];

const styles = {
  container: {
    margin: '70px 0'
  },
  gt: {
    backgroundColor: 'mistyrose',
    padding: '6px 16px 6px 4px',
    fontSize: '0.5em',
    fontWeight: 'bolder',
    position: 'absolute',
    top: '7px',
    left: '10px',
    clipPath: 'polygon(100% 50%, 100% 50%, 0 100%, 0 0)'
  },
  sectionHeader: {
    margin: '50px auto',
    display: 'table'
  }
};

const renderCategories = () => {
  return categories.map((category, idx) => {
    return (
      <li style={styles.li} key={idx}>
        <Link to='page-2'>
          <div>
            <span>{category}</span>
            <span>{category.recipeCount}</span>
          </div>
        </Link>
      </li>
    );
  });
}

const IndexPage = () => (
  <ul>
    {renderCategories()}
  </ul>
);

export default IndexPage;
