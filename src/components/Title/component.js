import React from "react";
import styles from './style';

const Title = ({ text, textAlign = 'center', underline = false }) => {
    const textAlignClass = styles[`textAlign_${textAlign}`];
    const underlineClass = underline ? styles.underline : '';

    return (
        <h1 className={{ ...styles.pageTitle, ...textAlignClass, ...underlineClass }}>
            { text }
        </h1>
    );
};

export default Title;