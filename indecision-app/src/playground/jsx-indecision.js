
// JSX - JS XML

const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: []
};

const getSubtitle = (subtitle) => {
    if (subtitle) {
        return <p>{subtitle}</p>;
    }
};

const onFormSubmit = (event) => {
    event.preventDefault();
    // form element has elements object and then we access "option", because is the name of input element that we want to access
    const option = event.target.elements.option.value;

    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderApp();
    }

};

const onRemoveOptions = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const selectedOption = app.options[randomNumber];
    alert(selectedOption);
}

const appRoot = document.getElementById('app'); 

const renderApp = ()  => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {/* getSubtitle(app.subtitle) */}
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options.'}</p>
            <button disabled={app.options.length < 1} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveOptions}>Remove All</button>
            <ol>
            { 
               app.options.map((option, index) => <li key={index}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" autoComplete="off" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );  
    
    ReactDOM.render(template, appRoot);
};

renderApp();

