import React from 'react'
import Services from '../../components/HomePage/Services/services';
import Products from '../../components/HomePage/Products';
import News from '../../components/HomePage/News';
import Feedback from '../../components/HomePage/Feedback';

import './style.css';

function HomePage() {
    return (
        <>
            <img className="home__page-banner" src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVza3RvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="home__banner" />
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