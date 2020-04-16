import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handelDeleteOptions}>Remove All</button>
            {props.options.length === 0 && (
                <p>please add a option to get started</p>
            )}
            {props.options.map((option, index) => {
                return (
                    <Option
                        key={index}
                        option={option}
                        handelDeleteOption={props.handelDeleteOption}
                    />
                );
            })}
        </div>
    );
};

export default Options;
