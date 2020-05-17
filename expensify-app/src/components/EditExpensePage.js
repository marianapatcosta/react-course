import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                buttonLabel="Update Expense"
                expense={props.expense}   
                // in onSubmit the arg expense corresponds to the data passed by the ExpenseForm in on onSubmit()
                //editExpense takes expenseId as 1st agr, which we will get from the props that we take from the current state in mapStateProps() below 
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            
        <button 
            onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push('/');
            }}
        >
        Remove
        </button>
        </div>
    )
};

// we set the expense as props
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(expense => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);