import React from "react";
import styles from '../styles/PageSubtitle.module.scss'

const PageSubtitle = ({ text }) => {
    return (
            <h2 className={styles.pageSubtitle}>{ text }</h2>
    )
}

export default PageSubtitle;