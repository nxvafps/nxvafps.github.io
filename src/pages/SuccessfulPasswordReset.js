import React from "react";
import styles from '../styles/pages/SuccessfulPasswordReset.module.scss';
import PageTitle from "../components/PageTitle";
import { useNavigate } from "react-router-dom";

const SuccessfulPasswordReset = () => {
    const navigate = useNavigate();

    const account = () => {
        navigate('/account');
    }
    return(
        <>
            <PageTitle text={'Success!'} />
            <div className={styles.pageContent}>
                <p className={styles.text}>
                    You have successfully reset your password, you can navigate back to your account using the button below.
                </p>
                <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={account}>Account</button>
            </div>
            </div>
        </>
    )
}
export default SuccessfulPasswordReset;