import React from 'react';
import './Footer.css';
import facebookLogo from "../assets/facebook_icon.png";
import instagramLogo from "../assets/instagram.png";
import gmailLogo from "../assets/gmail.png";
import githubLogo from "../assets/github.png";

function Footer() {
    return (
        <div className="footerContainer">
            <div className="left">
                Connect me here-
                <div className="social">
                    <a href="#"><img src={facebookLogo} alt="facebook" /> </a>
                    <a href="#"><img src={instagramLogo} alt="instagram" /></a>
                    <a href="#"><img src={githubLogo} alt="github" /></a>
                    <a href="#"><img src={gmailLogo} alt="gmail" /></a>
                </div>
            </div>
            <div className="right">
                <p className='copyrightText'>@copyright2024</p>
            </div>
        </div>
    );
}

export default Footer;
