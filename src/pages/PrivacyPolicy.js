import React from "react";
import PageTitle from "../components/PageTitle";
import styles from '../styles/pages/PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {
    return (
        <>
            <PageTitle text={'Privacy Policy'} />
            <div className={styles.policyContainer}>
                <p className={styles.policy}>
                    <strong>Effective Date: 16/09/2024</strong><br /><br />
                    <strong>1. Introduction</strong><br />
                    Welcome to NovaFPS. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at officialnovafps@gmail.com.<br /><br />
                    <strong>2. Information We Collect</strong><br />
                    We collect the following personal information from you:<br />
                    - Usernames<br />
                    - Email addresses<br />
                    - Passwords<br /><br />
                    <strong>3. How We Use Your Information</strong><br />
                    We use the information we collect in the following ways:<br />
                    - To send emails to users<br />
                    - To manage user accounts and provide access to our services<br /><br />
                    <strong>4. Cookies and Tracking Technologies</strong><br />
                    We use cookies, local storage, and sessions to:<br />
                    - Maintain your login session<br />
                    - Store your preferences and settings<br /><br />
                    <strong>5. Third-Party Logins</strong><br />
                    You can log in to our site using third-party sign-in services such as Twitter, Google, and GitHub. These services will authenticate your identity and provide you the option to share certain personal information with us.<br /><br />
                    <strong>6. Data Protection and Privacy Laws</strong><br />
                    We comply with the following data protection and privacy laws:<br />
                    - <strong>California Online Privacy Protection Act (CalOPPA)</strong><br />
                    - <strong>General Data Protection Regulation (GDPR)</strong><br />
                    - <strong>California Consumer Privacy Act (CCPA)</strong><br /><br />
                    <strong>7. Children's Privacy</strong><br />
                    Our services are available to users under the age of 13. We take special precautions to protect the privacy of children. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.<br /><br />
                    <strong>8. Data Security</strong><br />
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.<br /><br />
                    <strong>9. Contact Information</strong><br />
                    If you have any questions or concerns about this privacy policy, please contact us at:<br />
                    - Email: officialnovafps@gmail.com<br /><br />
                    <strong>10. Changes to This Privacy Policy</strong><br />
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.
                </p>            
            </div>
        </>
    )
}

export default PrivacyPolicy;
