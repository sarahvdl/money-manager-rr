import React, {PropTypes} from 'react';
import Table from 'react-bootstrap/lib/Table';

const ExpendituresTable = ({expenses, budget}) => (
  <div>
    <Table striped bordered condensed responsive>
      <thead>
      <tr>
        <th>#</th>
        <th>Description</th>
        <th>Date</th>
        <th>Amount ($)</th>
      </tr>
      </thead>
      <tbody>
      {expenses.map((expense, i) =>
        <tr>
          <td>{i + 1}</td>
          <td>{expense.description}</td>
          <td>todo</td>
          <td>{expense.amount}</td>
        </tr>
      )}
      <tr>
        <td></td>
        <td></td>
        <td>TOTAL:</td>
        <td>{expenses.map(expense => expense.amount).reduce(function(a, b){return a+b;})}</td>
      </tr>
      </tbody>
    </Table>
  </div>
);

ExpendituresTable.propTypes = {
  expenses: PropTypes.array.isRequired,
  budget: PropTypes.number.isRequired
};

export default ExpendituresTable;
