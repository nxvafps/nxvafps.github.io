import React from 'react';
import { components } from 'react-select';

const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="5" y1="7.5" x2="10" y2="12.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="10" y1="12.5" x2="15" y2="7.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </components.DropdownIndicator>
    );
};

export default DropdownIndicator;
