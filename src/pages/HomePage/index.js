import React from 'react'
import Services from '../../components/HomePage/Services/services';
import Products from '../../components/HomePage/Products';
import News from '../../components/HomePage/News';
import Feedback from '../../components/HomePage/Feedback';
import { bannerbg } from '../../assests/banner-bg.png';

import './style.css';

function HomePage() {
    return (
        <>
            <img className="home__page-banner" src="https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60" alt="home__banner" />
            <Services />
            <div className="section-seperator" />
            <Products />
            <div className="section-seperator" />
            <Feedback />
            <News />
        </>
    )
}

export default HomePage