import React from 'react'
import data from './data';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './style.css'

function News() {
    return (
        <section className="home__page-news" id="home__page-news">
            <h1>News</h1>
            <Box sx={{ width: 1 }}>
                <Grid container justifyContent="center" spacing={{ xs: 2, md: 3 }}>
                    {
                        data.map((news, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                                    <article className="blog-card" key={index}>
                                        <div className="blog-card__background">
                                            <div className="card__background--wrapper">
                                                <img src={news.image} alt="news-img" className="news-background" />
                                                <div className="card__background--main">
                                                    <div className="card__background--layer"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-card__head">
                                            <span className="date__box">
                                                <span className="date__day">Read More</span>
                                            </span>
                                        </div>
                                        <div className="blog-card__info">
                                            <h6>{news.date}</h6>
                                            <h5>{news.title}</h5>
                                            {/* <a href="/">Read More</a> */}
                                        </div>
                                    </article>
                                </Grid>

                            )
                        }
                        )
                    }
                </Grid>
            </Box>
        </section >


    )
}

export default News