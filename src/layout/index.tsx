import React from 'react';
import Header from './Header/Header';

const Layout = (WrappedComponent: React.FunctionComponent) => () =>
    (
        <>
            <Header />
            <WrappedComponent />
        </>
    );

export default Layout;
