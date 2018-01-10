import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import configureStore from './playground/store/configureStore';
import {addExpenses} from './playground/actions/expenses';
import {setTextFilter} from './playground/actions/filters';
import getVisibleExpenses from './playground/selectors/expenses';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpenses({ describe: 'Electricity bill', amount: 3900}));
store.dispatch(addExpenses({ describe: 'Tel bill', amount: 490, createdAt: 100 }));
store.dispatch(addExpenses({ describe: 'rent', amount: 790 }));

//store.dispatch(setTextFilter('bill'));

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

//console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

