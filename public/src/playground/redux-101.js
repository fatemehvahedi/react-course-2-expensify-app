import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type : 'DECREMENT',
    decrementBy
});

const reset = () => ({
    type: 'RESET'
});

const set = ({ count }) => ({
    type: 'SET',
    count
});

// reducer 
//1. reducers are pure functions
//2. never change state and action directly

const countReducer = (state = { count : 0 }, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {
                count : state.count + action.incrementBy
            }
        case 'DECREMENT':
                return {
                    count : state.count - action.decrementBy
                }
        case 'SET':
                return {
                    count : action.count
                }
        case 'RESET':
                return {
                    count : 0
                }
        default: 
            return state
    }
};
    

const store = createStore(countReducer);


store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy : 100 }));

store.dispatch(reset({ type : 'RESET' }));

store.dispatch(decrementCount({ decrementBy : 4 }));

store.dispatch(set({ count : 101 }));

