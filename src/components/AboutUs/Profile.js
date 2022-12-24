import React from 'react'
import TextBox from '../GlobalComponents/TextBox'

function Profile() {

    let profileText = (<article>
        <p>Facilization helps banks and Fintech’s implement, maintain and operate technology solutions. Our clients includes fintech’s, commercial banks and central banks located in UK, Germany, Italy, Lithuania, Malta, Albania, Kosovo, etc. A team of 95+ professionals operating from our offices in Albania and Malta focuses in providing turnkey solutions, leveraging strategic alliances with leading platform vendors such as Oracle, Microsoft, Creatio and others. Facilization has also developed major software applications such as its F-Analytics regtech software, country level credit registry, country level balance of payment automation and reporting.</p>
        <br />
        <p>Since its inception in 2009, Facilization’s motto was to facilitate the modernization of financial institutions. Our focus on customer needs and challenges was the catalyst of our innovation and the driver to develop software products and Cloud solutions. Facilization helps customers shift from a traditional banking model to a digital one, and remain competitive in the constantly changing financial landscape. Our journey continues towards becoming a leading supplier of turnkey solutions for digital banks with a mission to create a strong Albanian brand of software and digital innovation in the financial services marketspace.</p>
    </article>)
    return (
        <div>
            <TextBox title="Profile" text={profileText} />
        </div>
    )
}

export default Profile