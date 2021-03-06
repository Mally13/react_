import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import './Home.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import  moment  from 'moment';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import $ from 'jquery';
import OriginSuggestions from './OriginSuggestions';
import DestSuggestions from './DestSuggestions';

import 'jquery-ui'
import 'jquery-ui-bundle'
import 'jquery-ui-bundle/jquery-ui.min.css'


const encodedToken = 'YWRtaW46OWYwZDgxYjE3NDIzOTdkNGMxMTNmNDRlMTM2NmE5OGM='; //Buffer.from(token).toString('base64');
const airports_url='https://demo.fybomidetravel.com/fybomide-31353973c9/api/air/search.php'
const search_url = 'https://demo.fybomidetravel.com/fybomide-31353973c9/api/air/flightsearch.php';


class Flights extends Component {
    constructor(props) {
        super(props)
        this.state = {
            originQuery: '',
            destQuery: '',
            results: [],
            originLoaded:false,
            destLoaded:false

            
        }
        this.handleDestChange = this.handleDestChange.bind(this);
        this.handleOriginChange = this.handleOriginChange.bind(this);

        // this.ShowRecentSearch = this.ShowRecentSearch.bind(this);
        // this.resultbyrecentSearch = this.resultbyrecentSearch.bind(this);
        // this.resultbyrecentSearch = this.resultbyrecentSearch.bind(this);

    }
componentDidMount(){
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 50) {
            $('.topSearch').fadeIn();
        } else {
            $('.topSearch').fadeOut();
        }

    
    });
        $('.topSearch').on('click', function () {
            $('#txtOrigin').focus();
    
        });

        $(document).ready(function(){
            $('.owl-carousel').owlCarousel();
          });
        }
        

        getOriginInfo = () => {
            const  AuthString=`Basic ${encodedToken}`
            axios.get(`${airports_url}?search=${this.state.originQuery}`,{'headers':{'Authorization':AuthString}})
              .then(({ data }) => {
                this.setState({
                  originresults: data.data,
                  originLoaded:true,
                  destLoaded:false
                })
              })
          }
          getDestInfo = () => {
            const  AuthString=`Basic ${encodedToken}`
            axios.get(`${airports_url}?search=${this.state.destQuery}`,{'headers':{'Authorization':AuthString}})
              .then(({ data }) => {
                this.setState({
                  destresults: data.data,
                  destLoaded:true,
                  originLoaded:false
                })
              })
          }
        handleOriginChange = () => {
            this.setState({
              originQuery: this.originsearch.value,
              originLoaded:false,
              destLoaded:false
            }, () => {
                if (this.state.originQuery && this.state.originQuery.length > 1) {
                  if (this.state.originQuery.length % 2 === 0) {
                    this.getOriginInfo()
                  }
                }
                  else if (!this.state.originQuery) {
                }
            })
          }
        
        handleDestChange = () => {
            this.setState({
              destQuery: this.destsearch.value,
              destLoaded:false,
              originLoaded:false
            }, () => {
                if (this.state.destQuery && this.state.destQuery.length > 1) {
                  if (this.state.destQuery.length % 2 === 0) {
                    this.getDestInfo()
                  }
                }
                  else if (!this.state.destQuery) {
                }
            })
          }
        
    
    render() {
        return (
            <div>
<section id="engine" className="home-middle">
<div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">

<div className="main-banner bg-mob-top-main" style={{width:"100%"}}>

<img src="images/main-banner-bg.jpg" className="img-fluid bg-img-non-mob bg-mob-top-main" style={{width:"100%", height:"680px"}}/>
</div>

<form method="post" onSubmit={this.flightSearch}>
<div className="d-flex justify-content-center serch-engine myDiv holiday-serch" id="search">
<div className="container">
    <div className="d-flex justify-content-center">
    </div>

    <div className="row">

                <div className="container">
                    <div className="radio-cantrol">
                        <div className="custom-control custom-radio">
                            <input type="radio" id="rdbRoundTrip" name="TripType" className="custom-control-input" checked/>
                            <input type="hidden" id="hdnTripType" name="JourneyType" value/>
                            <label className="custom-control-label" for="rdbRoundTrip"><span>Return</span></label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="rdbOneWay" name="TripType" className="custom-control-input"/>
                            <label className="custom-control-label" for="rdbOneWay"><span> One Way </span></label>
                        </div>
                        {/* <div className="custom-control custom-radio">
                            <input type="radio" id="multiCity" name="TripType" className="custom-control-input"/>
                            <label className="custom-control-label" for="multiCity"><span> Multi City </span></label>
                        </div> */}
                    </div>
                        <div className="wigarde">
                        <form>
                            <div className="flying-from-1">
                                <div className="fly-1">
                                    <div className="destname">
                                        <label for="city">
                                            <span>Flying From</span>
                                            <input type="text" id="txtOrigin" placeholder="City or specific airport" autocomplete="off" onkeypress="return IsStringKey(event)" name="Segments[0].Origin"  ref={input => this.originsearch = input}
                                                onChange={this.handleOriginChange}/>
                                            {this.state.originLoaded &&
                                            <div className="autocomplete" id="divO">
                                            <OriginSuggestions originresults={this.state.originresults} />
                                            </div>}


                                            <p id="pOrigin">
                                            &nbsp;
                                            {/* {this.state.query} */}
                                            </p>
                                            <input type="hidden" id="hdnOriginCity" name="Segments[0].OriginName" value/>
                                            <input type="hidden" id="hdnOriginAirportName" name="Segments[0].oriText" value/>
                                            <input type="hidden" id="hdnOriginType" name="Segments[0].originType" value/>
                                        </label>

                                    </div>
                                </div>
                                <div className="fly-2">
                                    <div className="destname-1">
                                        <label for="city">
                                            <span>Flying To</span>
                                            <input type="text" id="txtDestination" placeholder="City or specific airport" autocomplete="off"    onkeypress="return IsStringKey(event)" name="Segments[0].Destination"
                                            ref={input => this.destsearch= input}
                                            onChange={this.handleDestChange}/>

                                            {this.state.destLoaded &&
                                            <div className="autocomplete" id="divD">
                                            <DestSuggestions destresults={this.state.destresults} />
                                            </div>
}
                                            <p id="pDestination">
                                            &nbsp;
                                            {/* {this.state.query} */}
                                            </p>
                                            <input type="hidden" id="hdnDesCity" name="Segments[0].destinationName" value/>
                                            <input type="hidden" id="hdnDesAirportName" name="Segments[0].disText" value/>
                                            <input type="hidden" id="hdnDestinationType" name="Segments[0].destinationType" value/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flying-from-2">
                                <div className="date-1">
                                    <div className="calender" id="divdepartdate">
                                        <label for="Depart Date">
                                            
                                            <span>Depart Date <i className="fa fa-angle-down"></i></span>
                                            <input type="hidden" id="hdnDepartDate" value="02/21/2021" name="Segments[0].Date"/>
                                            <strong>
                                                    <span className="date-serach" id="dptDt">21</span>
                                                    <span className="month-serach" id="dptMnth">Feb</span>&#x27;                                                            <span className="year-serach" id="dptYr">21</span>
                                            </strong>
                                            <p id="dptDay">
                                                Sunday
                                            </p>
                                        </label>
                                        

                                </div>
                            </div>
                            <div className="date-2">
                                <div className="calender-1">
                                    <label for="Return Date">
                                        <span>Return Date <i className="fa fa-angle-down"></i></span>
                                        <div className="add-return" id="divaddreturn" style={{display:"none"}}>
                                            Add Return<br/> To Save More
                                        </div>
                                        <div id="divreturndate">
                                            <input type="hidden" id="hdnReturnDate" value="02/22/2021" name="Segments[1].Date"/>
                                            <strong>
                                                    <span className="date-serach" id="rtrnDt">22</span>
                                                    <span className="month-serach" id="rtrnMnth">Feb</span>&#x27;                                                            <span className="year-serach" id="rtrnYr">21</span>
                                            </strong>

                                            <p id="rtrnDay">
                                                Monday
                                            </p>
                                        </div>
                                    </label>
                                    <img src="images/close-icon-src.png" id="img-close"/>
                                </div>
                            </div>
                        </div>
                        <div className="flying-from-3">

                            <div id="divtraveller" className="traveller">
                                <label for="Depart Date">
                                    <span>Travellers & Class <i className="fa fa-angle-down"></i></span>
                                    <input type="text" id="totaltravellers" value="1 Travellers" readonly/>
                                    <p>
                                        <span id="cabinclass">Economy</span>
                                    </p>
                                </label>
                            </div>

                        </div>
                        <div className="flying-from-4">
                            <input className="serch-botton" type="submit" /*onClick={searchReq(Event)}*/value/>
                            <input type="hidden" name="hdnSearchRequest" id="hdnSearchRequest"/>                                    
                        </div>
                        </form>
                        <div className="travlerr-data" id="DivTravelPopData" style={{display:"none"}}>

                            <div className="mob-show">
                                <div className="float-left">
                                    Travellers & Class
                                </div>
                                <div className="float-right">
                                    <span className="close-btn-icon close-mob"></span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                    <div className="travel-data">
                                        <p>Adults</p>
                                        <ul id="ulAdult">
                                                    <li className="active">1</li>
                                                    <li class>2</li>
                                                    <li class>3</li>
                                                    <li class>4</li>
                                                    <li class>5</li>
                                                    <li class>6</li>
                                                    <li class>7</li>
                                                    <li class>8</li>
                                                    <li class>9</li>
                                        </ul>
                                        <input type="hidden" id="hdnAdt" value="1" data-val="true" data-val-required="The NoOfAdult field is required." name="PaxDetails.NoOfAdult"/>
                                        <p>Youth (12 - 15 Years)</p>
                                        <ul id="ulYouth">
                                                    <li className="active">0</li>
                                                    <li class>1</li>
                                                    <li class>2</li>
                                                    <li class>3</li>
                                                    <li class>4</li>
                                                    <li class>5</li>
                                                    <li class>6</li>
                                                    <li class>7</li>
                                                    <li class>8</li>
                                        </ul>
                                        <input type="hidden" id="hdnYth" data-val="true" data-val-required="The NoOfYouth field is required." name="PaxDetails.NoOfYouth" value/>
                                        <p>Children (2 - 11 Years)</p>
                                        <ul id="ulChild">
                                                    <li className="active">0</li>
                                                    <li class>1</li>
                                                    <li class>2</li>
                                                    <li class>3</li>
                                                    <li class>4</li>
                                                    <li class>5</li>
                                                    <li class>6</li>
                                                    <li class>7</li>
                                                    <li class>8</li>
                                        </ul>
                                        <input type="hidden" id="hdnChd" data-val="true" data-val-required="The NoOfChild field is required." name="PaxDetails.NoOfChild" value/>
                                        <p>
                                            Infant (Under 2 Years)
                                        </p>
                                        <ul id="ulInfant">
                                                    <li className="active">0</li>
                                                        <li class>1</li>
                                                        <li class>2</li>
                                                        <li class>3</li>
                                                        <li class>4</li>
                                                        <li class>5</li>
                                                        <li class>6</li>
                                                        <li class>7</li>
                                                        <li class>8</li>
                                            </ul>
                                            <input type="hidden" id="hdnInf" data-val="true" data-val-required="The NoOfInfant field is required." name="PaxDetails.NoOfInfant" value/>
                                            <p>
                                                Infant on Seat (Under 2 Years)
                                            </p>
                                            <ul id="ulInfantOnSeat">
                                                        <li className="active">0</li>
                                                        <li class>1</li>
                                                        <li class>2</li>
                                                        <li class>3</li>
                                                        <li class>4</li>
                                                        <li class>5</li>
                                                        <li class>6</li>
                                                        <li class>7</li>
                                                        <li class>8</li>
                                            </ul>
                                            <input type="hidden" id="hdnInfOnSeat" data-val="true" data-val-required="The NoOfInfantOnSeat field is required." name="PaxDetails.NoOfInfantOnSeat" value/>
                                            <div className="AddError" style={{display:"none"}} id="divError"></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 border-left">
                                        <div className="travel-class">
                                            <p>
                                                Choose Travel Class
                                            </p>
                                            <ul>
                                                <li data-cabinclassName="Y" className="active">Economy</li>
                                                <li data-cabinclassName="W">Premium Economy</li>
                                                <li data-cabinclassName="C">Business Class</li>
                                                <li data-cabinclassName="F">First Class</li>
                                            </ul>
                                            <input type="hidden" id="hdnCabinClass" name="CabinClass" value/>
                                            <input type="hidden" id="hdnCabinClassName" name="CabinClassName" value/>
                                        </div>
                                        <input type="button" className="apply-btn" value="Apply"/>
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

{/* <script src="js/autocomplete_v%3DBCkDTvHh0zwR_AEikGCf9WX408wPMeU9JAhNYp26evA.js"></script> */}


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
<section class="customer-support">
    <div class="container">
        <div class="customer-support-line support-space">
            <div class="row">
                <div id="customer-support" class="owl-carousel owl-theme pt-3 pb-4 cutomer">
                    <div class="item">
                        <div class="media">
                            <span class="mr-3 easy-installments-icon"></span>
                            <div class="media-body">
                                <h5 class="mt-0">
                                    24/7 Customer Support
                                </h5>
                                Our travel experts provide quality service whenever you need it
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="media">
                            <span class="mr-3 customer-support-icon"></span>
                            <div class="media-body">
                                <h5 class="mt-0"> Price Match Promise</h5>
                                We offer the best rates for your flights around the world
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="media">
                            <span class="mr-3 price-match-icon"></span>
                            <div class="media-body">
                                <h5 class="mt-0">Same Day Cancellation</h5>
                                No hassle, no extra costs. Cancellations made easy.
                            </div>
                        </div>
                    </div>
                        <div class="item">
                            <div class="media">
                                <span class="mr-3 free-cancellations-icon"></span>
                                <div class="media-body">
                                    <h5 class="mt-0"> Fly Now Pay Later</h5>
                                    Budgeting is made easy with our fly now pay later option
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    {/* <!-- modal Start--> */}
    <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <div class="row">
                        <div class="col-xl-4 col-lg-6 col-md-12 col-12">
                            <p>Why Sign Up for Our Newsletter?</p>
                            <ul>
                                <li>
                                    Email-only deals delivered right to you
                                </li>
                                <li>Discounted deals from hundreds of airlines</li>
                                <li>Special promo codes & discounts</li>
                            </ul>
                        </div>
                        <div class="col-xl-2 col-lg-6 col-md-12 col-12">
                            <img src="images/sound-icon.jpg"/>
                        </div>
                        <div class="col-xl-6 col-lg-12 col-md-12 col-12">
                            <p>Get Promo Code and Get up to £15 OFF.</p>
                            <strong>Sign up for Crystal Travel emails below to reveal a promo code you can use today.</strong>
                            <div class="input-group mt-2">
                                <input type="text" class="form-control" placeholder="Enter your email and get discounted deals"/>
                                <div class="input-group-append">
                                    <span class="input-group-text" id="basic-addon2">Sign Up & Get Promo Code!</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <hr/>
                        </div>
                        <div class="col-12">
                            <div class="text-small text-center">Applies to bookings for 3+ travellers.  <strong>Book by 30 Apr, 2020</strong>  <a href>Learn more</a></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    </div>
    {/* modal End--> */}
</section>

<section id="cheapflight" className="flight-routes">


<input type="hidden" id="hdnPageModuleWidgetMappingIdArr" value="14"/>
<input type="hidden" id="hdnWidgetCounter" value="1"/>
        <div className="geographical" id="dealPlaceholer_14">
            

<section id="topoffers" className="top-Offers-middlepart topoofers-space">
<div className="container mt-3">
    <div className="row">
        <div className="col-12">
            <div className="top-Offers-heading text-center">
                <h2 className="packages">Top Flight Offers</h2>
                <p>If you&#x2019;re planning your next adventure, we&#x2019;ve got the best cheap flight deals ready to whisk you away to your favourite locations. Whether it&#x2019;s a fast-paced city escape in bustling New York, exotic weather in the Philippines, or a far-flung trip to Sydney you&#x2019;re seeking, we&#x2019;ve got a variety of cheap flights available from London and other major airports. We have close partnerships with over 150 airlines, meaning Fybomide Travel customers can benefit from exclusive flight deals and discounts and travel to their dream destinations, for less. </p>
            </div>
            <ul className="nav nav-tabs top-offer-tab d-flex justify-content-center mb-3">
                            <li className="nav-item"> <a className="nav-link active" data-toggle="tab" href="#TopDestination">Top Destination</a></li>
                            <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#Airlines">Airlines</a></li>
            </ul>
            <div className="tab-content mb-3">
                        <div id="TopDestination" className="tab-pane active">
                            <section className="caroselslider">
                                <div className="carousel-wrap">
                                    <div className="owl-carousel all-offer-tab">
                                            <div className="item">
                                                <a href="https://Fybomidetravel.com/flights/new-york">
                                                    <div className="best-selling-box">
                                                        <div className="best-selling-top-img">
                                                            <img src="https://Fybomidecmsimages.s3.amazonaws.com/d09e1b4a-e889-4fd7-9940-2bdf7a8477f3" alt="ariline-img"/>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="item">
                                                <a href="https://Fybomidetravel.com/flights/africa">
                                                    <div className="best-selling-box">
                                                        <div className="best-selling-top-img">
                                                            <img src="https://Fybomidecmsimages.s3.amazonaws.com/bc09f001-4d46-4e64-add2-a5d62500ca5d" alt="ariline-img"/>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="item">
                                                <a href="https://Fybomidetravel.com/flights/dubai">
                                                    <div className="best-selling-box">
                                                        <div className="best-selling-top-img">
                                                            <img src="https://Fybomidecmsimages.s3.amazonaws.com/7ff5dd36-56fd-4bd3-8681-3511c2a92764" alt="ariline-img"/>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div id="Airlines" className="tab-pane fade">
                                <br/>
                            <section className="caroselslider">
                                <div className="carousel-wrap">
                                    <div className="owl-carousel all-offer-tab">
                                            <div className="item">
                                                <a href="https://Fybomidetravel.com/flights/britishairways">
                                                    <div className="best-selling-box">
                                                        <div className="best-selling-top-img">
                                                            <img src="https://Fybomidecmsimages.s3.amazonaws.com/73a813df-b8eb-447f-bc30-b4724686ec75" alt="ariline-img"/>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="item">
                                                <a href="https://Fybomidetravel.com/flights/qatarairways">
                                                    <div className="best-selling-box">
                                                        <div className="best-selling-top-img">
                                                            <img src="https://Fybomidecmsimages.s3.amazonaws.com/79caba8b-9945-4c80-9166-9e31f881c182" alt="ariline-img"/>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="item">
                                                <a href="https://Fybomidetravel.com/flights/etihadairways">
                                                    <div className="best-selling-box">
                                                        <div className="best-selling-top-img">
                                                            <img src="https://Fybomidecmsimages.s3.amazonaws.com/4dc30ee9-c46b-4f94-9d5b-a1ce2394141d" alt="ariline-img"/>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </section>
                        </div>
            </div>
        </div>
    </div>
</div>
</section>
</div>
</section>

            </div>
        );
    }
}

Flights.propTypes = {

};

export default Flights;