import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    
    state = {
        //options: props.options
        options: [],
        selectedOption: undefined
    };  
    
    /* constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            //options: props.options
            options: []
        };    
    } */

    handleDeleteOptions = () => {
        this.setState(() => ( { options: [] }));
    } 

    handleDeleteOption = (optionToDelete) => {
        this.setState(prevState => ({
            options: prevState.options.filter((option) => option !== optionToDelete)
        }))
    }

    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[randomNumber];
        this.setState(() => ({ selectedOption}));
    }

    handleAddOption = (option) => {

        if (!option) {
            return 'Enter valid value to add item!';
        }
        
        if (this.state.options.includes(option)) {
        // if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!';
        } 

        this.setState(prevState => ( {
                // do not use push to not directly manipulate the state
                // options: prevState.options.push(option)
             options: [...prevState.options, option]
        }))
    }

    handleClearSelectOption = () => {
        this.setState(() => ({selectedOption: undefined}));
    }
    
    componentDidMount() {

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                // only call setState if options is not null, otherwise if we pass nul do JSON.parse() we will get null
                this.setState(() => ({ options }));
            }

        } catch (e) {
            // if json data in invalid the catch block runs
        }        

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('unmout')
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer!';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>                    
                    <OptionModal 
                        selectedOption={this.state.selectedOption} 
                        handleClearSelectOption={this.handleClearSelectOption}
                    />
                </div>
                
            </div>
        );
    } 
  }

/*   IndecisionApp.defaultProps = {
      options: []
  } */