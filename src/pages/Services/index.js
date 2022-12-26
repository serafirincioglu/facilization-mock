import React from 'react'
import { Grid } from '@mui/material'
import TextBox from '../../components/GlobalComponents/TextBox';
import PageWrapper from '../../components/GlobalComponents/PageWrapper'
import logo from '../../assests/f-analytics-logo.png'

function Services() {
    return (
        <PageWrapper children={
            <>
                <TextBox title={<h2>Services</h2>} text={<p>Facilization offers specialized system integration,
                    application implementation, managed support and IT consultancy services
                    to the banking and financial services institutions.
                    We specialize in the provision of tailored professional services
                    to the international banking community with a wide and deep experience based on
                    strong internal IT and banking skills and competencies of our staff.
                    <br />
                    <br />
                    We differentiate our services through staff
                    behaviour and specialization geared towards
                    delivery of solutions that satisfy our customer expectations
                    focusing on the reciprocal benefits of a long-term relationship.
                    <br />
                    <br />
                    We partner with market leaders such as Oracle and Microsoft
                    to implement and customize best of breed applications
                    to the specific needs of our clients.
                    Our objective is to provide our clients smart solutions
                    and meticulous implementation, actionable advice and
                    best practices to ensure they reach their business goals
                    through successful, on-time and cost-effective project implementation.</p>} />

                <Grid container justifyContent="flex-start" alignItems="flex-start">
                    <Grid item xs={12} sm={4}>
                        <TextBox title={<h2>Digital Banking Services</h2>} text="Our Past Experience Our staff has worked with…" image={logo} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title={<h2>Flexcube Implementation</h2>} text="Our Past Experience Our staff has worked with…" image={logo} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title={<h2>AI/ML</h2>} text="Our Past Experience Our staff has worked with…" image={logo} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title={<h2>Advisory Services</h2>} text="Our Past Experience Our staff has worked with…" image={logo} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title={<h2>Software/Application Development</h2>} text="Our Past Experience Our staff has worked with…" image={logo} />
                    </Grid>
                </Grid>
            </>
        } />

    )
}

export default Services