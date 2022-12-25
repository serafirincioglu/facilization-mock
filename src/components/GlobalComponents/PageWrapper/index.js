import React from 'react'
import './style.css'


function PageWrapper({ children }) {
    return (
        <section className="page_wrapper">
            <div className="page_wrapper-banner"></div>
            <div className="page_wrapper_children">
                {children}
            </div>
        </section>

    )
}

export default PageWrapper