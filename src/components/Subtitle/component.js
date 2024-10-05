import React from "react";
import styles from './style';

const Subtitle = ({ text, textAlign = 'center', underline = false }) => {
    const textAlignClass = styles[`textAlign_${textAlign}`];
    const underlineClass = underline ? styles.underline : '';

    return (
        <h2 style={{ ...styles.pageTitle, ...textAlignClass, ...underlineClass }}>
            {text}
        </h2>
    );
};

export default Subtitle;