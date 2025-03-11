import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { MdOutlineAddIcCall } from "react-icons/md";
import Image from '../Images/SampleLogo.png';

const Header = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300); 
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`${styles['nav-header']} ${styles['bottom-line']} ${isScrolled ? styles['scrolled'] : ''}`}>
            <div className="container">
                <div className={`${styles['nav']}`}>
                    <h3 className={styles['company-name']}>Duni<span className={styles['company-name-span']}>x</span>ab</h3>
                    <button className={styles['hamburger-button']} onClick={toggleMenu}>
                        ☰
                    </button>

                    {/* Larger screen menu */}
                    <ul className={`navbar-nav ${styles['desktop-nav']}`}>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/talents">
                                Our Talents
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/career">
                                Career
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <div className={styles['contact-main-div']}>
                                <div className={styles['call-icon-div']}>
                                    <MdOutlineAddIcCall className={styles['call-icon']} />
                                </div>
                                <span className={styles['phone-number']}>+91-9746 7184 61</span>
                            </div>

                        </li>
                    </ul>

                    {/* Side Menu (Dropdown) */}
                    <div className={`${styles['side-menu']} ${isMenuOpen ? styles['open'] : ''}`}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" onClick={toggleMenu}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" onClick={toggleMenu}>
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/talents" onClick={toggleMenu}>
                                    Our Talents
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/career" onClick={toggleMenu}>
                                    Career
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;