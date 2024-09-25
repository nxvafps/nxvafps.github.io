import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import styles from '../styles/components/App.module.scss';

//pages
import Layout from "../pages/Layout"
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Socials from "../pages/Socials";
import Nv1 from "../pages/Nv1";
import Account from "../pages/Account";
import LogIn from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import SuccessfulSignup from "../pages/SuccessfulSignup";
import ForgotPassword from "../pages/ForgotPassword";
import UpdatePassword from "../pages/UpdatePassword";
import MagicLinkSent from "../pages/MagicLinkSent";
import SuccessfulPasswordReset from "../pages/SuccessfulPasswordReset";

function App() {
    return(
        <div className={styles.background}>
            <HashRouter basename="/">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route 
                            index 
                            element={<Home />} 
                        />
                        <Route 
                            path="portfolio" 
                            element={<Portfolio />} 
                        />
                        <Route 
                            path="socials" 
                            element={<Socials />} 
                        />
                        <Route 
                            path="nv1" 
                            element={<Nv1 />} 
                        />
                        <Route
                            path='account' 
                            element= {<Account />}
                        />
                        <Route 
                            path='login' 
                            element={<LogIn />} 
                        />
                        <Route 
                            path='signup' 
                            element={<SignUp />} 
                        />
                        <Route 
                            path='privacypolicy'
                            element={<PrivacyPolicy />}
                        />
                        <Route 
                            path='termsofservice'
                            element={<TermsOfService />}
                        />
                        <Route
                            path='successfulsignup'
                            element={<SuccessfulSignup />}
                        />
                        <Route
                            path="forgotpassword"
                            element={<ForgotPassword />}
                        /> 
                        <Route
                            path="updatepassword"
                            element={<UpdatePassword />}
                        /> 
                        <Route
                            path="magiclinksent"
                            element={<MagicLinkSent />}
                        />
                        <Route 
                            path='successfulpasswordreset'
                            element={<SuccessfulPasswordReset />}
                        />
                    </Route>
                </Routes>
            </HashRouter> 
        </div>
    );
}

export default App;