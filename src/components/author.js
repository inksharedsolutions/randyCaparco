import React from 'react'
import AuthorImg from '../../static/author/dummy.png'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                     <div className="grid-child" id="author-contents">

                        <p>
                        Randy Caparco, author, holds a master’s degree from CW Post College. He has been a law enforcement officer for a period of not less than thirty years. Today he is retired from his last law enforcement position with the state of New York. 
                        He is an enrolled agent authorized to practice before the IRS and has an accounting firm located in Suffolk County, New York.
                        </p>

                        <h1 className="author-name-tag">
                            <span>&nbsp;Randy&nbsp;</span>
                            <span>Caparco</span>
                        </h1>
                        
                        <span className="author-tagline">Author & Writer</span>

                     </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg}/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;
