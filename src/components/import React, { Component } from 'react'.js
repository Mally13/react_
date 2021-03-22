import React, { Component } from 'react';
import Signin_up from './Signin_up'
import './Header.css';
import iata from './Certify/iata.pdf'
import $, { event,click } from "jquery";

// import abta from './Certify/iata.pdf'
// import iata from './Certify/iata.pdf'
// import iata from './Certify/iata.pdf'

class Header extends Component {
    constructor(props){
        super(props);
        this.handleSuccessfulAuth=this.handleSuccessfulAuth.bind(this);
        
    }
componentDidMount() {
window.addEventListener("scroll", this.handleScroll);

}
componentWillUnmount() {
   window.removeEventListener('scroll',this.handleScroll);
}
handleSuccessfulAuth(data){
    //todo  update  parent  component
    this.props.history.push("/account-settings");

}
handleScroll=() => {
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
          if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
      } else {
          header.classList.remove("sticky");
      }
  } 

  render() {
    return (
          
        <header className="toppanel" id="myHeader">
    <div class="container-fluid pad-lr30 pad-lr30-m">
        <nav class="navbar navbar-expand-lg mb-2">
            <a class="logo navbar-brand" href>
                <img src="images/logo-blue1.png" class="img-fluid desklogo"/>
                <img src="images/logo-mobile.png" class="mob-logo img-fluid"/>

            </a>

            <div class="call-now-m2 d-block d-xl-none d-lg-none top-coc768">
                <span> <a href="tel:0207 612 0500">  <img src="images/call-m.png"/> </a></span>
                <span><a href="customer-support/"><img src="images/support-m.png"/> </a></span>

            </div>
            <button class="navbar-toggler close-menu-hide" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="mobileMenu"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <div class="mob-show-menu">
                    <div class="float-left">
                        Menu
                    </div>
                    <div class="float-right close-menu">
                        <span class="close-btn-icon close-menu"></span>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="stick-srch"></div>




                <ul class="navbar-nav ml-auto">
                <li class="nav-item d-none d-sm-none d-md-none d-xl-block d-lg-block">
                    <div class="customer-support-top">
                        <a href="customer-support/">
                            <img src="images/customer-support-top.png"/>
                            <span>Customer support </span>
                        </a>

                    </div>
                </li>
            <li className="nav-item d-sm-block d-xl-block d-lg-block" >


            <ul className="nav navbar-nav navbar-right" >

                        <li>
                        
                            <div className="log-toggle sng-btn">
                                <p className="ls_desk">Account</p>
                                <span className="text_sign d-none d-sm-none d-lg-block">
                                    <span className="sign-icon"></span>
                                    Account
                                    <span id="sign">
                                        <i className="fa fa-angle-down bar-ioc"></i>
                                    </span>
                                </span>
                            </div>
                            
                        </li>
                </ul>
                {/* <h1>Status:{this.props.loggedInStatus}</h1> */}
               <Signin_up handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                </li>


                    <li className="nav-item dropdown d-block d-xl-none d-lg-none">
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
                    <li className="nav-item dropdown d-block d-xl-none d-lg-none">
                        <a className="nav-link dropdown-toggle" href="javascript:void(0);" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Support
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/FAQ">FAQ</a>
                            <a className="dropdown-item" href="/PrivacyPolicy">Privacy Policy</a>
                            <a className="dropdown-item" href="/TermsAndConditions">Terms &amp; Condtions</a>

                        </div>
                    </li>
                    <li className="nav-item dropdown d-block d-xl-none d-lg-none">
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

                    <li className="nav-item d-none d-sm-none d-md-none d-xl-block d-lg-block">
                         <div className="topSearch"></div>
                    </li>

                    {/* <li className="nav-item d-none d-sm-none d-md-none d-xl-block d-lg-block">
                        <div className="call-now">
                            <img src="/images/call-ioc.png" />
                            <span>Book Online or Call us 24/7</span>
                            <p><a href="tel:+2349087482421"><h6> +2349087482421</h6></a></p>
                        </div>
                    </li> */}
                </ul>
            </div>
        </nav>
    </div>
</header>

    );
  }
}


export default Header;
