import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/dummy.png'

const ATB = (props)=>{
	
	return (
		<> 
		 	<Layout>
		        <Helmet title="About the Author | Randy Caparco" />
		 		<Nav pathExt={props.path}/>

                <Banner 
                    spanFirst={`About The`} 
                    contextHeading={`Author`}/>
                
		 		<div className="container">
				    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img alt="Randy Caparco" src={AuthorImg} />
                            </div>

                            {/* <div className="heading-quote">
                                <h4>
                                  “When you hold on long enough, love will find a way to make it work somehow”.
                                </h4>
                                <span className="ata-span-fx">
                                    author quote
                                </span>
                            </div> */}
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            Randy Caparco, author, holds a master’s degree from CW Post College. He has been a law enforcement officer for a period of not less than thirty years. Today he is retired from his last law enforcement position with the state of New York. He is an enrolled agent authorized to practice before the IRS and has an accounting firm located in Suffolk County, New York.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Randy Caparco</span>
                                </span>
                            </p>
                            
                        </article>
                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;
