import React, { Component } from 'react';

class Button extends Component {


    render() { 

        const {text, backgroundColor, onClick} = this.props

        return ( 
            <button onClick={onClick} style={{backgroundColor}} className="modal-action__button">
                {text}
            </button>
        );
    }
}
 
export default Button;