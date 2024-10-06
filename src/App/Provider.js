import React from 'react';
import { AuthProvider } from '../stores/contexts';
import { LayoutProvider } from '../stores/contexts';

import Background from './styles';

const AppProvider = ({ children }) => {
    return (
        <Background>
            <AuthProvider>
                <LayoutProvider>
                    {children}
                </LayoutProvider>
            </AuthProvider>
        </Background>
    );
};

export default AppProvider;