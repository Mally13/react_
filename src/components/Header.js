import React, { Component } from 'react';
import Signin_up from './Signin_up'
import './Header.css';

class Header extends Component {
    constructor(props){
        super(props);
        
    }
componentDidMount() {
window.addEventListener("scroll", this.handleScroll);
}
componentWillUnmount() {
   window.removeEventListener('scroll',this.handleScroll);
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
    <div className="container-fluid pad-lr30 pad-lr30-m">
        <nav className="navbar navbar-expand-lg mb-2">
            <a className="logo navbar-brand" href="/">
                <img src="/images/logo-blue1.png" className="img-fluid desklogo"/>
                <img src="/images/logo-mobile.png" className="mob-logo img-fluid"/>

            </a>

            <div className="call-now-m2 d-block d-xl-none d-lg-none top-coc768">
                <span> <a href="tel:0207 612 0500">  <img src="/images/call-m.png" /> </a></span>
                <span><a href="/customer-support"><img src="/images/support-m.png" /> </a></span>

            </div>
            <button className="navbar-toggler close-menu-hide" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="mobileMenu"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="mob-show-menu">
                    <div className="float-left">
                        Menu
                    </div>
                    <div className="float-right close-menu">
                        <span className="close-btn-icon close-menu"></span>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="stick-srch"></div>



            <ul className="navbar-nav ml-auto">
                    <li className="nav-item d-sm-block d-xl-block d-lg-block" >

<ul className="nav navbar-nav navbar-right" style={{display:"block"}}>

                        <li>
                            <div className="log-toggle sng-btn">
                                <p className="ls_desk">Login/Signup</p>
                                <span className="text_sign d-none d-sm-none d-lg-block">
                                    <span className="sign-icon"></span>
                                    Log In
                                    <span id="sign">
                                        <i className="fa fa-angle-down bar-ioc"></i>
                                    </span>
                                </span>
                            </div>
                        </li>
                </ul>
               <Signin_up/>
                
                
                <div className="login_top_open" id="login_top_open1">
                    <div id="forgot" className="log_box_top" style={{display:"none"}}>
                        <div id="fb-root"></div>
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" id="txtforgotemail" onchange="checkmail2(this.value);" spellcheck="false"/>
                        <div className="clearfix"></div>
                        <div style={{color:"red"}} id="phnn"></div>
                        <input type="button" className="btn_yellow" value="Back" onClick="showuser('Login')" style={{width:"48%"}}/>
                        <input type="button" className="btn_yellow pull-right" value="Submit" onClick="CheckForgot()" style={{width:"48%"}}/>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="login_top_open" id="myaccount_open">
                    <div id="logindata" className="menu_box_top" style={{display:"block"}}>
                        <ul className="">
                            <li><a href="/common/myprofile">My Profile</a></li>
                            <li><a href="/common/myprofile">My Bookings</a></li>
                            <li><a href="/reviews">Reviews</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a onClick="logout()">Sign out</a></li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                </div>
                </li>

                    <li className="nav-item d-none d-sm-none d-md-none d-xl-block d-lg-block">
                    <div className="customer-support-top">
                        <a href="/customer-support">
                            <img src="/images/Customer-Support-top.png" />
                            <span>Customer support </span>
                        </a>

                    </div>
                </li>
                    <li className="nav-item dropdown d-block d-xl-none d-lg-none">
                   


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
                            <a className="dropdown-item" target="_blank" href="/Certify/ESTA-Fact-Sheet.pdf">ESTA Fact Sheet</a>
                            <a className="dropdown-item" target="_blank" href="/Certify/ATOL-Certificate.pdf">ATOL Certificate</a>
                            <a className="dropdown-item" target="_blank" href="/Certify/IATA.pdf">IATA Certificate</a>
                            <a className="dropdown-item" target="_blank" href="/Certify/ABTA-Certificate.pdf">ABTA Certificate</a>
                            <a rel="nofollow" className="dropdown-item" target="_blank" href="https://www.gov.uk/foreign-travel-advice">
                                Government Travel Advice</a>
                                <a className="dropdown-item" href="/Home/cookiespolicy">Cookies Policy</a>
                        </div>
                    </li>

                    <li className="nav-item d-none d-sm-none d-md-none d-xl-block d-lg-block"> <div className="topSearch"></div> </li>

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
