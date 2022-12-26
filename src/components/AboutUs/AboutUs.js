import React from 'react'
import TextBox from '../GlobalComponents/TextBox'

function AboutUsComponent() {

    let text1 = (
        <article>
            <p>Facilization is a fast growing IT services and software business focused in providing full-fledged services in the Banking and Financial Services vertical. Facilization was founded by a team of functionally and technically well-versed experts in 2009 with the objective of pooling their banking and IT-related expertise to provide  superior services and software solutions for the benefit of small to mid-sized local and regional banks.</p>
            <p>We are specialized in implementing and supporting</p>
            <ul>
                <li>Oracle Flexcube, the leading International core banking system.</li>
                <li>Oracle Banking Digital Experience, an Omni-Channel digital banking solution.</li>
                <li>Oracle Primavera, the leading Enterprise Project and Portfolio Management solution.</li>
            </ul>
            <p>We are the 1st Oracle business partner to have obtained the Oracle Flexcube UBS 11 Specialization in Eastern Europe & Commonwealth of Independent States, 3rd in Europe, Middle East and Africa and 5th in the World <a href="/">(Read more)</a>, We upgraded the specialization to the recent release 12 of Oracle Flexcube in November 2016 <a href="/">(Read more)</a>.</p>
            <p>Facilization has very successfully developed its IP software in the banking areas of risk management, regulatory reporting, collection and recovery of non-performing assets, etc. Our F-Analytics suite launched in 2014 is the predominant Basel solution used by banks in Albania, and is currently being extended to support IFRS9 requirements of banks.</p>
            <p>Facilization is operating from its Albanian establishment to provide services to its customers in South East Europe and CIS and from its Maltese establishment to the other EU customers.</p>
            <strong>Facilization is certified on:</strong>
            <ul>
                <li>ISO 9001:2015 for the delivery of “Software Development and Information Technology Services”</li>
                <li>ISO 27001: 2013 for the delivery of “Information System Consulting, System Integration and Software Development Services”</li>
            </ul>
        </article>)

    return (<TextBox title={<h2>About Us</h2>} text={text1} />)
}

export default AboutUsComponent
