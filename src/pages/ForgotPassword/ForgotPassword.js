import React, { useState } from 'react';

//Contexts
import ForgotPasswordContext from '../../contexts/ForgotPasswordContext';

//Views
import RequestMagicLink from "./Views/RequestMagicLink/RequestMagicLink";
import MagicLinkSent from './Views/MagicLinkSent/MagicLinkSent';


const ForgotPassword = () => {
    const [ currentView, setCurrentView ] = useState('requestMagicLink');
    return (
        <ForgotPasswordContext.Provider value={{ setCurrentView }}>
            {currentView === 'requestMagicLink' && <RequestMagicLink />}
            {currentView === 'magicLinkSent' && <MagicLinkSent />}
        </ForgotPasswordContext.Provider>
    )
};

export default ForgotPassword;