import React from 'react';

const Alert = props => {
    return (
        <div className="alert alert-danger my-4 col-lg-12 mx-auto" role="alert">
            Please fill out the form completely.
            <button type="button" className="close" aria-label="Close" onClick={props.closeAlert}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Alert;