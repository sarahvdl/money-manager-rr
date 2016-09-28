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

import CategoryGrid from './CategoryGrid';

class MainPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showModal: false
    };

    this.addCategory = this.addCategory.bind(this);
  }

  addCategory(event) {
    event.preventDefault();

    const toAdd = {
      name: "Added category",
      backgroundColor: "black",
      textColor: "white"
    };

    this.props.actions.addCategory(toAdd);
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
          removeCategory = {this.props.actions.removeCategory}
        />
        <br/><br/><br/><br/><br/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.grid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gridActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
