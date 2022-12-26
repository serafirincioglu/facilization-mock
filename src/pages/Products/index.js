import React from 'react'
import { Grid } from '@mui/material'
import TextBox from '../../components/GlobalComponents/TextBox';
import PageWrapper from '../../components/GlobalComponents/PageWrapper';
import logo from '../../assests/f-analytics-logo.png'
import faciliLogo from '../../assests/facili-logo.png'

function Products() {
    return (
        <PageWrapper children={
            <>
                <TextBox title={<h2>F-Analytics Basel</h2>} text="F-Analytics is a successful line of applications developed by Facilization and currently used by some of the major banks in Albania and other financial institutions to address risks and compliance needs in the local banking market." />

                <Grid container justifyContent="flex-start" alignItems="flex-start">
                    <Grid item xs={12} sm={4}>
                        <TextBox title={<h2>F-Analytics IFRS9</h2>} text="F-Analytics Basel offers a complete solution that automates the…" image={logo} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title={<h2>F-Analytics FATCA</h2>} text="F-Analytics Basel offers a complete solution that automates the…" image={logo} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title={<h2>F-Analytics OREM</h2>} text="F-Analytics Basel offers a complete solution that automates the…" image={logo} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title={<h2>F-Analytics Basel</h2>} text="F-Analytics Basel offers a complete solution that automates the…" image={logo} />
                    </Grid>
                </Grid>

                <TextBox title={<h2>Facili-Line</h2>} text="Our “Facili” product line, developed by Facilization and launched in May 2010, has been very successful. Currently licensed and implemented in some major banks in Albania and another bank in Tajikistan, these software packages include FaciliLegal, FaciliConnect and FaciliCom and have been successfully benefiting banking institutions in addressing various business units needs in the areas of legal, hard & soft collection, information and transaction processing with third parties, and massive communication in the local market." />

                <Grid container justifyContent="flex-start" alignItems="flex-start">
                    <Grid item xs={12} sm={4}>
                        <TextBox title={<h2>FaciliLegal</h2>} text="F-Analytics Basel offers a complete solution that automates the…" image={faciliLogo} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title={<h2>FaciliConnect</h2>} text="F-Analytics Basel offers a complete solution that automates the…" image={faciliLogo} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title={<h2>FaciliCom</h2>} text="F-Analytics Basel offers a complete solution that automates the…" image={faciliLogo} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title={<h2>FaciliCollect</h2>} text="F-Analytics Basel offers a complete solution that automates the…" image={faciliLogo} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextBox title={<h2>FaciliFactor</h2>} text="F-Analytics Basel offers a complete solution that automates the…" image={faciliLogo} />
                    </Grid>
                </Grid>
            </>
        } />


    )
}

export default Products