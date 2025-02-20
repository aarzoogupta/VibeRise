import Footer from "./Footer"
import Navbar from "./Navbar"
import React from "react";
// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    return (
        <div>
            <Navbar/>
            <div className="content min-h-screen">
                {children}
            </div>
           <Footer/>
        </div>
    )
}

export default Layout