import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onCalendarFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    render () {
        return (
            <div>
                <input 
                    type="text" value={this.props.filters.text} 
                    onChange={e => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                />
                <select 
                    value={this.props.filters.sortBy}            
                    onChange={e => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate());
                        } 
                        if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount());
                        }                 
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                        startDateId="startDateId"
                        endDateId="endDateId"
                        startDate={this.props.filters.startDate} 
                        endDate={this.props.filters.endDate} 
                        onDatesChange={this.onDatesChange} 
                        focusedInput={this.state.calendarFocused}
                        showClearDates={true} 
                        onFocusChange={this.onCalendarFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
            </div>
        )
    }
}
 

// here we defined mapStateProps because we want to access to current app's state
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);