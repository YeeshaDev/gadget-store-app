import React from 'react'
import {FaEnvelope,FaFacebook,FaTwitter,FaPinterest,FaInstagram} from 'react-icons/fa'
import './Newsletter.css';

function Newsletter() {
  return (
    <div id="newsletter" className="section">

			<div className="container">
				
				<div className="news-row">
					<div className="col-md-12">
						<div className="newsletter">
							<p>Sign Up for the <strong>NEWSLETTER</strong></p>
							<form>
                                <div className='envelope'><FaEnvelope/></div>
								<input className="input" type="email" placeholder="Enter Your Email"/>
								<button className="newsletter-btn"><FaEnvelope/> Subscribe</button>
							</form>
							<ul className="newsletter-follow">
								<li>
									<a href="#"><FaFacebook/></a>
								</li>
								<li>
									<a href="#"><FaTwitter/></a>
								</li>
								<li>
									<a href="#"><FaInstagram/></a>
								</li>
								<li>
									<a href="#"><FaPinterest/></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
  )
}

export default Newsletter