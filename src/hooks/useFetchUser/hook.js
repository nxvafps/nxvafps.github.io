import { useState, useEffect } from 'react';
import supabase from '../../config/supabaseClient';

const useFetchUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user);
        };

        fetchUser();
    }, []);

    return user;
};

export default useFetchUser;
