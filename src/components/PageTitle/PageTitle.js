import React from "react";

//Styles
import styles from './PageTitle.module.scss';


const PageTitle = ({ text }) => {
    return <h1 className={styles.pageTitle}>{ text }</h1>
}

export default PageTitle;