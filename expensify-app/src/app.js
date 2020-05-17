import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { sortByAmount, sortByDate, setEndDate, setStartDate, setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

const expenseA = store.dispatch(addExpense({description: 'Water bill', amount: 200, }));
const expenseB = store.dispatch(addExpense({description: 'Gas bill', createdAt: 2000  }));
const expenseC = store.dispatch(addExpense({description: 'Rent ', amount: 14500 }));
/* 
store.subscribe(() => { */
    // getState() returns an object with the current app's state
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);

    
/* }); */
/* store.dispatch(setTextFilter('water'));

setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000); */

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
); 

ReactDOM.render(jsx, document.getElementById("app"));
