import expensesReducer from '../../playground/reducers/expenses';
import expenses from '../fixtures/expenses';

test('set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('Remove expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('not Remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Add new expense', () => {
    const expense = {
                id: '4',
                describe: 'Car insurance',
                amount: 23300,
                note: '',
                createdAt: 0
    };
    const action = {
            type: 'ADD_EXPENSES',
            expense
    };
    const state = expensesReducer(expenses,action);

    expect(state).toEqual([...expenses, expense]);
});

test('Edit an expense', () => {
    const amount = 3000;
    const action = {
        type:'EDIT_EXPENSE',
        id: expenses[1].id,
        updates : {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('not Edit an expense if id not found', () => {
    const amount = 3000;
    const action = {
        type:'EDIT_EXPENSE',
        id: -1,
        updates : {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});