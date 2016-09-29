import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ExpenseTable from './ExpenseTable';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

class CategoryPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      category: Object.assign({}, props.category)
    };

    this.addExpense = this.addExpense.bind(this);
  }

  addExpense() {
    console.log('inside addExpense');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.category.id != nextProps.category.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({category: Object.assign({}, nextProps.category)});
    }
  }

  render() {
    const expenses = this.state.category.expenses;
    const budget = this.state.category.budget;

    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>{this.state.category.name}</h1>
            <p>Monthly Budget: ${budget}</p>
            <p>Remaining in Budget: ${budget - expenses.map(expense => expense.amount).reduce(function(a, b){return a+b;})}</p>
            <Button bsSize="large" onClick={this.addExpense}>Add Expense »</Button>
          </Grid>
        </Jumbotron>
        <ExpenseTable
          expenses = {expenses}
          budget = {budget}
          />
      </div>
    );
  }
}

CategoryPage.propTypes = {
  category: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
CategoryPage.contextTypes = {
  router: PropTypes.object
};

function getCategoryById(categories, id) {
  const category = categories.filter(category => category.id == id);
  if (category) return category[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const categoryID = ownProps.params.id; // from the path `/course/:id`

  let category = {id: '', backgroundColor: '', name: ''};

  if (categoryID && state.categories.length > 0) {
    category = getCategoryById(state.categories, categoryID);
  }

  return {
    category: category
  };
}


export default connect(mapStateToProps)(CategoryPage);
