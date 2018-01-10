import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../playground/actions/expenses';

const ExpenseListItem = ({ dispatch, id, describe, amount, createdAt }) => (
    <div>
        <h3>Description: { describe } </h3>
        <p>Amount: { amount }</p>
        <p>Created at: { createdAt }</p>
        <button onClick= {(e) => {
           dispatch(removeExpense({id}));
        }}>Remove</button>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect (mapStateToProps)(ExpenseListItem);