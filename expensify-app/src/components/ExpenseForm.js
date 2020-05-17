import React from "react";
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends React.Component {

    // Add constructor to define and get props to set default state
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? props.expense.amount.toString( ): '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            errorState: ''
        };
    }


    // set default sate/ This is a class component because we need to manage its state
    /* state = {
        description: '',
        amount: '',
        note: '',
        createdAt: moment(),
        calendarFocused: false,
        errorState: ''
    } */

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        //  this.setState(() => ({note: e.target.value})); does not work as expected because we are referencing the event in a callback hat doe not run right away
        //use e.persist() to keep the synthetic event
       /*  e.persist();
        this.setState(() => ({note: e.target.value})); */

        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

   /*  onCalendarFocusChange = ({ calendarFocused }) => {
        this.setState(() => ({ calendarFocused: !calendarFocused }));
    }; */

    onCalendarFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    // we are not submitting here, to keep form reusable. data will be passed above and there 
    // (when this component is used) we will connect that parent component to the store and submit
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ errorState: 'Please provide description and amount!'}));
        } else {
            this.setState(() => ( { errorState: ''}));
            // thus, we are passing data to the parent, with the event handler onSubmit()
            this.props.onSubmit({
                description: this.state.description,
                amount: +this.state.amount,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
        }       
    }

    render() {
        return (
            <div>
                {this.state.errorState && <p>Please provide description and amount!</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                    type="text"
                    placeholder='Description'
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    />
                    <input
                    type="text"
                    placeholder='Amount'
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt} 
                        onDateChange={this.onDateChange} 
                        focused={this.state.calendarFocused} 
                        onFocusChange={this.onCalendarFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                    placeholder="Add a note for your expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    >                
                    </textarea>
                    <button>
                    {this.props.buttonLabel}
                    </button>
                </form>
            </div>
        );
    }
}
