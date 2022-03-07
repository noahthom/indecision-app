import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => {
    return (
        <Modal
        isOpen ={!!props.selectedOption}
        contentLabel ='Selected Option'
        ariaHideApp = {false}
        closeTimeoutMS={200}
        className= "modal"
        onRequestClose = {props.handleCloseModal}
        >
            <h3 className="modal__title">Selection Option:</h3>
            <p className= "modal__body">{props.selectedOption}</p>
            <button className= "button" onClick = {props.handleCloseModal}>Close</button>
        </Modal>
    )
}

export default OptionModal