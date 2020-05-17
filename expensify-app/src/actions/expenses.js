import uuid from 'uuid';
import database from '../firebase/firebase';

// Action generators
export const addExpense = (expense ) => ({
    type: 'ADD_EXPENSE',
    expense
});

/* export const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
 */

// here we will return a function, on the contrary of other actions; 
// it will only work after setting applyMiddleware in the createStore()
export const startAddExpense = (expenseData = {}) => {
    return dispatch => {
        // destructure to set default values, in case they are note defined on the expense to add
        const {  
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;

        const expense = { description, note, amount, createdAt };

        database.ref('expenses').push(expense).then((ref)=> {
            // dispatch the corresponding action because redux only changes store based on dispatched objects
            // id: uuid() is no more needed because push will create the id
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

export const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',    
    id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});