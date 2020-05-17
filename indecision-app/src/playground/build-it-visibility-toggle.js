class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this. handleToggleVisibility = this. handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState(prevState => {
            return {
                visibility: !prevState.visibility
            };
        })
    }

    render () {
        return  (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && <p>{'Here are some details!'}</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));
/* const app = {
    details: 'Here are some details!',
    showDetails: false
}
//let showDetails = false;

const onToggleShowDetails = () => {
    //showDetails = !showDetails;
    app.showDetails = !app.showDetails;
    renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleShowDetails}>
                {app.showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            {app.showDetails && <p>{'Here are some details!'}</p>}
        </div>
    );
    
    ReactDOM.render(jsx, appRoot);
    
}

renderApp(); */
