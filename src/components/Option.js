import React from 'react';

const Option = (props) => {
    return (
        <div>
            {props.option}
            <button
                onClick={(e) => {
                    props.handelDeleteOption(props.option);
                }}
            >
                Remove
            </button>
        </div>
    );
};

export default Option;
