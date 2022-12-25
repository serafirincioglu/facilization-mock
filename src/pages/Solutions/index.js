import React from 'react'
import TextBox from '../../components/GlobalComponents/TextBox';
import './style.css';
import { Grid } from '@mui/material'
import PageWrapper from '../../components/GlobalComponents/PageWrapper'

function Solutions() {
    return (

        <PageWrapper children={
            <>
                <TextBox title="Solutions" />

                <Grid container justifyContent="flex-start" alignItems="flex-start">
                    <Grid item xs={12} sm={4}>
                        <TextBox title="CRM Platform for Marketing, Sales, & Client Service Departments" text="CRM platform that automates business…" image="https://www.facilization.com/wp-content/uploads/2020/04/Creatio-Image-1-1-768x479.jpg" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title="BI & Data Warehouse – Turn data into information" text="In a rapidly changing business…" image="https://www.facilization.com/wp-content/uploads/2019/09/photo-1521709986901-579827f9924a-768x481.jpeg" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title="PSD2 Ready Open Banking APIs" text="Facilization’s Open Banking APIs is..." image="https://www.facilization.com/wp-content/uploads/2019/09/psd2-2.png" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title="Microfinance" text="Facilization offers a wide range…" image="https://www.facilization.com/wp-content/uploads/2019/09/Microfinance-1024x694-2-768x483.png" />
                    </Grid>
                </Grid>
            </>
        } />

    )
}

export default Solutions