import React from 'react';
import Header from "../Shared/Header";
import {ToastContainer} from "react-toastify";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <ToastContainer
                position="bottom-right"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default Layout;