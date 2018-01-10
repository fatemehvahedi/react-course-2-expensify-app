import { addExpenses, editExpense, removeExpense } from '../../playground/actions/expenses';

test('remove expense', () => {
    const action = removeExpense({ id: 'abc123'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    });
});

test('edit expense', () => {
    const action = editExpense ('123abc' ,{ amount: 233 });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { amount: 233}
    });
});


test('Add Expenses', () => {
    const expenseData = {
        describe: 'rent',
        amount: 12300,
        createdAt: 1000,
        note:''
    };

    const action = addExpenses(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSES',
        expense : {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Add expenses 2', () => {
    const action = addExpenses();

    expect(action).toEqual({
        type:'ADD_EXPENSES',
        expense: {
            id: expect.any(String),
            describe: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    });
});