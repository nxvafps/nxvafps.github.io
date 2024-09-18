import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../styles/Layout.module.scss';
import DesktopNavigation from '../components/DesktopNavigation';
import MobileNavigation from '../components/MobileNavigation';
import { useMediaQuery } from 'react-responsive';
import Footer from '../components/Footer'

const Layout = () => {
    const isDesktop = useMediaQuery({ minWidth: 1000 });

    return (
        <div>
            {isDesktop ? <DesktopNavigation /> : <MobileNavigation />}
        </div>
    );
};

export default Layout;
