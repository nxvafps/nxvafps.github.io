const styles = {
    input: {
        boxSizing: 'border-box',
        textAlign: 'center',
        border: 'none',
        outline: 'none',
        border: '1px solid transparent',
        backgroundColor: '#7b7777',
        color: '#ffffff',
        '&::placeholder': {
            color: '#ffffff',
            fontSize: '15px',
        },
        '&:hover, &:focus, &:not(.hasValue)': {
            border: '1px solid #ffffff',
        },
        '&.hasValue:not(:focus):not(:hover)': {
            border: '1px solid transparent',
        },
    },
};

export default styles;
