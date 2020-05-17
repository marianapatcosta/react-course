import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            buttonLabel="Add Expense" 
            onSubmit={((expense) => {
                /* props.dispatch(addExpense(expense)); */
                props.dispatch(startAddExpense(expense));
                props.history.push('/')
            })}
        />
    </div>
);


//XXXXXXXXXXXX mapDispatch uses addExpenses _> replace by startAddExpense

// in this component we don't need anything from the state so we can call connect() without args 
export default connect()(AddExpensePage);