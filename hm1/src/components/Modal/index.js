import React, { Component } from 'react';

class Modal extends Component {

    render() { 
        const { closeButton, header, text, actions, closeModal, modalClass } = this.props

        
        return (
            <div className="modal">
                <div className="modal-action_background" onClick={closeModal}>
                </div>
                <div className={'modal-action_window ' + modalClass}>
                    
                    <div className="modal-action_window__header">
                        <h2>{header}</h2>
                        {closeButton && <div className="modal-action_window__close" onClick={closeModal}></div>}
                    </div>
                    <p className="modal-action_window__text">{text}</p>
                    <div className="modal-action_window__actions">
                        {actions}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Modal;