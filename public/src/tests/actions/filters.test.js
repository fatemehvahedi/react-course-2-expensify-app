import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../playground/actions/filters';

test('set text filter', () => {
    const text = 'bill';
    const action = setTextFilter(text);
    
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('set text filter 2', () => {
    const action= setTextFilter();

    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    });
});

test('set Start date', () => {
     const action = setStartDate(moment(0));

     expect(action).toEqual({
         type: 'SET_START_DATE',
         startDate: moment(0)
     })
});

test('set end date', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Sort by amount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORTBY_AMOUNT'});
});

test('Sort By Date', () => {
    expect(sortByDate()).toEqual({ type: 'SORTBY_DATE'});
});
