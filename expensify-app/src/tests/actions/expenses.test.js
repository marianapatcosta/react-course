import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: "1233"});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 1233
    })
});

test('should setup edit expense action object', () => {
    const action = editExpense( "1233", {amount: 40});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 1233,
        updates: {amount: 40}
    })
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'rent',
        amount: 5,
        createAT: 1000,
        note: 'This is a rent.'
    };
    const action = addExpense(expenseData );
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        id: expect.any(String),
        expense: {
            ...expenseData
        }
    })
});

test('should setup add expense action object with default values', () => {
    const expenseData = {
        description: '',
        amount: 0,
        createAT: 0,
        note: ''
    };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        id: expect.any(String),
        expense: {
            ...expenseData
        }
    })
});