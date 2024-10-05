import React from "react";

import styles from './styles';

const Button = ({ height = '40px', width = '75px', fontSize='20px', margin = '0 0 0 0', text, onClick}) => {
    return (
        <button 
            className={styles.button}
            onClick={onClick}
            style={{height: height, width: width, maxWidth: width, fontSize: fontSize, margin: margin}}
        >
            { text }
        </button>
                    
    )
}

export default Button;