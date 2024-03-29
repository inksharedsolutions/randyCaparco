import React from 'react'
import Logo1 from '../../static/logo/amazon.png'
import Logo2 from '../../static/logo/bam.png'
import Logo3 from '../../static/logo/Barnes-and-noble-booksellers-logo.png'
import Logo4 from '../../static/logo/stratton-logo.png'

const MidMain = ()=>{
    return(
        <>
            <section className="mid-main">
                <div className="container-gt separator-line">
                    <h1>Featured</h1>
                    <p className="middle-params">
                        Randy Caparco has been featured numerous times on...
                    </p>

                    <div className="grid-template-four-col" id="logos-col">
                        <li>
                          <img alt="Amazon logo" src={Logo1}/>
                        </li>

                        <li>
                            <img alt="Books A Million logo" src={Logo2}/>  
                        </li>

                        <li>
                            <img alt="Barnes &amp; Noble logo" src={Logo3}/>
                        </li>

                        <li>
                            <img alt="Stratton Press logo" src={Logo4}/>
                        </li>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MidMain;