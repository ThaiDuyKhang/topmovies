import React from 'react';
import './footer.scss';
import bg from './../../assets/footer-bg.jpg';
import logo from './../../assets/topmovie.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer" style={{backgroundImage:`url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="Top movies" />
                        <Link to="/">Top Movies</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact Us</Link>
                        <Link to="/">Term of services</Link>
                        <Link to="/">About Us</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Privacy pocily</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Must watch</Link>
                        <Link to="/">Recent release </Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
