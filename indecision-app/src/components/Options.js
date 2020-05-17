import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">    
            <h3 className="widget-header__title">Your Options</h3>
            <button
            className="button button--link" 
            onClick={props.handleDeleteOptions}
            > 
            Remove All
            </button>
        </div>
            {props.options.length === 0  && <p className="widget-message">Please add an option to get started!</p>}
        <div >
            {props.options.map((option, index) => (
                <Option 
                    key={option} 
                    optionText={option}
                    count={index + 1}
                    //props to Access OptionS property
                    handleAddOption={props.handleDeleteOption}
                />
            ))}
        </div>        
    </div>      
);
 
//class Options extends React.Component {

/*     constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    } */

    // in event handler we loose context, so we have to fix this by using Bind(9)
    // if we did not bind handleRemoveAll() in the constructor, its constext would be undefined the context of render() because function declarations/expressions to to their own scope
    // with binding in the contructor, handleRemoveAll() context is the Options component
 /*    handleRemoveAll() {
        console.log(this.props.options)
        alert('handleRemoveAll')
    }
 */
  /* render() {
      // the context of render() is Options component
    return (
        <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            <ol >
                {this.props.options.map(option => <Option key={option} optionText={option}/>)}
            </ol>
        </div>
      
    );
  }
} */

export default Options;
