import React from 'react'
import Grid from '@mui/material/Grid';
import { List, ListItem } from '@mui/material';
import { AboutUs } from './data';
import { OurProducts } from './data';
import { OurServices } from './data';
import './style.css';


function Footer() {
    return (
        <footer className="home__page-footer">
            <Grid container rowSpacing={1} spacing={1} direction="row" justifyContent="center" alignItems="flex-start">
                <Grid item xs={12} sm>
                    <List alignItems="center">
                        <ListItem>
                            <h3>About Us</h3>
                        </ListItem>
                        {AboutUs.map((item, index) => {
                            return <ListItem key={index} alignItems="flex-start">
                                <a href={item.link}>{item.title}</a>
                            </ListItem>
                        })}
                    </List>
                </Grid>
                <Grid item xs={12} sm>
                    <ListItem alignItems="flex-start">
                        <h3>Our Products</h3>
                    </ListItem>
                    <List>
                        {OurProducts.map((item, index) => {
                            return <ListItem key={index}>
                                <a href={item.link}>{item.title}</a>
                            </ListItem>
                        })}
                    </List>
                </Grid>
                <Grid item xs={12} sm>
                    <ListItem alignItems="flex-start">
                        <h3>Our Services</h3>
                    </ListItem>
                    <List>
                        {OurServices.map((item, index) => {
                            return <ListItem key={index}>
                                <a href={item.link}>{item.title}</a>
                            </ListItem>
                        })}
                    </List>
                </Grid>
                <Grid item xs={12} sm>
                    <ListItem alignItems="flex-start">
                        <h3>Contact Us</h3>
                    </ListItem>
                    <List>
                        <ListItem>
                            <p>Rr. Sami Frashëri, P.56,
                                Kompleksi TID (qendra “Nobis”),
                                Hyrja B, Kati 1, Nj.B.5, Tirana, AL</p>
                        </ListItem>
                        <ListItem>
                            <p>
                                info@facilization.com
                                <br />
                                <span>+355 4 2256006</span>
                            </p>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </footer>

    )
}

export default Footer