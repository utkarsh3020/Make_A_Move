import { faAngleLeft, faAngleRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'

function Testimonial() {
    useEffect(() => {
        const scriptTag = document.createElement('script');

        scriptTag.src = "assets/js/testimonial.js";
        scriptTag.async = true;

        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        }
    }, []);
  return (
    <div>
        <section id="testim" className="testim">
                <div className="wrap">

                    <span id="right-arrow" className="arrow right fa fa-chevron-right">
                        <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                    <span id="left-arrow" className="arrow left fa fa-chevron-left ">
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </span>
                    <ul id="testim-dots" className="dots">
                        <li className="dot active"></li>
                        <li className="dot"></li>
                        <li className="dot"></li>
                        <li className="dot"></li>
                        <li className="dot"></li>
                    </ul>
                    <div id="testim-content" className="cont">
                        
                        <div className="active">
                            <div className="img">
                                <img src="image/3.avif" alt="" />
							</div>
                            <h2>Lorem P. Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                        </div>

                        <div>
                            <div className="img">
                                <img src="image/4.avif" alt="" />
							</div>
                            <h2>Mr. Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                        </div>

                        <div>
                            <div className="img">
                                <img src="image/6.avif" alt="" />
							</div>
                            <h2>Mr. Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                        </div>

                        <div>
                            <div className="img">
                                <img src="image/8.avif" alt="" />
							</div>
                            <h2>Mr. Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                        </div>
                        
                        <div>
                            <div className="img">
                                <img src="image/2.avif" alt="" />
							</div>
                            <h2>Mr. Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                        </div>

                    </div>

                </div>
        </section>

    </div>
  )
}

export default Testimonial