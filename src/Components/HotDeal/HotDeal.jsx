import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HotDeal.css'

function HotDeal() {
    const[days,setDays] = useState();
	const[hours,setHours] = useState();
	const[seconds,setSeconds] = useState();
	const[minutes,setMinutes] = useState();

	let interval;
	const deadline = "April, 31, 2023";

	const countDown = () => {
	const time = Date.parse(deadline) - Date.now();
	setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => countDown(deadline), 1000);

    return () => clearInterval(interval);
  }, []);


	

  return (
    <>
    <div id="hot-deal" className="section">
			
			<div className="container">
				
				<div className="hot-deal-row">
                    <figure className='hot-deal-img'>
                        <img src='./photos/hotdeal.png' alt='product'/>
                    </figure>
					<div className="col-md-12">
						<div className="hot-deal">
							<ul className="hot-deal-countdown d-flex align-items-center gap-4">
								<li>
									<div>
										<h3>{days}</h3>
										<span>Days</span>
									</div>
								</li>
								<li>
									<div>
										<h3>{hours}</h3>
										<span>Hours</span>
									</div>
								</li>
								<li>
									<div>
										<h3>{minutes}</h3>
										<span>Mins</span>
									</div>
								</li>
								<li>
									<div>
										<h3>{seconds}</h3>
										<span>Secs</span>
									</div>
								</li>
							</ul>
							<h2 className="text-uppercase">hot deal this week</h2>
							<p>New Collection Up to 50% OFF</p>
							<Link to='/shop'>
							<button className="hotdeal-btn" href="#">Shop now</button>
							</Link>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
		
        </>
  )
}

export default HotDeal