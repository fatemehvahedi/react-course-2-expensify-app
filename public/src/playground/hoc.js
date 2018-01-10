import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>this is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (   // returns a HOC
        <div>
            {props.isAdmin && <p>this is private info! don't share.</p> }
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedCompennet) => {
    return (props) => ( // returns HOC
        <div>
            {props.isAuthenticated ? <WrappedCompennet {...props} /> : <p> please login </p> }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);



ReactDOM.render(<AuthInfo isAuthenticated={false} info="there are details"/>, document.getElementById('app'));