import React from 'react'
import TextBox from '../../components/GlobalComponents/TextBox';
import { Grid } from '@mui/material'
import PageWrapper from '../../components/GlobalComponents/PageWrapper'

function Solutions() {
    return (

        <PageWrapper children={
            <>
                <TextBox title={<h2>Solutions</h2>} />
                <Grid container justifyContent="flex-start" alignItems="flex-start">
                    <Grid item xs={12} sm={4}>
                        <TextBox title={<h3>CRM Platform for Marketing, Sales, & Client Service Departments</h3>} text="CRM platform that automates business…" image="https://www.facilization.com/wp-content/uploads/2020/04/Creatio-Image-1-1-768x479.jpg" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title={<h3>BI & Data Warehouse – Turn data into information</h3>} text="In a rapidly changing business…" image="https://www.facilization.com/wp-content/uploads/2019/09/photo-1521709986901-579827f9924a-768x481.jpeg" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title={<h3>PSD2 Ready Open Banking APIs Facilization’s...</h3>} image="https://www.facilization.com/wp-content/uploads/2019/09/psd2-2.png" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title={<h3>Microfinance</h3>} text="Facilization offers a wide range…" image="https://www.facilization.com/wp-content/uploads/2019/09/Microfinance-1024x694-2-768x483.png" />
                    </Grid>
                </Grid>
            </>
        } />

    )
}

export default Solutions