import React from 'react'
import './footer.css'


export const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='sb__footer section__padding'>
                    <div className='sb__footer-links'>

                        <div className='sb__footer-links_div'>
                            <h4>For business</h4>
                            <a href="/link">
                                <p>Employer</p>
                            </a>
                            <a href="/healthplan">
                                <p>Health plan</p>
                            </a>
                            <a href="/individual">
                                <p>Individual</p>
                            </a>
                        </div>

                        <div className='sb__footer-links_div'>
                            <h4>Resources</h4>
                            <a href="/resource">
                                <p>Resource center</p>
                            </a>
                            <a href="/resource">
                                <p>Testimonial </p>
                            </a>
                            <a href="/resource">
                                <p>STV</p>
                            </a>
                        </div>

                        <div className='sb__footer-links_div'>
                            <h4>Partners</h4>
                            <a href="/employer">
                                <p>Swing tech</p>
                            </a>
                        </div>
                        <div className='sb__footer-links_div'>
                            <h4>Company</h4>
                            <a href="/about">
                                <p>About</p>
                            </a>
                            <a href="/press">
                                <p>Press</p>
                            </a>
                            <a href="/career">
                                <p>Career</p>
                            </a>
                            <a href="/contact">
                                <p>Career</p>
                            </a>
                        </div>

                        <div className='sb__footer-links_div'>
                            <h4>Coming soon on </h4>
                            <div className='socialmedia'>
                                <p> <img src="" alt="" srcset="" /></p>
                                <p> <img src="" alt="" srcset="" /></p>
                                <p> <img src="" alt="" srcset="" /></p>
                                <p> <img src="" alt="" srcset="" /></p>
                            </div>
                        </div>
                    </div>

                    <hr className='jm' />
                    

                    <div className='sb__footer-below'>
                        <div className='sb__footer-copyright'>
                            <p>
                                @{(new Date().getFullYear())} Jonathan. All right reserved.
                            </p>
                        </div>
                        <div className='sb__footer-below-links'>
                            <a href="http://terms"><div><p>Terms & Conditions</p></div></a>
                            <a href="http://terms"><div><p>Privacy</p></div></a>
                            <a href="http://terms"><div><p>Security</p></div></a>
                            <a href="http://terms"><div><p>Cookie Declaration</p></div></a>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
