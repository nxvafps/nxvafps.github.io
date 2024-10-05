import React, { useState } from "react";

import StyledInput from "./styles";

const InputNumber = ({ value, onChange, placeholder, minValue, maxValue, maxDigits, height, width }) => {
    const [hasValue, setHasValue] = useState(!!value);

    const handleChange = (e) => {
        const newValue = e.target.value;

        if (newValue === '' || (newValue >= minValue && newValue <= maxValue && newValue.length <= maxDigits)) {
            setHasValue(!!newValue);
            onChange(e);

            if (newValue.length === maxDigits) {
                e.target.blur();
            }
        }
    };

    return (
        <StyledInput
            type="number"
            className={hasValue ? 'hasValue' : ''}
            min={minValue}
            max={maxValue}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            height={height}
            width={width}
        />
    );
};

export default InputNumber;
