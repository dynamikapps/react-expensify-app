import React from "react";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/filters";
import { connect } from "react-redux";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDateChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={event => this.props.setTextFilter(event.target.value)}
          //onChange={event => props.dispatch(setTextFilter(event.target.value))}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={event => {
            if (event.target.value === "date") {
              this.props.sortByAmount();
            } else if (event.target.value === "amount") {
              this.props.sortByAmount();
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
          endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
          onDatesChange={this.onDateChange} // PropTypes.func.isRequired,
          focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          startDateId="your_unique_id"
          endDateId="your_unique_id"
          onFocusChange={focusedInput =>
            this.setState({ calendarFocused: focusedInput })
          } // PropTypes.func.isRequired,
          numberOfMonths={1}
          isOutsideRange={day => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { filters: state.filters };
};

export default connect(
  mapStateToProps,
  {
    setTextFilter: setTextFilter,
    sortByAmount: sortByAmount,
    sortByDate: sortByDate,
    setStartDate: setStartDate,
    setEndDate: setEndDate
  }
)(ExpenseListFilters);

// export default connect(mapStateToProps)(ExpenseListFilters);
