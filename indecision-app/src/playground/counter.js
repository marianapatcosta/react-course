class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        const count = +localStorage.getItem('count');

        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count); 
        }
    }

    handleAddOne() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            };
        })
    }

    handleReset() {
        // Do not use this notation (pass an object as arg instead of a function) because
        //this.setState({count: 0})
        this.setState(() => {
            return {
                count:  0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }


}

/* Counter.defaultProps = {
    count: 0
} */

ReactDOM.render(<Counter />, document.getElementById('app'));

/* let count= 0;
const addOne = () => {
    count++; 
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};


//var template = React.createElement("p", null, "This is JSX from app.js");
const appRoot = document.getElementById('app'); 


const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
            {// <button onClick={() => console.log('ffff')}>+1</button> }
        </div>
    );
    
    ReactDOM.render(templateTwo, appRoot);    
}

 renderCounterApp(); */