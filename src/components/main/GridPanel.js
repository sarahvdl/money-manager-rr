import React, {PropTypes} from 'react';
import Col from 'react-bootstrap/lib/Col';
import { Link } from 'react-router';

const GridPanel = ({backgroundColor, textColor, name, id, remove}) => (
  <Link to={'/category/' + id}>
    <Col className="gridPanel"
      xs={6}
      md={4}
      style={{
        backgroundColor: backgroundColor,
        color: textColor
      }}
      onClick={() => console.log('gridPanel clicked!')}
      >
        <div className="removeCategory glyphicon glyphicon-remove pull-right"
          style={{paddingTop: 3}}
          onClick={(event) => remove(event, id)}/>
        <div className="name">{name}</div>
    </Col>
  </Link>
);

GridPanel.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired
};

export default GridPanel;
