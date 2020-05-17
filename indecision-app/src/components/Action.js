import React from 'react';

const Action = (props) =>  (
    <div>
    {/* onClick is only reference because it only be called when someone clicks */}
        <button
          className="big-button" 
          onClick={props.handlePick} 
          disabled={!props.hasOptions}
        >
          What should I do?
        </button>
    </div>
);

/* class Action extends React.Component {
   //  handlePick() { alert('handlePick'); } 
     
  render() {
    return (
      <div>
      {/* onClick is only reference because it only be called when someone clicks }
        <button 
            onClick={this.props.handlePick} 
            disabled={!this.props.hasOptions}
        >
            What should I do?
        </button>
      </div>
    );
  }
} */


export default Action;