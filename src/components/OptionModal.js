import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Selected Option"
            ariaHideApp={false}
            onRequestClose={props.handleClearSelectedOptionModal}
        >
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.handleClearSelectedOptionModal}>Okay</button>
        </Modal>
    );
};
export default OptionModal;
