import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faFacebook,faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function index() {
    return (
        <footer className="footer_area">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-12">
					<div className="footer_top flex-column">
						<div className="footer_logo">
							<a href="#">
								WILFRIED
							</a>
							<h4>Follow Me</h4>
						</div>
						<div className="footer_social">
                          
							<a href="#">  <FontAwesomeIcon icon={faLinkedin} /></a>
							<a href="#">  <FontAwesomeIcon icon={faFacebook} /></a>
							<a href="#">  <FontAwesomeIcon icon={faTwitter} /></a>
                            {/* <a href="#">  <FontAwesomeIcon icon={faLinkedin} /></a> */}
						</div>
					</div>
				</div>
			</div>
			<div className="row footer_bottom justify-content-center">
				<p className="col-lg-8 col-sm-12 footer-text">
					
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</p>
			</div>
		</div>
	</footer>
    )
}
