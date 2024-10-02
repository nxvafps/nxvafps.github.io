import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

//Components
import Layout from "../../components/Layout/Layout"

//Pages
import Home from "../../pages/Home/Home";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Nv1 from "../../pages/Nv1/Nv1";
import Socials from "../../pages/Socials/Socials";
import Account from "../../pages/Account/Account";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import PrivacyPolicy from "../../pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "../../pages/TermsOfService/TermsOfService";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import UpdatePassword from "../../pages/UpdatePassword/UpdatePassword";

//Styles
import styles from './App.module.scss';


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
                            path="nv1" 
                            element={<Nv1 />} 
                        />
                        <Route 
                            path="socials" 
                            element={<Socials />} 
                        />
                        <Route
                            path='account' 
                            element= {<Account />}
                        />
                        <Route 
                            path='signin' 
                            element={<SignIn />} 
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
                            path="forgotpassword"
                            element={<ForgotPassword />}
                        /> 
                        <Route
                            path="updatepassword"
                            element={<UpdatePassword />}
                        />
                    </Route>
                </Routes>
            </HashRouter> 
        </div>
    );
}

export default App;