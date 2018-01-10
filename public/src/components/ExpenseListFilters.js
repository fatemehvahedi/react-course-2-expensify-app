import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../playground/actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input 
            type="Text" 
            value={props.filters.text} 
            onChange = {(e) => {
            props.dispatch(setTextFilter(e.target.value));
            }} 
        />
        <select 
            value={props.filters.sortBy} 
            onChange= {(e) => {
               if (e.target.value === 'date'){
                   console.log(e.target.value);
                    props.dispatch(sortByDate());
               } else if (e.target.value === 'amount'){
                    props.dispatch(sortByAmount());
               }
           }}
        >
            <option value="amount">Amount</option>
            <option value="date">Date</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters : state.filters
    };
};

export default connect (mapStateToProps)(ExpenseListFilters);