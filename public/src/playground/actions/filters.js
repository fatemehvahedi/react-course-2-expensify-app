// set text filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// sortBy amount
export const sortByAmount = () => ({
    type: 'SORTBY_AMOUNT'
});

//sortBy Date
export const sortByDate = () => ({
    type: 'SORTBY_DATE'
});

// set start date
export const setStartDate = ( startDate ) => ({
    type: 'SET_START_DATE',
    startDate
});

// set end date
export const setEndDate = ( endDate ) => ({
    type: 'SET_END_DATE',
    endDate
});
