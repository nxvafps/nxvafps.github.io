import React, { useState } from 'react';

//Contexts
import UpdatePasswordContext from '../../contexts/UpdatePasswordContext';

//Views
import UpdatePasswordMain from "./Views/UpdatePasswordMain/UpdatePasswordMain";
import UpdatePasswordSuccess from './Views/UpdatePasswordSuccess/UpdatePasswordSuccess';


const UpdatePassword = () => {
    const [ currentView, setCurrentView ] = useState('updatePasswordMain');

    return (
        <UpdatePasswordContext.Provider value={{ setCurrentView }}>
            {currentView === 'updatePasswordMain' && <UpdatePasswordMain />}
            {currentView === 'updatePasswordSuccess' && <UpdatePasswordSuccess />}
        </UpdatePasswordContext.Provider>
    )
};

export default UpdatePassword;