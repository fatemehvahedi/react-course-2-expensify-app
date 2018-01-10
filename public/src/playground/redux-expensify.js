import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// add expenses 
const addExpenses = (
    {
         describe = '', 
         note = '', 
         amount = 0, 
         createdAt = 0
        } = {}
    ) => ({
    type: 'ADD_EXPENSES',
    expense: {
        id: uuid(),
        describe,
        note,
        amount,
        createdAt
    }
});

// remove expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// edit expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// set text filter
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// sortBy amount
const sortByAmount = () => ({
    type: 'SORTBY_AMOUNT',
});

//sortBy Date
const sortByDate = () => ({
    type: 'SORTBY_DATE',
});

// set start date
const setStartDate = ( startDate ) => ({
    type: 'SET_START_DATE',
    startDate
});

// set end date
const setEndDate = ( endDate ) => ({
    type: 'SET_END_DATE',
    endDate
});

//
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof enddate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.describe.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch ;
    }).sort((a,b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if ( sortBy === 'amount')
            return a.amount < b.amount ? 1 : -1;
        
    });
};

// expenses Reducer 
const expensesReducerDefaultValue = [];

const expensesReducer = (state = expensesReducerDefaultValue, action) => {
    switch(action.type){
        case 'ADD_EXPENSES':
            return[
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                }else{
                    return expense
                }
            });
        default: 
            return state;
    }
};

// filters reducer 
const filtersReducerDefaultValue = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultValue, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text : action.text
            };
        case 'SORTBY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORTBY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:    
            return state;
    }
};

// store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpences = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpences);
});

const expenseOne = store.dispatch(addExpenses({ describe: 'Rent', amount: 70, createdAt : 2000}));
const expenseTwo = store.dispatch(addExpenses({ describe: 'Coffee', amount: 300, createdAt: 1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount : 500}));

//store.dispatch(setTextFilter('e'));
//store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

// store.dispatch(setStartDate(123));
// store.dispatch(setEndDate(456));

const demoState = {
    expenses : [{
        id: 'jhhk',
        describe: 'December Rent',
        note: 'this was the final rent for that address',
        amount: 53000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // amount or date
        startDate: undefined,
        endDate: undefined
    }
};

// const user = {
//     name: 'Fatima',
//     age: 32
// };

// console.log({
//     ...user,
//     location: 'Sydney'
// });