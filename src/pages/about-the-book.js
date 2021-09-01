import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/oddtwin.jpg'
import Book2 from '../../static/books/odd-twins-2.png'



const ATB = (props)=>{

    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'randy-caparco',
	  config: { identifier:  12, slug}
    }
      

	return (
		<>
		 	<Layout>
		        <Helmet title="About the Book | Randy Caparco" />
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`The Odd Twins`,
                                    spanFirst:``,
                                    imgSrc: Book1,
                                    id:'',
                                    content:
                                    `
                                        <p>Life is full of mysteries, and we limit our thoughts to what we believe sounds right and reasonable. Our minds control our lives based on our past experiences, and so our ability to expand is limited. New incoming information is handled based on the past, and so we constantly live in the past.

                                        This writing will take you beyond what you believe and allow you to experience an event that seems so unbelievable that it will have you researching to find out if it is possible.

                                        The characters are depicted in such a way that makes them bring this event to real life. They are believable, and as the events unfold, it will be mind-boggling. It will expand your ability to allow for the possibility of accepting new information and possibilities.

                                        This writing depicts a tale of woe and the trauma that leads to an unbelievable conclusion that will leave the reader with many wonders and thoughts.
                                        </p>
                                    `,

                                    ebooks:{
                                        stratton:'#',
                                        barnes:'https://www.barnesandnoble.com/w/the-odd-twins-randy-caparco/1125378325?ean=9781648954139',
                                        amazon:'https://www.amazon.com/Odd-Twins-Randy-Caparco-ebook/dp/B096L97CDS/ref=sr_1_1?dchild=1&keywords=9781648954139&qid=1623260598&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Odd-Twins-Randy-Caparco/dp/164895412X/ref=sr_1_1?keywords=9781648954122&qid=1623260602&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/the-odd-twins-randy-caparco/1125378325?ean=9781648954122',
                                        booksamillion:'https://www.booksamillion.com/p/Odd-Twins/Randy-Caparco/9781648954122?id=8255501074287#',
                                    }
                                }} 
                            />

                            <BookInfo
                                data={{
                                    title:`The Odd Twins II`,
                                    spanFirst:``,
                                    imgSrc: Book2,
                                    id:'',
                                    content:
                                    `
                                        <p>
                                            Life is full of mysteries, and we limit our thoughts to what we believe sounds right and reasonable. Our minds control our lives based on our past experiences, and so our ability to expand is limited. New incoming information is handled based on the past, and so we constantly live in the past.
                                        
                                            This writing will take you beyond what you believe and allow you to experience an event that seems so unbelievable that it will have you researching to find out if it is possible.
                                        
                                            The characters are depicted in such a way that makes them bring this event to real life. They are believable, and as the events unfold, it will be mind-boggling. It will expand your ability to allow for the possibility of accepting new information and possibilities.
                                        
                                            This writing depicts a tale of woe and the trauma that leads to an unbelievable conclusion that will leave the reader with many wonders and thoughts.
                                        </p>
                                    `,

                                    ebooks:{
                                        stratton:'#',
                                        barnes:'https://www.barnesandnoble.com/w/the-odd-twins-ii-randy-caparco/1139857155?ean=9781648954283',
                                        amazon:'https://www.amazon.com/Odd-Twins-II-Randy-Caparco-ebook/dp/B09B81M5NP/ref=sr_1_1?dchild=1&keywords=9781648954283&qid=1630457557&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Odd-Twins-II-Randy-Caparco/dp/1648954278/ref=sr_1_1?keywords=9781648954276&qid=1630457582&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/the-odd-twins-ii-randy-caparco/1139857155?ean=9781648954276',
                                        booksamillion:'https://www.booksamillion.com/p/Odd-Twins-II/Randy-Caparco/9781648954276?id=8258036461372',
                                    }
                                }} 
                            />

                            <div className="commentSection">
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;