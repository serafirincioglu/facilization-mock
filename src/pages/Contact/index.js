import React from 'react'
import './style.css';
import { Button, Grid } from '@mui/material';
import TextBox from '../../components/GlobalComponents/TextBox';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import PageWrapper from '../../components/GlobalComponents/PageWrapper'


const ColorButton = styled(Button)(({ theme }) => ({
    color: 'black',
    backgroundColor: 'white',
    transitions: 'border 5s',
    fontFamily: "Playfair Display",
    '&:hover': {
        border: '0.02rem solid',
        backgroundColor: 'white',
    },
}));

const ColorFormControl = styled(FormControl)(({ theme }) => ({
    color: 'black',
    transitions: 'border 5s',
}));

const ColorInput = styled(Input)(({ theme }) => ({
    color: 'white',
    fontWeight: '900',
    fontSize: '1.5rem',
    fontFamily: "Playfair Display",
    '&:before': {
        borderBottom: '2px solid white',

    },
    '&:after': {
        borderBottom: '3px solid black',

    },
}));


function Contact() {
    let albaniaOffice = (
        <article>
            <p>Sami Frashëri Street, B.56,<br />Kompleksi TID ("Nobis" center),<br />Entry B, Floor 1, Nj.B.5,<br />Tirana, Albania</p>
            <br /><p>+35542256006<br /><br /> info@facilization.com<br /><br /> www.facilization.com</p>
        </article>
    )

    let maltaOffice = (
        <article>
            <p>
                Facilization Limited<br />
                Vision Exchange Building<br />
                Territorials Street, Mriehel,<br />
                BKR 3000,<br />
                Malta
            </p>
            <br />
            <p> malta@facilization.com</p>
        </article>
    )

    let emailForm = (
        <Box component="form" className="contact_form" noValidate autoComplete="off">
            <h2>Lets Keep In Touch...</h2>
            <Grid style={{ width: "100%", margin: "auto" }} container rowSpacing={4} columnSpacing={4} justifyContent="space-evenly" alignItems="center">
                <Grid item xs={12} sm={6}>
                    <ColorFormControl margin="dense" sx={{ width: '100%' }}>
                        <ColorInput type="text" placeholder="First Name" />
                    </ColorFormControl>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <ColorFormControl margin="dense" sx={{ width: '100%' }}>
                        <ColorInput type="text" placeholder="Last Name" />
                    </ColorFormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ColorFormControl margin="dense" sx={{ width: '100%' }}>
                        <ColorInput type="text" placeholder="Company" />
                    </ColorFormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ColorFormControl margin="dense" sx={{ width: '100%' }}>
                        <ColorInput type="email" placeholder="Email" />
                    </ColorFormControl>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <ColorFormControl margin="dense" sx={{ width: '100%' }}>
                        <ColorInput type="textarea" placeholder="Your Message" />
                    </ColorFormControl>
                </Grid>

                <ColorButton style={{ margin: '4rem 0' }} variant="contained" size="large">
                    Send
                </ColorButton>
            </Grid>

        </Box>
    )


    return (

        <PageWrapper children={
            <>
                <Grid container justifyContent="center" alignItems="flex-start">
                    <Grid item xs={12} sm={6}>
                        <TextBox title={<h2>Albania Office</h2>} text={albaniaOffice} />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextBox title={<h2>Malta Office</h2>} text={maltaOffice} />
                    </Grid>
                </Grid>

                <section className="contact">
                    {emailForm}
                </section>
            </>
        } />

    )
}

export default Contact