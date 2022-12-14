import React from "react";
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">No Movie No Life</div>
            <div className="user-image">
                <img src={user} alt="user" />
            </div>
        </div>
    )
}

export default Header;