import React from 'react'
import './style.css';
import TextBox from '../../components/GlobalComponents/TextBox'
import { Grid } from '@mui/material';
import PageWrapper from '../../components/GlobalComponents/PageWrapper';

let news = [
    <TextBox news={true} title="Fall / Winter Must Read List for Beginner Programmers"
        text="October 2020 - We asked our Head of Software Development and avid reader, Endri Gjino, to recommend some books that would be useful to a software developer that is just starting out their careers. With a great disposition and after choosing what he thinks will be the most helpful books…"
        image="https://www.facilization.com/wp-content/uploads/2020/10/Programmers-150x150.png"
    />,

    <TextBox news={true} title="Our Head of HR speaks about our challenges during the pandemic"
        text="Our Head of Human Resources, Angelika Xhelili, tells how Covid-19 affected our business practices, what were the top challenges we faced and what new practice we'll keep in the &quot;new normal&quot;. &quot;Despite all the challenges, our performance did not decrease & recruitment process continues&quot; , says Angelika. Read her interview..."
        image="https://www.facilization.com/wp-content/uploads/2020/10/A.-Xh.-150x150.jpg"
    />,

    <TextBox news={true} title="Facilization Partners With Creatio (formerly bpm’online)"
        text="April / 2020 Facilization Partners With Creatio (formerly bpm’online) Facilization is proud to announce their partnership with Creatio (formerly bpm’online) to provide businesses with an intelligent BPM platform with a unified CRM to help them efficiently deploy and transform their internal processes. Creatio has been named a proven industry leader…."

    />,
    <TextBox news={true} title="Facilization organizes staff retreat in Struga, Macedonia!"
        text="Struga, September 2019 - With a &quot; work hard and play hard&quot; mindset, all of the Facilization team left last weekend for a a staff retreat in Struga, a city located not far away from Albania and laying at the shore of lake Ohrid. The retreat was an opportunity for our…"
        image="https://www.facilization.com/wp-content/uploads/2019/10/1-150x150.jpg"
    />
];

function News() {
    return (

        <PageWrapper children={
            <>
                <TextBox title="Fall/Winter Must Read List for Beginner Programmers" />
                <Grid container justifyContent="space-between" alignItems="flex-start">
                    {news.map((item, index) => {
                        return <Grid key={index} item xs={12} sm={6}>
                            {item}
                        </Grid>
                    })}
                </Grid>
            </>
        } />

    )
}

export default News