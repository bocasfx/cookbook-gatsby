import React from 'react';
import Link from 'gatsby-link';

const categories = [
  'breakfast',
  'salsas',
];

const renderCategories = () => {
  return categories.map((category, idx) => {
    return (
      <li key={idx}>
        <Link to={category}>
          <div>
            <span>{category}</span>
            <span>{category.recipeCount}</span>
          </div>
        </Link>
      </li>
    );
  });
};

const IndexPage = () => (
  <ul>
    {renderCategories()}
  </ul>
);

export default IndexPage;
