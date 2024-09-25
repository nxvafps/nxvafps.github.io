import React from 'react';
import DesktopNavigation from '../components/DesktopNavigation';
import MobileNavigation from '../components/MobileNavigation';
import { useMediaQuery } from 'react-responsive';

const Layout = () => {
    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <div>
            {isDesktop ? <DesktopNavigation /> : <MobileNavigation />}
        </div>
    );
};

export default Layout;
