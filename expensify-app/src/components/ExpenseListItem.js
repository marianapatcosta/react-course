import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

/* const ExpenseListItem = (props) => (
    <div>
        <h3>{props.expense.description}</h3>
        <p> {props.expense.amount}€ - {props.expense.createdAt}</p>
    </div>
); */
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p> 
            {numeral(amount).format('$0,0.00')} 
             -  
            {moment(createdAt).format('MMM Do, YYYY')}</p>
      {/*   <button 
            onClick={() => {window.location.replace(`/edit/${id}`)}}
        >Edit
        </button> */}

       { /* <Link to={`/edit/${id}`}>
            <button 
            >Edit
            </button>
        </Link> */}
        
    </div>
);


export default ExpenseListItem;