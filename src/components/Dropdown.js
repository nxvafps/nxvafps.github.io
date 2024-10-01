import React from 'react';
import Select from 'react-select';
import DropdownIndicator from './DropdownIndicator';

const customStyles = () => ({
    control: (base, state) => ({
        ...base,
        borderRadius: 0,
        height: 40,
        width: 200,
        minHeight: 40,
        borderColor: state.isFocused ? 'white' : 'white',
        outline: 'none',
        boxShadow: 'none',
        backgroundColor: '#7b7777',
        color: 'white',
        '&:hover': {
            borderColor: state.isFocused ? 'white' : 'white'
        }
    }),
    valueContainer: (base) => ({
        ...base,
        height: 40,
        padding: '0 8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
    }),
    input: (base) => ({
        ...base,
        margin: 0,
        padding: 0,
        outline: 'none',
        boxShadow: 'none',
        color: 'white',
        textAlign: 'center'
    }),
    singleValue: (base) => ({
        ...base,
        color: 'white',
        textAlign: 'center',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        top: '50%', 
        transform: 'translateY(-50%)'
    }),
    indicatorsContainer: (base) => ({
        ...base,
        display: 'none',
    }),
    option: (base, state) => ({
        ...base,
        borderRadius: 0,
        backgroundColor: state.isSelected ? '#7b7777' : '#7b7777',
        '&:hover': {
            backgroundColor: 'white',
            color: '#7b7777'
        },
        color: state.isSelected ? 'white' : 'white',
        textAlign: 'center'
    }),
    placeholder: (base) => ({
        ...base,
        color: 'white',
        textAlign: 'center',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        top: '50%', 
        transform: 'translateY(-50%)'
    }),
    menu: (base) => ({
        ...base,
        marginTop: 0,
        marginBottom: 0,
        backgroundColor: '#7b7777',
        color: 'white',
        borderColor: 'white',
        borderWidth: '1px',
        borderStyle: 'solid'
    }),
    menuList: (base) => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: '#7b7777',
        color: 'white'
    })

});


const Dropdown = ({ options, onChange, placeholder, value }) => (
    <Select 
        options={options} 
        onChange={onChange} 
        placeholder= {placeholder}
        isSearchable 
        styles={customStyles()}
        value={value}
        />
);

export default Dropdown;
