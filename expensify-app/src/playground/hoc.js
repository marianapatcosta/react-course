import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    // returns the HOC
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don´t share!</p> }
            <WrappedComponent {...props}/>
        </div>
    )
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            <p> {props.isAuthenticated ? "You are authenticated!" : "You are not authenticated!"}</p>
            {!props.isAuthenticated && <p>This content requires authentication!</p>}
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please authenticate!</p>}
        </div>
    )
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="my info"/>, document.getElementById('app'));
//ReactDOM.render(<AdminInfo isAdmin={true} info="my info"/>, document.getElementById('app'));