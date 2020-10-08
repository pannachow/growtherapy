import React from 'react';


function ErrorView(props) {
    return (
        <div className="ErrorView">
            <h2>Error {props.code}: {props.text}</h2>
        </div>
    );
}

export default ErrorView;