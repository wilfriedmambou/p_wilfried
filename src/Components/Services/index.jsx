import React from 'react'
import service1 from '../../img/services/s1.png'
import service2 from '../../img/services/s2.png'
import service3 from '../../img/services/s3.png'
import service4 from '../../img/services/s4.png'

export default function index() {
    return (<section className="features_area">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 text-center">
					<div className="main_title">
						<h2>service offers </h2>
						<p>
							Is give may shall likeness made yielding spirit a itself togeth created 
							after sea <br/> is in beast beginning signs open god you're gathering ithe
						</p>
					</div>
				</div>
			</div>
			<div className="row feature_inner">
				<div className="col-lg-3 col-md-6">
					<div className="feature_item">
						<img src={service1} alt=""/>
						<h4>Wp developing</h4>
						<p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="feature_item">
						<img src={service2} alt=""/>
						<h4>UI/ux design</h4>
						<p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="feature_item">
						<img src={service3} alt=""/>
						<h4>Web design</h4>
						<p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="feature_item">
						<img src={service4} alt=""/>
						<h4>seo optimize</h4>
						<p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
					</div>  </div>
			</div>
		</div>
	</section>
      
    )
}
