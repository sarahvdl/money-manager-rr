import React, {PropTypes} from 'react';
import Col from 'react-bootstrap/lib/Col';

const GridPanel = ({backgroundColor, textColor, name, id, remove}) => (
  <Col className="gridPanel" xs={6} md={4} style={{backgroundColor: backgroundColor, color: textColor}}>
    <div className="removeCategory glyphicon glyphicon-remove pull-right"
      style={{paddingTop: 3}}
      onClick={() => remove(id)}/>
    <div className="name">{name}</div>
  </Col>
);

GridPanel.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired
};

export default GridPanel;
