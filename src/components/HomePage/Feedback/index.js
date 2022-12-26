import React from 'react'
import Button from '@mui/material/Button';
import './style.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/system/Unstable_Grid/Grid';
import feedbackLogo from '../../../assests/feedback-logo.png'


const ColorButton = styled(Button)(({ theme }) => ({
    color: 'black',
    backgroundColor: 'white',
    transitions: 'border 5s',
    '&:hover': {
        border: '0.02rem solid',
        backgroundColor: 'white',
    },
}));


function Feedback() {

    return (
        <section className="home__page-feedback" id="home__page-feedback">
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item xs={12} sm={6}>
                    <h1 className="home__page-feedback-text">
                        Your opinion is important to us.
                        <br />

                        Please give us a feedback.
                    </h1>
                    <ColorButton variant="contained" size="large">
                        Feedback
                    </ColorButton>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img className="home__page-feedback-logo" src={feedbackLogo} alt="feedback-logo" />
                </Grid>
            </Grid>

        </section >
    )
}

export default Feedback