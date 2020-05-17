
const getExpensesTotal = ( expenses ) => {
    if (expenses.length === 0) {
        return 0;
    }
    return expenses
        .map(expense => expense.amount)
        .reduce((acc, value) => acc + value, 0);
};

export default getExpensesTotal;

