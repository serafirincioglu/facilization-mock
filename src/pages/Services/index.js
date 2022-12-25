import React from 'react'
import TextBox from '../../components/GlobalComponents/TextBox';
import './style.css';
import logo from '../../assests/f-analytics-logo.png'
import { Grid } from '@mui/material'
import PageWrapper from '../../components/GlobalComponents/PageWrapper'

function Services() {
    return (
        <PageWrapper children={
            <>
                <TextBox title="Services" text="Facilization offers specialized system integration, application implementation, managed support and IT consultancy services to the banking and financial services institutions. We specialize in the provision of tailored professional services to the international banking community with a wide and deep experience based on strong internal IT and banking skills and competencies of our staff.

We differentiate our services through staff behaviour and specialization geared towards delivery of solutions that satisfy our customer expectations focusing on the reciprocal benefits of a long-term relationship.

We partner with market leaders such as Oracle and Microsoft to implement and customize best of breed applications to the specific needs of our clients. Our objective is to provide our clients smart solutions and meticulous implementation, actionable advice and best practices to ensure they reach their business goals through successful, on-time and cost-effective project implementation." />
                <Grid container justifyContent="flex-start" alignItems="flex-start">
                    <Grid item xs={12} sm={4}>
                        <TextBox title="Digital Banking Services" text="Our Past Experience Our staff has worked with…" image={logo} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title="Flexcube Implementation" text="Our Past Experience Our staff has worked with…" image={logo} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title="AI/ML" text="Our Past Experience Our staff has worked with…" image={logo} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title="Advisory Services" text="Our Past Experience Our staff has worked with…" image={logo} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title="Software/Application Development" text="Our Past Experience Our staff has worked with…" image={logo} />
                    </Grid>
                </Grid>
            </>
        } />

    )
}

export default Services