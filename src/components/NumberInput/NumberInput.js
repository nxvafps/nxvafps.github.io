import React, { useState } from 'react';

//Styles
import styles from './NumberInput.module.scss';


const NumberInput = ({ value, onChange, placeholder, minValue, maxValue, maxDigits, height = 40, width = 200 }) => {
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

    const addPx = (value) => (typeof value === 'number' ? `${value}px` : value);
    
    return (
        <input
            type="number"
            className={`${styles.numberInput} ${hasValue ? styles.hasValue : ''}`}
            min={minValue}
            max={maxValue}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            style={{ height: addPx(height), width: addPx(width) }}
        />
    );
};

export default NumberInput;
