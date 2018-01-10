import uuid from 'uuid';

// add expenses 
export const addExpenses = (
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
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// edit expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});