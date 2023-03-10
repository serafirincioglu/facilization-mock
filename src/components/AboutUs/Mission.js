import React from 'react'
import TextBox from '../GlobalComponents/TextBox'

function Mission() {
    let missionText = (
        <article>
            <p><strong>Mission</strong></p>
            <p>with you, we work with passion to create and operate technology solutions that facilitate your business success.</p>
            <p><strong>Vision</strong></p>
            <p>To become a leading European supplier of turnkey solutions for digital banks.</p>
        </article>
    )
    return (<TextBox title={<h2>Mission</h2>} text={missionText} />)
}

export default Mission