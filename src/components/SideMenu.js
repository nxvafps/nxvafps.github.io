import React from "react";
import NavButton from "./NavButton";
import styles from '../styles/components/SideMenu.module.scss';

const SideMenu = ({ isOpen, closeMenu }) => {
    const [session, setSession] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user);
        });

        return () => subscription.unsubscribe();
    }, []);
    return (
        <div className={`${styles.container} ${isOpen ? styles.open : ''}`}>
            <div className={styles.closeContainer}>
                <div className={styles.buttonContainer}>
                    <a href="" className={styles.closeButton} onClick={closeMenu}>&times;</a>
                </div>
            </div>
            <NavButton text='Home' href='/' onClick={closeMenu} />
            <NavButton text='Portfolio' href='/portfolio' onClick={closeMenu} />
            <NavButton text='Socials' href='/socials' onClick={closeMenu} />
            <hr className={styles.divider} onClick={closeMenu} />
            {user ? (
                <NavButton text='Account' href='/account' onClick={closeMenu} />
            ) : (
                <>
                    <NavButton text='Login' href='/login' onClick={closeMenu} />
                    <NavButton text='Sign Up' href='/signup' onClick={closeMenu} />
                </>
            )}
            
        </div>
    )
}

export default SideMenu;
