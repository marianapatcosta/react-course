import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getSelectedExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

const ExpensesSummary = ({ expensesCount, expensesTotal }) => {

    const expenseLabel = expensesCount.length === 1 ? 'expense' : 'expenses';

    const formatedExpensesTotal = numeral(expensesTotal).format('$0,0.00');

    return (
        <div>
            <h1>Viewing {expensesCount} {expenseLabel} totalling {formatedExpensesTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const selectedExpenses = getSelectedExpenses(state.expenses, state.filters);
    const expensesCount = selectedExpenses.length;
    const expensesTotal = getExpensesTotal(selectedExpenses);

    return ({expensesCount, expensesTotal });
}

export default connect(mapStateToProps)(ExpensesSummary);