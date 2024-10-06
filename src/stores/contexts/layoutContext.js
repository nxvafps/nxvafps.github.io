import React, { createContext, useContext, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const LayoutContext = createContext();

const useLayout = () => useContext(LayoutContext);

const LayoutProvider = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const [layout, setLayout] = useState(isDesktop ? 'desktop' : 'mobile');

    useEffect(() => {
        setLayout(isDesktop ? 'desktop' : 'mobile');
    }, [isDesktop]);

    return (
        <LayoutContext.Provider value={layout}>
            {children}
        </LayoutContext.Provider>
    );
};

export { useLayout, LayoutProvider };
