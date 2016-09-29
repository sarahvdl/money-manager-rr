import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class CategoryPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      category: Object.assign({}, props.category)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.category.id != nextProps.category.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({category: Object.assign({}, nextProps.category)});
    }
  }

  render() {
    return (
      <h1>Category: {this.state.category.name}</h1>
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

  let category = {id: '', backgroundColor: '', textColor: '', name: ''};

  if (categoryID && state.categories.length > 0) {
    category = getCategoryById(state.categories, categoryID);
  }

  return {
    category: category
  };
}


export default connect(mapStateToProps)(CategoryPage);
