import React from "react";

import StyledButton from './styles';

const Button = ({ height, width, fontSize, margin, text, onClick}) => {
    return (
        <StyledButton
            height={height}
            width={width}
            fontSize={fontSize}
            margin={margin}
            onClick={onClick}
            >
            {text}
        </StyledButton>            
    )
}

export default Button;