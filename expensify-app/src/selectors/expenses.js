import moment from 'moment';

// Get visible expenses
const getSelectedExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    
    return expenses.filter(expense => {
        const creatAtMoment = moment(expense.createdAt);
        // is there is no startDate we will not filter by this param so return true
        const startDateMatch = startDate ? startDate.isSameOrBefore(creatAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(creatAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        // sort by most recent date
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        // the most expensive first
        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

export default getSelectedExpenses;