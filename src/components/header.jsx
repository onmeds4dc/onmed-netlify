import { Link } from "gatsby";

import React from "react";
import SiteLogo from "./site-logo";
import MenuHeader from "./menu-header";

const Header = () => {
    return (
        <header className="py-2 py-md-3 menu-header-wrapper">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <Link to="/" className="text-light d-flex">
                        <SiteLogo />
                    </Link>
                    <MenuHeader />
                </div>
            </div>
        </header>
    );
};

export default Header;
