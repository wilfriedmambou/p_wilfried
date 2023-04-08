import React from 'react'
import AboutUs from '../Intro/about-us.png'
import WilPP from '../Intro/wil.png'

export default function index() {
    return ( <>

<section className="home_banner_area">
		<div className="banner_inner">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="banner_content">
							<h3 className="text-uppercase">Hell0</h3>
							<h1 className="text-uppercase">I am wilfried Mambou</h1>
							<h5 className="text-uppercase">senior Fullstack developer</h5>
							<div className="d-flex align-items-center">
								<a className="primary_btn" href="#"><span>Hire Me</span></a>
								<a className="primary_btn tr-bg" href="#"><span>Get CV</span></a>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="home_right_img">
							<img className="" src={WilPP} alt=""/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        <div className="about_area section_gap">
		<div className="container">
			<div className="row justify-content-start align-items-center">
				<div className="col-lg-5">
					<div className="about_img">
						<img className="" src={AboutUs} alt=""/>
					</div>
				</div>
             

				<div className="offset-lg-1 col-lg-5">
					<div className="main_title text-left">
						<h2>let’s <br/>
							Introduce about <br/>
							myself</h2>
						<p>
							Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven 
							midst their. Beast creepeth. Fish days.
						</p>
						<p>
							Is give may shall likeness made yielding spirit a itself together created after sea 
							is in beast beginning signs open god you're gathering whose gathered cattle let. 
							Creature whales fruit unto meat the life beginning all in under give two.
						</p>
						<a className="primary_btn" href="#"><span>Download CV</span></a>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
    )
}
