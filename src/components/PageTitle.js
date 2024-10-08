import React from "react";
import styles from '../styles/PageTitle.module.scss'

const PageTitle = ({ text }) => {
    return <h1 className={styles.pageTitle}>{ text }</h1>
}

export default PageTitle;