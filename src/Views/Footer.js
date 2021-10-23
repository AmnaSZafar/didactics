import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <div>
            {/* ======= Footer ======= */}
            <footer id="footer">
                <div className="footer-newsletter">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h4>Join Our Newsletter</h4>
                        <p>Never miss a thing that Didactics is doing by joining our newsletter to get regular updates from us.</p>
                        <form action method="post">
                        <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                        </form>
                    </div>
                    </div>
                </div>
                </div>
                <div className="footer-top">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4 col-md-6 footer-contact">
                        <h3>Didactics</h3>
                        <p>
                        Model Town,<br />
                        Lahore,<br />
                        Pakistan<br /><br />
                        <strong>Phone:</strong> +923324079262<br />
                        <strong>Email:</strong> azlan@syntics.co<br />
                        </p>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                        <li><i className="bx bx-chevron-right" /> <Link to="/">Home</Link></li>
                        <li><i className="bx bx-chevron-right" /> <Link to="/main/faq">FAQ</Link></li>
                       
                        </ul>
                    </div>
                {/*}
                    <div className="col-lg-4 col-md-6 footer-links">
                        <h4>Our Social Networks</h4>
                        <p>Follow us to keep up to date with everything we are working on.</p>
                        <div className="social-links mt-3">
                        <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                        </div>
                    </div>
    */}
                    </div>
                </div>
                </div>
                <div className="container py-4">
                <div className="copyright">
                    © Copyright <strong><span>Didactics</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    {/* All the links in the footer should remain intact. */}
                    {/* You can delete the links only if you purchased the pro version. */}
                    {/* Licensing information: https://bootstrapmade.com/license/ */}
                    {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-bootstrap-app-landing-page-template/ */}
                    Designed by <a href = "https://syntics.co" style = {{textDecoration : "none"}}>Syntics.co</a>
                </div>
                </div>
            </footer>{/* End Footer */}
        </div>
    )
}

export default Footer
