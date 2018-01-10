// filters reducer 

const filtersReducerDefaultValue = {
    text: '',
    sortBy: '',
    startDate: undefined,
    endDate: undefined
};
export default (state = filtersReducerDefaultValue, action) => {
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