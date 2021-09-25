import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <div>   
               
            <header id="header" className="fixed-top">
            <div>
                <Navbar bg="white" expand="lg" className="navbar" id="navbar">
                    <Container>
                        <Navbar.Brand>
                            <div className="logo">
                                <h1><a href="/">Logistics</a></h1>
                                {/* Uncomment below if you prefer to use an image logo */}
                                {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-5">
                            <Nav.Link className="nav-link scrollto active" href="/home">Home</Nav.Link>
                            <Nav.Link className="nav-link scrollto" href="/main/app-features">App Features</Nav.Link>
                            <Nav.Link className="nav-link scrollto" href="/main/details">Details</Nav.Link>
                            <Nav.Link className="nav-link scrollto" href="/main/gallery">Gallery</Nav.Link>
                            <Nav.Link className="nav-link scrollto" href="/main/testimonial">Testimonials</Nav.Link>
                            <Nav.Link className="nav-link scrollto" href="/main/pricing">Pricing</Nav.Link>
                            <Nav.Link className="nav-link scrollto" href="/main/faq">F.A.Q</Nav.Link>
                            
                            <NavDropdown title="Login" id="basic-nav-dropdown">
                            <NavDropdown.Item className="nav-link" href="/main/login-auth-student">Login For Students</NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" href="/main/login-auth-teacher" >Login For Teachers</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Registration Forms" id="basic-nav-dropdown">
                            <NavDropdown.Item className="nav-link" href="/main/registration">Admission Form</NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" href="/main/teacher-registration">Teacher Registration Form</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link className="nav-link scrollto" href="/main/contact">Contact Us</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> 
            </div>
            
                {/* <div className="container d-flex align-items-center justify-content-between">
                <div className="logo">
                    <h1><a href="index.html">Logistics</a></h1>
                </div>
                <nav id="navbar" className="navbar">
                    <ul>
                    <li><Link className="nav-link scrollto active" to = "/home">Home</Link></li>
                    <li><Link className="nav-link scrollto" to = "/main/app-features">App Features</Link></li>
                    <li><Link className="nav-link scrollto" to = "/main/details">Details</Link></li>
                    <li><Link className="nav-link scrollto" to = "/main/gallery">Gallery</Link></li>
                    <li><Link className="nav-link scrollto" to = "/main/testimonial">Testimonials</Link></li>
                    <li><Link className="nav-link scrollto" to = "/main/pricing">Pricing</Link></li>
                    <li><Link className="nav-link scrollto" to = "/main/faq">F.A.Q</Link></li>
                    <li class="dropdown"><a href="#"><span>Login</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                    <li className="nav-item">
                    <Link className="nav-link" to="/main/login-auth-student" >Login For Students</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/main/login-auth-teacher" >Login For Teachers</Link>
                    </li>
                    </ul>
                    </li>
                    <li class="dropdown"><a href="#"><span>Registration Forms</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                    <li className="nav-item">
                    <Link className="nav-link scrollto" to = "/main/registration">Admission Form</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link scrollto" to = "/main/teacher-registration">Teacher Registration Form</Link>
                    </li>
                    </ul>
                    </li>
                    <li><Link className="nav-link scrollto" to="/main/contact" >Contact Us</Link></li>
                    
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                </nav>
                
                </div> */}
            </header>
        </div>
    )
}

export default Header
