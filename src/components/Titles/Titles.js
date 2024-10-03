import React from "react";

//Styles
import styles from './Titles.module.scss';


export const Title = ({ text, textAlign = 'center', underline = false }) => {
    const textAlignClass = styles[`textAlign_${textAlign}`];
    const underlineClass = underline ? styles.underline : '';

    return (
        <h1 className={`${styles.pageTitle} ${textAlignClass} ${underlineClass}`}>
            { text }
        </h1>
    );
};

export const Subtitle = ({ text, textAlign = 'center', underline = false }) => {
    const textAlignClass = styles[`textAlign_${textAlign}`];
    const underlineClass = underline ? styles.underline : '';

    return (
        <h2 className={`${styles.pageTitle} ${textAlignClass} ${underlineClass}`}>
            {text}
        </h2>
    );
};