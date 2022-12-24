import React from 'react'
import data from './data'
import './services.css'
import Slider from '../../GlobalComponents/Slider/index'

function Services() {
    return (
        <section className="home__page-services" id="home__page-services">
            <h1>Services</h1>
            <Slider data={data} />
        </section>
    )
}

export default Services