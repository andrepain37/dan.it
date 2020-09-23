import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartItem';

class Modal extends Component {

    render() { 
        const { closeButton, header, actions, closeModal, cartList } = this.props
        
        
        return (
            <div className="modal">
                <div className="modal-action_background" onClick={closeModal}>
                </div>
                <div className="modal-action_window">
                    
                    <div className="modal-action_window__header">
                        <h2>{header}</h2>
                        {closeButton && <div className="modal-action_window__close" onClick={closeModal}></div>}
                    </div>
                    <div className="modal-action_window__products">
                        {cartList && 
                            cartList.map(prod => {
                                return(
                                    <CartItem key={prod.id} product={prod}  />
                                )
                            })
                        }

                    </div>
                    <div className="modal-action_window__actions">
                        {actions}
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    closeButton: PropTypes.bool, 
    header: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired, 
    closeModal: PropTypes.func.isRequired, 
    cartList: PropTypes.array.isRequired
}

Modal.defaultProps = {
    closeButton: false
}
 
export default Modal;