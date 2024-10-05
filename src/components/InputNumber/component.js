import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  box-sizing: border-box;
  text-align: center;
  border: none;
  outline: none;
  border: 1px solid transparent;
  background-color: #7b7777;
  color: #ffffff;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  height: ${(props) => props.height || '40px'};
  width: ${(props) => props.width || '200px'};

  &::placeholder {
    color: #ffffff;
    font-size: 15px;
  }

  &:hover,
  &:focus,
  &:not(.hasValue) {
    border: 1px solid #ffffff;
  }

  &.hasValue:not(:focus):not(:hover) {
    border: 1px solid transparent;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const InputNumber = ({ value, onChange, placeholder, minValue, maxValue, maxDigits, height = '40px', width = '200px' }) => {
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
