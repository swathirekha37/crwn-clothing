import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from  '../../assets/crown.svg'

export function Header(props) {
    

    return (
        <div className="header">
            <Link classname="logo-container" to="/">
                <Logo className="logo"/>
            </Link>

                <div className="options">
                    <Link to = "/shop" className="option">SHOP</Link>
                    <Link to="/shop" className="option">CONTACT</Link>
                    {/* <span className="sign-in">SIGN IN</span> */}
                </div> 
                       
        </div>
    )
}
