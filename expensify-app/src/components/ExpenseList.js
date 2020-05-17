import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getSelectExpenses from '../selectors/expenses';


const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
       {/*  {props.expenses.map(expense => <ExpenseListItem expense={expense}/>)} */}
        {props.expenses.map(expense => <ExpenseListItem key={expense.id} {...expense}/>)}
    </div>
);

// here we defined mapStateProps because we want to access to current app's state
const mapStateToProps = (state) => {
    /* return {
        expenses: state.expenses,
        filters: state.filters
    }; */
    return {
        expenses: getSelectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
