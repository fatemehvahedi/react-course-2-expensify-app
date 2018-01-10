import moment from 'moment';
import filterReducer from '../../playground/reducers/filters';
import { start } from 'repl';

test('set up default value', () => {
    const state = filterReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text :'',
        sortBy: '',
        startDate: undefined,
        endDate: undefined
    });
});

test('sortby amount', () => {
    const state = filterReducer(undefined, { type: 'SORTBY_AMOUNT'});

   expect(state.sortBy).toBe('amount');
});

test('sortBy Date', () => {

    const currentState = {
        type: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const action = { type: 'SORTBY_DATE' };
    const state = filterReducer(currentState,action);

    expect(state.sortBy).toBe('date');
});

test('set text', () => {
    const text = 'sample';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filterReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('set start date', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filterReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('set end date', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filterReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});