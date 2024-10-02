import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

//Components
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

//Config
import supabase from '../../config/supabaseClient';

//Contexts
import AuthContext from '../../contexts/AuthContext';


const Layout = () => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const [session, setSession] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session);
            setUser(session?.user);
        };

        getSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user);
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {isDesktop ? <DesktopNavigation /> : <MobileNavigation />}
        </AuthContext.Provider>
    );
};

export default Layout;
