import React from "react";

//Components
import PageTitle from "../../../../components/PageTitle/PageTitle";

//Styles
import styles from './MagicLinkSent.module.scss';


const MagicLinkSent = () => {
    return (
        <>
            <PageTitle text={'Link sent!'} />
            <div className={styles.pageContent}>
                <p className={styles.text}>You have been sent a link to sign in to your account, from there you can go to your account and change your password!</p>
            </div>
        </>
    )
}

export default MagicLinkSent;