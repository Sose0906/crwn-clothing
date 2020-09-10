import React from "react";
import './_Header.scss'
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>

            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
                {
                    currentUser ? <div onClick={() => auth.signOut()} className="option">SIGN UP</div>
                        :
                        <Link className="option" to="/signIn">SIGN IN</Link>
                }
            </div>

        </div>
    )
};
export default Header;