import React, { useState } from 'react';
import styles from '../styles/components/NumberInput.module.scss';

const NumberInput = ({ value, onChange, placeholder, minValue, maxValue, maxDigits }) => {
    const [hasValue, setHasValue] = useState(!!value);

    const handleChange = (e) => {
        const newValue = e.target.value;

        if (newValue === '' || (newValue >= minValue && newValue <= maxValue && newValue.length <= maxDigits)) {
                setHasValue(!!newValue);
                onChange(e);

                if (newValue.length == maxDigits) {
                    e.target.blur();
                }
        }
    };
    
    return (
        <input
            type="number"
            className={`${styles.numberInput} ${hasValue ? styles.hasValue : ''}`}
            min={minValue}
            max={maxValue}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
};

export default NumberInput;
