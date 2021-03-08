import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';
class Hotels extends Component {
    render() {
        return (
            <div>
                <section id="engine" className="home-middle">
<div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">

<div className="main-banner bg-mob-top-main" style={{width:"100%"}}>

<img src="images/main-banner-bg.jpg" className="img-fluid bg-img-non-mob bg-mob-top-main" style={{width:"100%", height:"655px"}}/>
</div>

<form method="post" action="/Flight/SearchEngineFlight">
<div className="d-flex justify-content-center serch-engine myDiv holiday-serch" id="search">
<div className="container">
    <div className="d-flex justify-content-center">
    </div>

    <div className="row">

 <div className="container">
                        <div className="wigarde">
                        <div className="row">
                                <div  className="hotel-form-1">
                                <div className="destname">
                                                <label for="city" className="rmove-1">
                                                    <span>Going To</span>
                                                    <input readonly value="Rome"/>
                                                    <p>
                                                        Italy
                                                    </p>
                                                </label>
                                            </div>
                                </div>
                                <div  className="hotel-form-2">
                                <div className="row">
                                                <div className="date-1">
                                                    <div className="calender">
                                                        <label for="Depart Date">
                                                            <span>Check-in Date <i className="fa fa-angle-down"></i></span>
                                                            <strong>Sat 01</strong>
                                                            <p>
                                                                Febraury 2020
                                                            </p>
                                                        </label>
                                                    </div>
                                                </div>
                                                
                                                    <b> _</b>
                                                </div>
                                                <div className="date-2">
                                                    <div className="calender-1">
                                                        <label for="Depart Date">
                                                            <span>Check-out Date<i className="fa fa-angle-down"></i></span>
                                                            <strong id="input-start-2">Sat 01</strong>
                                                            <p>
                                                                Febraury 2020
                                                            </p>
                                                        </label>
                                                    </div>
                                                
                                            </div>

                                </div>
                                <div className="hotel-form-3">
                                <div className="traveller">
                                                <label for="Depart Date">
                                                    <span>Rooms & Guests<i className="fa fa-angle-down"></i></span>
                                                    <input readonly value="2 Room"/>
                                                    <p>
                                                        2 Guests
                                                    </p>
                                                </label>
                                            </div>
                                </div>
                                <div className="hotel-form-4">
                                    <input className="serch-botton" type="submit" /*onClick={searchReq(Event)}*/ value/>
                                    <input type="hidden" name="hdnSearchRequest" id="hdnSearchRequest"/> 
                                </div>
                                <div className="travlerr-data pop-size" id="DivhotelPopData" style={{display:"none"}}>
                                        <div className="mob-show">
                                            <div className="float-left">
                                                Guest & Room
                                            </div>
                                            <div className="float-right">
                                                <span className="close-btn-icon close-mob"></span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="hotl-room">
                                                    <div className="room-1">
                                                        <span>ROOM 1</span>
                                                        <p>Adults (Over 12 Years)</p>
                                                        <ul>
                                                            <li>0</li>
                                                            <li className="active">1</li>
                                                            <li>2</li>
                                                            <li>3</li>
                                                            <li>4</li>
                                                            <li>5</li>
                                                            <li>6</li>
                                                            <li>7</li>
                                                            <li>8</li>
                                                            <li>9</li>
                                                        </ul>
                                                        <ul>
                                                            <li>0</li>
                                                            <li className="active">1</li>
                                                            <li>2</li>
                                                            <li>3</li>
                                                            <li>4</li>
                                                            <li>5</li>
                                                            <li>6</li>
                                                            <li>7</li>
                                                            <li>8</li>
                                                        </ul>
                                                    </div>
                                                    <div className="float-left txt-edit">Edit</div>
                                                    <div className="float-right txt-remove">Remove</div>
                                                    <div className="clearfix"></div>
                                                    <hr/>
                                                    <div className="room-1">
                                                        <span>ROOM 2</span>
                                                        <p>Adults (Over 12 Years)</p>
                                                        <ul>
                                                            <li>0</li>
                                                            <li className="active">1</li>
                                                            <li>2</li>
                                                            <li>3</li>
                                                            <li>4</li>
                                                            <li>5</li>
                                                            <li>6</li>
                                                            <li>7</li>
                                                            <li>8</li>
                                                            <li>9</li>
                                                        </ul>
                                                        <p>Children (Age 12 Years and below)</p>
                                                        <ul>
                                                            <li>0</li>
                                                            <li className="active">1</li>
                                                            <li>2</li>
                                                            <li>3</li>
                                                            <li>4</li>
                                                            <li>5</li>
                                                            <li>6</li>
                                                            <li>7</li>
                                                            <li>8</li>
                                                        </ul>
                                                    </div>
                                                    <div className="float-left txt-edit">Edit</div>
                                                    <div className="float-right txt-remove">Remove</div>
                                                    <div className="clearfix"></div>
                                                    <div className="d-flax justify-content-right">
                                                        <button className="add-btn float-right mt-3">+ Add Another Room</button>
                                                        <div className="clearfix"></div>
                                                        <button className="apply-btn pad-1 float-right">Apply</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                        </div>
                </div>

    </div>
</div>
</div>
<input name="__RequestVerificationToken" type="hidden" value="CfDJ8CYv6_8YqkxPqsw2-T5-nrYODUQBailW43NxjcAn0PD0mh9W05ca5DYG_GDl080GXt1g1-iWlUOU9U7yHSolet9Rb4HpHXnWHwkas6kcjTSiJI4JK8UbNLpr8UWPcKNfIXaMZMly-Si_vxZ7bWAAUrQ"/>
</form>

<script src="js/autocomplete_v%3DBCkDTvHh0zwR_AEikGCf9WX408wPMeU9JAhNYp26evA.js"></script>


</div>
</section>

<section className="recent-back-search">
<div className="container flight-bottom-img">
<div className="trust-feefo-slider justify-content-start">
    <div className=" col-lg-4 col-sm-12">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <a rel="nofollow" href="https://uk.trustpilot.com/review/www.Fybomidetravel.com" target="_blank"> <img src="images/ct-tp.png"/></a>
                </div>
                <div className="carousel-item">
                    <a rel="nofollow" href="https://www.feefo.com/en-gb/reviews/Fybomide-travel?displayFeedbackType=BOTH&amp;timeFrame=YEAR" target="_blank"> <img src="images/ct-feefo.png"/></a>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
</div>

</div>

</section>
<section className="customer-support">
<div className="container">
<div className="customer-support-line support-space">
    <div className="row">
        <div id="customer-support" className="owl-carousel owl-theme pt-3 pb-4 cutomer">
            <div className="item">
                <div className="media">
                    <span className="mr-3 easy-installments-icon"></span>
                    <div className="media-body">
                        <h5 className="mt-0">
                            24/7 Customer Support
                        </h5>
                        Our travel experts provide quality service whenever you need it
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="media">
                    <span className="mr-3 customer-support-icon"></span>
                    <div className="media-body">
                        <h5 className="mt-0"> Price Match Promise</h5>
                        We offer the best rates for your flights around the world
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="media">
                    <span className="mr-3 price-match-icon"></span>
                    <div className="media-body">
                        <h5 className="mt-0">Same Day Cancellation</h5>
                        No hassle, no extra costs. Cancellations made easy.
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="media">
                    <span className="mr-3 free-cancellations-icon"></span>
                    <div className="media-body">
                        <h5 className="mt-0"> Fly Now Pay Later</h5>
                        Budgeting is made easy with our fly now pay later option
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
{/* modal Start */}
<div className="modal fade" id="myModal">
<div className="modal-dialog modal-xl">
    <div className="modal-content">
        <div className="modal-body">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-12 col-12">
                    <p>Why Sign Up for Our Newsletter?</p>
                    <ul>
                        <li>
                            Email-only deals delivered right to you
                        </li>
                        <li>Discounted deals from hundreds of airlines</li>
                        <li>Special promo codes & discounts</li>
                    </ul>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-12 col-12">
                    <img src="images/sound-icon.jpg"/>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                    <p>Get Promo Code and Get up to £15 OFF.</p>
                    <strong>Sign up for Fybomide Travel emails below to reveal a promo code you can use today.</strong>
                    <div className="input-group mt-2">
                        <input type="text" className="form-control" placeholder="Enter your email and get discounted deals"/>
                        <div className="input-group-append">
                            <span className="input-group-text" id="basic-addon2">Sign Up & Get Promo Code!</span>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <hr/>
                </div>
                <div className="col-12">
                    <div className="text-small text-center">Applies to bookings for 3+ travellers.  <strong>Book by 30 Apr, 2020</strong>  <a href>Learn more</a></div>
                </div>
            </div>


        </div>
    </div>
</div>


</div>
{/* modal End*/}
</section>
<section id="cheapflight" className="flight-routes"></section>
            
            </div>

        );
    }
}



export default Hotels;