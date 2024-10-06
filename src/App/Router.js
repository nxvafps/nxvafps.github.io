import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLayout } from '../stores/contexts';

import * as Pages from './pages';
import { DesktopNavigation, MobileNavigation } from '../components';

const AppRouter = () => {
    const layout = useLayout();

    return (
        <Routes>
            <Route path="/" element={layout === 'desktop' ? <DesktopNavigation /> : <MobileNavigation /> }>
                <Route index element={<Pages.Home />} />
                <Route path="portfolio" element={<Pages.Portfolio />} />
                <Route path="nv1" element={<Nv1 />} />
                <Route path="socials" element={<Pages.Socials />} />
                <Route path='account' element= {<Pages.Account />} />
                <Route path='signin' element={<Pages.SignIn />} />
                <Route path='signup' element={<Pages.SignUp />} />
                <Route path='privacypolicy' element={<Pages.PrivacyPolicy />} />
                <Route path='termsofservice' element={<Pages.TermsOfService />} />
                <Route path="forgotpassword" element={<ForgotPassword />} /> 
                <Route path="updatepassword" element={<UpdatePassword />} />
            </Route>
        </Routes>
    );
};

export default AppRouter; 