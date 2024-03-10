import React from "react"
import small_logo from "../images/small_logo.png"
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-logo">
                <img src={small_logo} alt="logo"/>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <a href="/">Home</a>
                        </li>
                        <li>
                        <a href="/about">About</a>
                        </li>
                        <li>
                        <a href="/services">Services</a>
                        </li>
                        <li>
                        <a href="/completemenu">Menu</a>
                        </li>
                        <li>
                        <a href="/reservations">Reservations</a>
                        </li>
                        <li>
                        <a href="/booking">Order Online</a>
                        </li>
                        <li>

                        <a href="/login">Login</a>
                        </li>
                </ul>
            </div>

            <div className="contact">
                <ul>
                    <li>
                        <a href="">Chicago</a>
                    </li>
                    <li>
                        <a href="/">+312 xxx-xxxx-xxx</a>
                    </li>
                </ul>
            </div>

            <div className="socialnetworks">
                <ul>
                    <li>
                        <a href="https://facebook.com"><img src={facebook} alt="facebook"/></a>
                    </li>
                    <li>
                        <a href="https://instagram.com"><img src={instagram} alt="instagram"/></a>

                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;