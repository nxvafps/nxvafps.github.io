import React from "react";
import styles from '../styles/components/PageSubtitle.module.scss';

const PageSubtitle = ({ text, textAlign = 'center', underline = false }) => {
    const textAlignClass = styles[`textAlign_${textAlign}`];
    const underlineClass = underline ? styles.underline : '';

    return (
        <h2 className={`${styles.pageSubtitle} ${textAlignClass} ${underlineClass}`}>
            {text}
        </h2>
    );
};

export default PageSubtitle;
