import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Social extends Component {
    render() {
        return (
             <>
             <section class="great-deal mt-3">
           <div class="container-mailbox">
        <div class="row">
            <div class="col-lg-6 col-md-6">
                <h3 class="mt-3 text-light"><strong>Get a great deal</strong> on your next holiday  </h3>
                <div class="custom-control custom-checkbox mt-2">
                    <input type="checkbox" class="custom-control-input" id="chk-subscribe" onchange="changeChkSubscribe()"/>
                    <label class="custom-control-label" for="chk-subscribe">
                        By clicking, you agree to receive promotional offers <br/>and discount travel deals from Fybomide Travel.
                    </label>
                </div>
            </div>

            <div class="col-lg-6 col-md-6">
                <div class="input-group">
                    <img src="images/mail-send-ioc.jpg" class="envelope"/>
                    <input type="text" class="form-control" placeholder="Enter Your Email" id="txtEmail"/>
                    <div class="input-group-append">
                        <button type="submit" class="btn btn-black black" id="btnsubscribe"> <span class="arrow-Rit"></span></button>
                    </div>
                </div>

                <div class="alert alert-danger" role="alert" id="div-error-msg" style={{display:"none"}}>

                </div>
                <div class="alert alert-success" role="alert" id="div-success-msg" style={{display:"none"}}>

                </div>
            </div>


        </div>
    </div>
</section>

                <section class="social-ioc">
    <div class="container">
        <div class="d-flex justify-content-center">
            <div class="social" style={{display:"block"}}> <a rel="nofollow" href="https://web.facebook.com/FybomidetravelNG" target="_blank"><i class="fa fa-facebook"></i></a></div>
            <div class="social" style={{display:"block"}}>  <a rel="nofollow" href="https://twitter.com/Fybomidetravel" target="_blank"><i class="fa fa-twitter"></i></a> </div>
            {/* <div class="social" style={{display:"block"}}><a rel="nofollow" href="//www.youtube.com/user/Fybomidetravels" target="_blank"><i class="fa fa-youtube-play"></i></a> </div> */}
            <div class="social" style={{display:"block"}}> <a rel="nofollow" href="https://www.instagram.com/fybomidetravel" target="_blank"><i class="fa fa-instagram"></i></a></div>
            {/* <div class="social" style={{display:"block"}}><a rel="nofollow" href="https://www.linkedin.com/company/Fybomide-travel" target="_blank"><i class="fa fa-linkedin"></i></a> </div> */}
        </div>
    </div>
</section>

<div class="m_footer_nav">
    <div class="d-flex justify-content-between p-3 ">
        <div class="p-2"><i class="fa fa-user-circle"></i> </div>
        <div class="p-2"><i class="fa fa-user-circle"></i> </div>
        <div class="p-2"><i class="fa fa-user-circle"></i> </div>
        <div class="p-2"><i class="fa fa-user-circle"></i> </div>

    </div>


</div>

            </>
        );
    }
}

export default Social;