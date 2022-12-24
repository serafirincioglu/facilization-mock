import React from 'react'
import Carousel from 'react-multi-carousel';
import './style.css';


function Slide({ data }) {
    return (
        <section id="slider">
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={1000}
                centerMode={false}
                draggable
                focusOnSelect={false}
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >


                {data.map((service, index) => {
                    return (
                        <div className="cards" key={index}>
                            <a href="/" className="card">
                                <img src={service.image} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <div className="card__header-text">
                                            <h3 className="card__title">{service.title}</h3>
                                        </div>
                                    </div>
                                    <p className="card__description">{service.description}</p>
                                </div>
                            </a>
                        </div>
                    )
                }
                )}
            </Carousel>
        </section>
    )
}

export default Slide