import React from 'react'
import Avatar from '../../static/logo/avatar.png'

const Rating =(props) =>{
    return(
        <>
            <section>
                <div className="rating-section">
                     <div className="container">
                         <div className="header">TESTIMONIALS</div>
                         <div className="line"></div>
                         <div className="flex">
                            <div className="left">
                                <div className="avatar">
                                <img alt="avatar-img" src={Avatar}/>
                                </div>
                                <div className="card">
                                   <p>
                                        <span>“</span>
                                        A an easy and suspenseful read. Set in 1940's Italy nearing the end of WWII , it gives a look into family life in a difficult time. Filled with  interesting characters, plot twists and excellent use of symbolism and imagery, it is sure to keep you entertained. A good read for anyone   
                                        interested in this time period.   
                                        <span>“</span>
                                    </p>   
                                    <div className="name">Easy and Suspenseful Read For All Book Lovers</div>                               
                                </div>
                              
                            </div>
                            <div className="center">
                            <div className="avatar">
                                <img alt="avatar-img" src={Avatar}/>
                                </div>
                                <div className="card">
                                  <p>
                                        <span>“</span>
                                        I found this book to be a very different book! It kept me in suspense and the writing gave me a good visual of the characters which I like when I read a book. The characters came to life in your imagination! The book was very suspenseful and a bit seductive! I was very engaged in the entire reading of the book! I am looking forward to the second book! I came online to look for book two and realized I never put in a review and I always review books that I like!
                                        <span>“</span>
                                    </p>      

                                      <div className="name">Suspenseful! Easy enjoyable read </div> 
                                </div>
                              
                            </div>
                            <div className="right">
                            <div className="avatar">
                                <img alt="avatar-img" src={Avatar}/>
                                </div>
                                <div className="card">
                                  <p>
                                        <span>“</span>
                                        After reading the 1st chapter in this book i felt like i couldnt put it down. You actually feel like you are in the book when reading. There were so many parts that i could actual visualize and thats what makes this book so much more interesting then any other. It was exhilarating, suspensful and mysterious.If you like books that make you wonder this is a definite read for you! Cant wait to read the sequel.
                                        <span>“</span>
                                    </p>     
                                    <div className="name">Amazing book</div>  
                                </div>
                               
                            </div>
                         </div>

                     </div>
                </div>
            </section>
        </>

    )
}
export default Rating;