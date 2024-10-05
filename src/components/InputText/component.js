import React, { useState } from "react";

import StyledInput from "./styles";

const InputText = ({ value, onChange, placeholder='Enter Text', height, width }) => {
    const hasValue = useState(!!value);
    return (
        <StyledInput
            type='text'
            className={`${styles.input} ${hasValue ? styles.hasValue : ''}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            height={height}
            width= {width}
        />
    )
}

export default InputText;