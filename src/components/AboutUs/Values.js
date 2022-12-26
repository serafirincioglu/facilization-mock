import React from 'react'
import TextBox from '../GlobalComponents/TextBox'

function Values() {
    let valuesText = (
        <article>
            <p><strong>Create value for customers. </strong>Maintain a deep understanding of their needs, act as a trusted advisor, honour commitments, and deliver top quality products and service.</p>
            <p><strong>Freedom – </strong>to innovate, create and take initiatives. We believe that honest and ambitions people create outstanding solutions and resolve any problem if provided with an open and healthy environment.  Everyone at Facilization is encouraged to speak their mind, think differently and actively debate, experiment and take ownership and accountability for their work and team results.</p>
            <p><strong>Collaborate and share knowledge – </strong>They are essential to the way we work and grow the knowledge and capabilities of both each individual and our business. They unfold in all our interactions with each other and our customers and help us form a cohesive team that evolves together toward a collective goal.</p>
            <p><strong>Respect each individual – </strong>Foster an open and inclusive environment and provide equal treatment and chances to grow to every single employee.</p>
            <p><strong>Stay lean and hungry for innovation and success – </strong>We believe that there is always more to learn, a better alternative to solve problems, a new technology to enjoy learning. It’s always Day 1.</p>
        </article>
    )
    return (<TextBox title={<h2>Values</h2>} text={valuesText} />)
}

export default Values