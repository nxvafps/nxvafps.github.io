import React from 'react';
import Select from 'react-select';
import styles from '../../styles/components/nv1/RankDropdown.module.scss';

export const ranks = [
    { value: 'bronze 5', label: 'Bronze 5' },
    { value: 'bronze 4', label: 'Bronze 4' },
    { value: 'bronze 3', label: 'Bronze 3' },
    { value: 'bronze 2', label: 'Bronze 2' },
    { value: 'bronze 1', label: 'Bronze 1' },
    { value: 'silver 5', label: 'Silver 5' },
    { value: 'silver 4', label: 'Silver 4' },
    { value: 'silver 3', label: 'Silver 3' },
    { value: 'silver 2', label: 'Silver 2' },
    { value: 'silver 1', label: 'Silver 1' },
    { value: 'gold 5', label: 'Gold 5' },
    { value: 'gold 4', label: 'Gold 4' },
    { value: 'gold 3', label: 'Gold 3' },
    { value: 'gold 2', label: 'Gold 2' },
    { value: 'gold 1', label: 'Gold 1' },
    { value: 'platinum 5', label: 'Platinum 5' },
    { value: 'platinum 4', label: 'Platinum 4' },
    { value: 'platinum 3', label: 'Platinum 3' },
    { value: 'platinum 2', label: 'Platinum 2' },
    { value: 'platinum 1', label: 'Platinum 1' },
    { value: 'diamond 5', label: 'Diamond 5' },
    { value: 'diamond 4', label: 'Diamond 4' },
    { value: 'diamond 3', label: 'Diamond 3' },
    { value: 'diamond 2', label: 'Diamond 2' },
    { value: 'diamond 1', label: 'Diamond 1' },
    { value: 'masters 5', label: 'Masters 5' },
    { value: 'masters 4', label: 'Masters 4' },
    { value: 'masters 3', label: 'Masters 3' },
    { value: 'masters 2', label: 'Masters 2' },
    { value: 'masters 1', label: 'Masters 1' },
    { value: 'grandmaster 5', label: 'Grandmaster 5' },
    { value: 'grandmaster 4', label: 'Grandmaster 4' },
    { value: 'grandmaster 3', label: 'Grandmaster 3' },
    { value: 'grandmaster 2', label: 'Grandmaster 2' },
    { value: 'grandmaster 1', label: 'Grandmaster 1' },
    { value: 'champion 5', label: 'Champion 5' },
    { value: 'champion 4', label: 'Champion 4' },
    { value: 'champion 3', label: 'Champion 3' },
    { value: 'champion 2', label: 'Champion 2' },
    { value: 'champion 1', label: 'Champion 1' },
];

const customStyles = {
    control: (base, state) => ({
        ...base,
        borderRadius: 0,
        height: 40,
        minHeight: 40,
        borderColor: state.isFocused ? 'blue' : 'grey',
        '&:hover': {
            borderColor: state.isFocused ? 'darkblue' : 'darkgrey'
        }
    }),
    valueContainer: (base) => ({
        ...base,
        height: 40,
        padding: '0 8px'
    }),
    input: (base) => ({
        ...base,
        margin: 0,
        padding: 0
    }),
    indicatorsContainer: (base) => ({
        ...base,
        height: 40
    }),
    option: (base, state) => ({
        ...base,
        borderRadius: 0,
        backgroundColor: state.isSelected ? 'lightblue' : 'white',
        '&:hover': {
            backgroundColor: 'lightgrey'
        }
    })
};

const RankDropdown = ({ onChange }) => (
    <Select 
        className={styles.rankDropdown} 
        options={ranks} 
        onChange={onChange} 
        isSearchable 
        styles={customStyles}
        />
);

export default RankDropdown;
