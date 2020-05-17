'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            //options: props.options
            options: []
        };

        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) {
                    // only call setState if options is not null, otherwise if we pass nul do JSON.parse() we will get null
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                // if json data in invalid the catch block runs
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('unmout');
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToDelete) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return option !== optionToDelete;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNumber = Math.floor(Math.random() * this.state.options.length);
            var selectedOption = this.state.options[randomNumber];
            alert(selectedOption);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {

            if (!option) {
                return 'Enter valid value to add item!';
            }

            if (this.state.options.includes(option)) {
                // if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists!';
            }

            this.setState(function (prevState) {
                return {
                    // do not use push to not directly manipulate the state
                    // options: prevState.options.push(option)
                    options: [].concat(_toConsumableArray(prevState.options), [option])
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Put your life in the hands of a computer!';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

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

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' ',
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision App'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};

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

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started!'
        ),
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            props.options.map(function (option) {
                return React.createElement(Option, {
                    key: option,
                    optionText: option
                    //props to Access OptionS property
                    , handleAddOption: props.handleDeleteOption
                });
            })
        )
    );
};

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

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'li',
            null,
            'Option: ',
            props.optionText
        ),
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    return (
                        // here we do not call the method directly ({ props.handleAddOption}) because 
                        // in this case the event would be passed as argument and we want to pass optionText as argument
                        props.handleAddOption(props.optionText)
                    );
                }
            },
            'remove'
        )
    );
};

/* class Option extends React.Component {
    render () {
        return (
            // <li key={this.props.text}>{this.props.text} </li> 
            <li>Option: {this.props.optionText}</li>
        )
    }
} */

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        //we need to keep the constructor to bind the context of handleAddOption method of this component because it is the one that will be called in jsx
        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }
    // we are not removing handleAddOption in this component because there are some behaviour that should de handled here


    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(event) {
            event.preventDefault();

            var option = event.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                event.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option', autoComplete: 'off' }),
                    React.createElement(
                        'button',
                        null,
                        'Add option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
