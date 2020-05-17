class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            //options: props.options
            options: []
        };
    
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

    handleDeleteOptions() {
        this.setState(() => ( { options: [] }));
    } 

    handleDeleteOption(optionToDelete) {
        this.setState(prevState => ({
            options: prevState.options.filter((option) => option !== optionToDelete)
        }))
    }

    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[randomNumber];
        alert(selectedOption);
    }

    handleAddOption(option) {

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

    render() {
        const subtitle = 'Put your life in the hands of a computer!';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    } 
  }

/*   IndecisionApp.defaultProps = {
      options: []
  } */
  

/* class Header extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.title}</h1>
        <h2> {this.props.subtitle}</h2>
      </div>
    );
  }
} */

const Header = (props) => {
    return (
        <div>
            <h1> {props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>} 
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision App'
}

const Action = (props) => {
    return (
        <div>
        {/* onClick is only reference because it only be called when someone clicks */}
          <button 
              onClick={props.handlePick} 
              disabled={!props.hasOptions}
          >
              What should I do?
          </button>
        </div>
      );
}

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

const Options = (props) => {
    return (
        <div>
        {props.options.length === 0  && <p>Please add an option to get started!</p>}
        <button onClick={props.handleDeleteOptions}>Remove All</button>
            <ol >
                {props.options.map(option => (
                    <Option 
                        key={option} 
                        optionText={option}
                        //props to Access OptionS property
                        handleAddOption={props.handleDeleteOption}
                    />
                ))}
            </ol>
        </div>      
    );
}

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

const Option = (props) => {
    return (
        <div>
            {/* <li key={this.props.text}>{this.props.text} </li> */}
            <li>Option: {props.optionText}</li>
            <button 
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

class AddOption extends React.Component {
    constructor(props){
        super(props);
        //we need to keep the constructor to bind the context of handleAddOption method of this component because it is the one that will be called in jsx
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    // we are not removing handleAddOption in this component because there are some behaviour that should de handled here
    handleAddOption(event) {
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" autoComplete="off"/>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));
