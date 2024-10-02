import React, { useState } from 'react';

//Contexts
import SignUpContext from '../../contexts/SignUpContext';

//Views
import SignUpMain from "./Views/SignUpMain/SignUpMain";
import SignUpSuccess from './Views/SignUpSuccess/SignUpSuccess';


const SignUp = () => {
    const [ currentView, setCurrentView ] = useState('signUpMain');
    const [ emailVal, setEmailVal ] = useState('');

    return (
        <SignUpContext.Provider value={{ setCurrentView, setEmailVal, emailVal }}>
            {currentView === 'signUpMain' && <SignUpMain />}
            {currentView === 'signUpSuccess' && <SignUpSuccess />}
        </SignUpContext.Provider>
    )
};

export default SignUp;