import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectorExpenses from '../playground/selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {   props.expenses.map((expense) => (
            <ExpenseListItem key={expense.id} {...expense}/>
            ))
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectorExpenses(state.expenses, state.filters)
    }
};

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses,
//         filters: state.filters
//     };
// })(ExpenseList);

export default connect(mapStateToProps)(ExpenseList);

//export default ConnectedExpenseList;