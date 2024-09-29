import React from 'react';
import styles from '../../styles/components/nv1/PercentageInput.module.scss';

const PercentageInput = ({ value, onChange }) => (
    <input
        type="number"
        className={styles.percentageInput}
        min="0"
        max="99"
        value={value}
        onChange={onChange}
        placeholder="Enter Percentage"
    />
);

export default PercentageInput;
