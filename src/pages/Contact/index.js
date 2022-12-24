import React from 'react'
import './style.css';
import { Button, Grid } from '@mui/material';
import TextBox from '../../components/GlobalComponents/TextBox';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';


function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = React.useMemo(() => {
        if (focused) {
            return 'This field is being focused';
        }

        return '';
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
}

const ColorButton = styled(Button)(({ theme }) => ({
    color: 'black',
    backgroundColor: 'white',
    transitions: 'border 5s',
    '&:hover': {
        border: '0.02rem solid',
        backgroundColor: 'white',
    },
}));


function Contact() {

    let albaniaOffice = (
        <article>
            <p>
                Sami Frashëri Street, B.56,<br />
                Kompleksi TID ("Nobis" center),<br />
                Entry B, Floor 1, Nj.B.5,<br />
                Tirana, Albania
            </p>
            <br />
            <p> +35542256006</p>
            <p> info@facilization.com</p>
            <p> www.facilization.com</p>
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
        <Box component="form" noValidate autoComplete="off">

            <Grid container justifyContent="space-between" alignItems="flex-start">


                <Grid item xs={6} sm={3}>
                    <FormControl margin="dense" sx={{ width: '100%' }}>
                        <OutlinedInput type="text" placeholder="First Name" />
                        <MyFormHelperText />
                    </FormControl>
                </Grid>


                <Grid item xs={6} sm={3} >
                    <FormControl margin="dense" sx={{ width: '100%' }}>
                        <OutlinedInput type="text" placeholder="Last Name" />
                        <MyFormHelperText />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <FormControl margin="dense" sx={{ width: '100%' }}>
                        <OutlinedInput type="text" placeholder="Company" />
                        <MyFormHelperText />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <FormControl margin="dense" sx={{ width: '100%' }}>
                        <OutlinedInput type="email" placeholder="Email" />
                        <MyFormHelperText />
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <FormControl margin="dense" sx={{ width: '100%' }}>
                        <OutlinedInput type="textarea" placeholder="Your Message" />
                        <MyFormHelperText />
                    </FormControl>
                </Grid>
                <ColorButton variant="contained" size="large">
                    Send
                </ColorButton>
            </Grid>

        </Box>
    )


    return (
        <section className="contact_page" id="contact">
            <div className="banner" />

            <Grid style={{ margin: '4rem 0' }} container justifyContent="center" alignItems="flex-start">
                <Grid item xs={12} sm={6}>
                    <TextBox title="Albania Office" text={albaniaOffice} />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextBox title="Malta Office" text={maltaOffice} />
                </Grid>
            </Grid>

            <div style={{ margin: '5rem auto', maxWidth: '80%', minWidth: '100%' }}>
                <TextBox title="Send us an email" text={emailForm} />
            </div>

        </section>
    )
}

export default Contact