import React, {PropTypes} from 'react';
import GridPanel from './GridPanel';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

const CategoryGrid = ({categories, removeCategory}) => (
  <Grid fluid={true}>
    <Row>
      {categories.map(category =>
        <GridPanel
          id = {category.id}
          backgroundColor = {category.backgroundColor}
          textColor = {category.textColor}
          name = {category.name}
          remove = {removeCategory}
        />
      )}
    </Row>
  </Grid>
);

CategoryGrid.propTypes = {
  categories: PropTypes.array.isRequired,
  removeCategory: PropTypes.func.isRequired
};

export default CategoryGrid;
