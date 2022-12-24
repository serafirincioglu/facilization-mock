import React, { useEffect, useState } from 'react'
import FacilizationLogo from '../../../assests/facilization-nav-logo.png';
import './style.css';

function NavigationBar() {

    const [openNav, setOpenNav] = useState(false);
    const [navBar, setNavBar] = useState(false);

    useEffect(() => {
        let navClass = document.getElementById("navT");
        let menuClass = document.getElementById("menu");

        if (openNav === true) {
            navClass.classList.add("active")
            menuClass.classList.add("open")

        }
        else {
            navClass.classList.remove("active")
            menuClass.classList.remove("open")
        }

    }, [openNav])



    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <section className="navigation__bar-section" id="nav-bar">

            <div className={navBar ? "navT bg" : "navT"} id="navT" onClick={() => setOpenNav(!openNav)}>
                <div className="icon"></div>
                <img src={FacilizationLogo} alt="logo" className="navigation__bar-section-logo" />
            </div>

            <div id="menu">
                <ul>
                    <li><a style={{ color: 'white' }} href="/about-us">About Us</a></li>
                    <li><a style={{ color: 'white' }} href="/products">Products</a></li>
                    <li><a style={{ color: 'white' }} href="/services">Services</a></li>
                    <li><a style={{ color: 'white' }} href="/solutions">Solutions</a></li>
                    <li><a style={{ color: 'white' }} href="news">News</a></li>
                    <li><a style={{ color: 'white' }} href="career">Career</a></li>
                    <li><a style={{ color: 'white' }} href="contact">Contact</a></li>
                </ul>
            </div>

        </section >
    )
}

export default NavigationBar
