import React, { useState } from "react";

const InputText = ({ value, onChange, placeholder='Enter Text', height = '40px', width = '200px' }) => {
    const hasValue = useState(!!value);
    return (
        <input
            type='text'
            className={`${styles.input} ${hasValue ? styles.hasValue : ''}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={{ height: height, width: width}}
        />
    )
}

export default InputText;