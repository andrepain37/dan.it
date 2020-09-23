import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {


    render() { 

        const {text, backgroundColor, onClick, classes} = this.props

        return ( 
            <button onClick={onClick} style={{backgroundColor}} className={classes}>
                {text}
            </button>
        );
    }
}

Button.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    classes: PropTypes.string,
}

Button.defaultProps = {
    text: 'Click',
    backgroundColor: '',
    classes: ''
}
 
export default Button;