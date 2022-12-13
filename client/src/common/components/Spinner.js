import React from 'react';

const Spinner = () => {
    return (
        <div className={"wrapperSpinner"}>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;