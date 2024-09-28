import React, { useState, useEffect } from 'react';
import DesktopNavigation from '../components/DesktopNavigation';
import MobileNavigation from '../components/MobileNavigation';
import { useMediaQuery } from 'react-responsive';
import AuthContext from '../context/AuthContext';
import supabase from '../config/supabaseClient';

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
