import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Grid from 'react-bootstrap/lib/Grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gridActions from '../../actions/gridActions';
import Popup from 'react-popup';
import ReactDom from 'react-dom';
import Modal from './AddCategoryModal';
import {colors} from '../../constants';

import CategoryGrid from './CategoryGrid';

class MainPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showModal: false
    };

    this.addCategory = this.addCategory.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
  }

  addCategory(event) {
    event.preventDefault();

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const toAdd = {
      name: "Added category",
      backgroundColor: randomColor,
      textColor: "white"
    };

    this.props.actions.addCategory(toAdd);
  }

  removeCategory(event, id) {
    event.preventDefault();

    this.props.actions.removeCategory(id);
  }

  render() {
    const {categories} = this.props;

    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Pick a Category</h1>
            <p>Categories can be edited, removed or added</p>
            <p><Button bsStyle="info" bsSize="large" onClick={this.addCategory}>Add Category »</Button></p>
          </Grid>
        </Jumbotron>
        <CategoryGrid
          categories = {categories}
          removeCategory = {this.removeCategory}
        />
        <br/><br/><br/><br/><br/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gridActions, dispatch)
  };
}

MainPage.propTypes = {
  categories: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
