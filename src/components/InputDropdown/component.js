import React, { useState } from "react";
import Select from "react-select";

import styles from "./styles";

const Dropdown = ({ options, onChange, placeholder, value, height = 40, width = 200 }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (input) => {
        setInputValue(input);
        
        const matchedOption = options.find(option => option.label.toLowerCase() === input.toLowerCase());
        if (matchedOption) {
            onChange(matchedOption);
            setTimeout(() => document.activeElement.blur(), 0);
        }
    };

    const handleChange = (selectedOption) => {
        onChange(selectedOption);
        setTimeout(() => document.activeElement.blur(), 0);
    };

    return (
        <Select 
            options={options} 
            onChange={handleChange}
            onInputChange={handleInputChange} 
            placeholder= {placeholder}
            isSearchable
            tabSelectsValue
            escapeClearsValue
            styles={styles(!!value, height, width)}
            value={value}
            inputValue={inputValue}
        />
    )
};

export default Dropdown;