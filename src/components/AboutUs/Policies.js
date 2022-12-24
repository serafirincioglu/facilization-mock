import React from 'react'
import TextBox from '../GlobalComponents/TextBox'

function Policies() {

    let policiesText = (
        <article>
            <p>Facilization is committed to compliance with national and international data protection laws. Data protection is the foundation of trustworthy business relationships and the reputation of Facilization as an attractive employer.\nThese policies ensure an adequate level of data protection compliant to the European Union Data Protection Directive, the General Data Protection Regulation (GDPR), the Albanian national laws for Data Protection and the internationally accepted data privacy principles.</p>
            <br />
            <p>The policies below intend to provide you with all the relevant information in relation to the process of collection and processing of personal data at Facilization. They address how we collect and use personal data, what is their retention period, what happens with these data when this retention period ends as well as how we protect them. These policies apply to all offices and companies of Facilization and their employees.</p>
        </article>
    )


    return (
        <div><TextBox title="Policies" text={policiesText} /></div>
    )
}

export default Policies