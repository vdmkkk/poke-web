import React from "react";
import { Link } from "react-router-dom";
import githubLogo from "./images/githubLogo.png"

const Footer = () => {
    return (
        <footer className="footer-container">
            <ul>
                <li><p>© 2023 PokeSearch, LLC</p></li>
                <li><Link to="/cards">Карточки</Link></li>
                <li><Link to="/about">О нас</Link></li>
            </ul>
        </footer>
    )
}

export default Footer;