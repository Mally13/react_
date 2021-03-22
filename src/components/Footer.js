import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Footer extends Component {

  render() {
    return (
      <>
    <div className="footer-links">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-3 col-md-12 col-sm-12 d-none d-xl-block d-lg-block align-self-center">
                        <img src="images/logo-blue-footer.png" className="img-fluid" alt="logo"/>
                    </div>
                    <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12 align-self-center">
                        <div className="location">
                            <i className="fa fa-map-marker" aria-hidden="true"></i> 10-11 Percy St, Fitzrovia, London W1T 1DN, United Kingdom <span>
                                <a href="tel:+2349087482421" style={{color:"#0d223f !important"}} >
                                    <img src="images/call-ioc.png" className="img-fluid" alt="call"/>+2349087482421
                                </a>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="container">
            <div className="row footer-spacer justify-content-between">
                {/* <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 d-none d-md-block d-xl-block d-lg-block">
                    <div className="heading">Flights</div>
                    <div className="pt-3">
                        <ul>
                            <li><a href="javascript:void(0);">Home</a></li>
                            <li><a href="javascript:void(0);">Flights</a></li>-->
                            <!--<li><a href="javascript:void(0);">Holidays</a></li>
                            <li><a href="javascript:void(0);">Airlines</a></li>
                            <li><a href="javascript:void(0);">Travel Talks</a></li>
                            <li><a href="javascript:void(0);">Special Offers</a></li>
                            <li><a href="javascript:void(0);">Tours</a></li>
                        </ul>
                    </div>
                </div> */}
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 d-none d-md-block d-xl-block d-lg-block">
                    <div className="heading">Important Information</div>
                    <div className="pt-3">
                        <ul>
                            <li><a target="_blank" href="Certify/ESTA-Fact-Sheet.pdf">ESTA Fact Sheet</a></li>
                                <li><a target="_blank" href="Certify/ATOL-Certificate.pdf">ATOL Certificate</a></li>
                                <li><a target="_blank" href="Certify/IATA.pdf">IATA Certificate</a></li>
                                <li><a target="_blank" href="Certify/ABTA-Certificate.pdf">ABTA Certificate</a></li>
                                <li><a rel="nofollow" target="_blank" href="https://www.gov.uk/foreign-travel-advice">Government Travel Advice</a></li>
                                <li><a href="Home/cookiespolicy/">Cookies Policy</a></li>
                            </ul>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 d-none d-md-block d-xl-block d-lg-block">
                    <div className="heading">Who We Are</div>
                    <div className="pt-3">
                        <ul>
                            <li><a href="AboutUs/">About us</a></li>
                            <li><a href="customer-support/">Customer Support</a></li>
<li><a target="_blank" href="https://blog.crystaltravel.co.uk">Blog</a></li>
                             <li><a href="Sitemap/">Sitemap</a></li>
                            
                            
                        </ul>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 d-none d-md-block d-xl-block d-lg-block">
                    <div className="heading">Support</div>
                    <div className="pt-3">
                        <ul>
                            <li><a href="FAQ/">FAQ</a></li>
                            <li><a href="PrivacyPolicy/">Privacy Policy</a></li>
                            <li><a href="TermsAndConditions/">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="client-logo-sec pt-1 pb-1">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <ul>
                        <li><a className="abta"></a></li>
                        <li><a className="iata"></a></li>
                        <li><a className="atol"></a></li>
                        <li><a className="geotrust"></a></li>
                        <li><a className="advantage"></a></li>
                        <li><a className="master-card"></a></li>
                        <li><a className="vvisacard"></a></li>
                        <li><a rel="nofollow" href="//www.dmca.com/Protection/Status.aspx?ID=938a781d-5084-4d36-9b26-1e20c4a7c627" target="_blank" title="DMCA.com Protection Status" className="dmca-badge dmca"> </a></li>
                        <li> <span className="we-accepted"> We Accept</span> </li>
                        <li> <a className="card-accepted"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="copyright">
                            <p className="f10 pt-2 pb-2 mb-0">
                                <b>
                                    © 2020-2021 Moresand Ltd.(Reg No.02114691) T/A CrystalTravel registered in
                                    England and Wales.Head Office, 10-11 Percy St, Fitzrovia, London W1T 1DN, United Kingdom.
                                </b>
                            </p>
                            <p className="f10">
                                Many of the flights and flight-inclusive holidays on this website are financially protected
                                by the ATOL scheme. But ATOL protection does not apply to all holiday and travel services listed on this
                                website. Please ask us to confirm what protection may apply to your booking. If you do not receive an ATOL
                                Certificate then the booking will not be ATOL protected. If you do receive an ATOL Certificate but all the
                                parts of your trip are not listed on it, those parts will not be ATOL protected. If you have booked a
                                flight only where the ticket is not issued immediately, your flight will be protected under our ATOL.
                                Please see our booking conditions for information, or for more information about financial protection and
                                the ATOL Certificate go to <a href="http://www.atol.org.uk/ATOLCertificate" rel="nofollow">www.atol.org.uk/ATOLCertificate</a>
                            </p>
                </div>
            </div>
        </div>
    </div>

      </>
    )
  }
}

export default Footer;