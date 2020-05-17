import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
   /* constructor(props){
        super(props);
        //we need to keep the constructor to bind the context of handleAddOption method of this component because it is the one that will be called in jsx
        this.handleAddOption = this.handleAddOption.bind(this);
         this.state = {
            error: undefined
        }; 
    }*/
    // we are not removing handleAddOption in this component because there are some behaviour that should de handled here
    handleAddOption = (event) => {
        event.preventDefault();
        
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option); 

        this.setState(() => ({ error }));

        if (!error) {
            event.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption} >
                    <input className="add-option__input" type="text" name="option" autoComplete="off"/>
                    <button className="button">Add option</button>
                </form>
            </div>
        );
    }
}
