import React from 'react'
import Slider from '../../GlobalComponents/Slider/index';
import data from './data';
import './style.css'

function Products() {
    return (
        <section className="home__page-products" id="home__page-services">
            <h1>Products</h1>
            <Slider data={data} />
        </section>
    )
}

export default Products