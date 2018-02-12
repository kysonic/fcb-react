import React from "react";
import "./Logo.css";
import logo from "../../../assets/fcb-logo.png";
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <div className="Logo">
                <img src={'/fcb-react/'+logo} alt="Bayern Munich Logo"/>
                {/* SEO stuff if we gonna use SSR */}
                <h1 className="indent">Bayern Munich Logotype</h1>
            </div>
        </Link>
    );
}

export default Logo;