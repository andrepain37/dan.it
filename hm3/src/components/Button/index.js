import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {


    const {text, backgroundColor, onClick, classes} = props

    return ( 
        <button onClick={onClick} style={{backgroundColor}} className={classes}>
            {text}
        </button>
    );
    
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