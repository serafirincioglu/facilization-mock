import { Grid } from '@mui/material';
import React from 'react'
import './style.css';

function TextBox({ title, text, image, news }) {
    return (news ?
        <div className="text__box colored">
            <Grid container rowSpacing={6} justifyContent="space-between" alignItems="flex-start">
                <Grid item xs={12} sm={12} md={image ? 8 : 12}>
                    <div>{title}</div>
                    <div style={{ fontSize: "24px" }}>{text}</div>
                </Grid>
                <Grid item xs={12} sm={12} md={image ? 4 : 0}>
                    {image ? (<img src={image} alt="text__box-img" />) : ""}
                </Grid>
            </Grid>
        </div>
        :
        <div className="text__box colored">
            {image ? (<img src={image} alt="text__box-img" />) : ""}
            <div>{title}</div>
            <div style={{ fontSize: "24px" }}>{text}</div>
        </div>
    )
}

export default TextBox