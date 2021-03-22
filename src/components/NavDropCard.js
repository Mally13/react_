import React from   "react";
import iata from './Certify/iata.pdf'

const  NavDropCard=()=>(
    <div   className="shadow h-auto w-56  absolute">
        <ul className="nav-item dropdown text-left">
            <li className="dropdown-item" >
                Sign up
            </li>
            <li  className="dropdown-item" >
                Log in
            </li>
            <hr/>
            <li className="dropdown-item nav-item dropdown d-none d-sm-none d-md-none d-xl-block d-lg-block ">
                        <a className="nav-link dropdown-toggle" href="javascript:void(0);" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Who We Are
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/AboutUs">About Us</a>
                            <a className="dropdown-item" href="/customer-support">Customer Support</a>
                            <a className="dropdown-item" href="/blog">Blog</a>
                            <a className="dropdown-item" href="/Sitemap">Sitemap</a>

                        </div>
                    </li>
                    <li className="dropdown-item    nav-item dropdown  d-none d-sm-none d-md-none d-xl-block d-lg-block ">
                        <a className="nav-link dropdown-toggle" href="javascript:void(0);" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Support
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/FAQ">FAQ</a>
                            <a className="dropdown-item" href="/PrivacyPolicy">Privacy Policy</a>
                            <a className="dropdown-item" href="/TermsAndConditions">Terms &amp; Condtions</a>

                        </div>
                    </li>
                    <li className=" dropdown-item nav-item dropdown  d-none d-sm-none d-md-none d-xl-block d-lg-block ">
                        <a className="nav-link dropdown-toggle" href="javascript:void(0);" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Important Information
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" target="_blank" href="/Certify/ATOL-Certificate.pdf">ATOL Certificate</a>
                            <a className="dropdown-item" target="_blank" href={iata}>IATA Certificate</a>
                            <a className="dropdown-item" target="_blank" href="/Certify/ABTA-Certificate.pdf">ABTA Certificate</a>
                            <a rel="nofollow" className="dropdown-item" target="_blank" href="https://www.gov.uk/foreign-travel-advice">
                                Government Travel Advice</a>
                                <a className="dropdown-item" href="/Home/cookiespolicy">Cookies Policy</a>
                        </div>
                    </li>
        </ul>
    </div>
);
export  default NavDropCard;