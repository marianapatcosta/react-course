import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummaryComponent from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummaryComponent/>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);

export default ExpenseDashboardPage;