import React from 'react';

const Option = (props) => {
    return (
        <div className="option">
            {/* <li key={this.props.text}>{this.props.text} </li> */}
            <p className="option__text">{props.count}. {props.optionText}</p>
            <button
                className="button button--link"  
                onClick={(e) => (
                    // here we do not call the method directly ({ props.handleAddOption}) because 
                    // in this case the event would be passed as argument and we want to pass optionText as argument
                    props.handleAddOption(props.optionText)
            )}
            >
                remove
            </button>
        </div>
    );
}

/* class Option extends React.Component {
    render () {
        return (
            // <li key={this.props.text}>{this.props.text} </li> 
            <li>Option: {this.props.optionText}</li>
        )
    }
} */

export default Option;