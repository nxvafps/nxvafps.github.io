import React from "react";
import { useNavigate } from "react-router-dom";

//Components
import PageTitle from "../../../../components/PageTitle/PageTitle";

//Styles
import styles from './UpdatePasswordSuccess.module.scss';


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