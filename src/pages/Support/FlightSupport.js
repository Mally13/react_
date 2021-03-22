import React, { Component } from 'react';
class FlightSupport extends Component {
    render() {
        return (
            // <div class="cust-sup-new-tab-content-container ">
                <div class="inner">
                <div class="tab-content">
                <div id="flight" class="tab-pane fade in active show">
                <div class="wrapper center-block">

                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel panel-default">
                                    <div class="panel-heading first" role="tab" id="headingOne">
                                        <h4 class="panel-title">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <img src="/images/amandment-icon.png"/> Amendments
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                        <div class="panel-body">
                                            <div class="amadmant-main">
                                                <h2>For all amendments please fill the below section</h2>
                                                <p>Ensure to provide Fybomide Travel Reference No (example: FTBF1234567) to complete the request.</p>
                                                <div class="cutomer-1">
                                                    <select class="form-control adult" id="ddflt" onchange="CheckRadioFlight()">
                                                        <option value="Name Correction">Name Correction</option>
                                                        <option value="Date Change">Date Change</option>
                                                        <option value="Cancellation">Cancellation</option>
                                                    </select>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div class="cutomer-1">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FAmendmentsCoustomerName" placeholder="Correct First Name/Last Name*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-2">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FAmendmentsCustomerFTBF" placeholder=" FTBF/Ticket No/ Airline Ref Code*"/>

                                                    </div>
                                                </div>

                                                <div class="cutomer-1 first" id="divfltoutdate" style={{display:"none"}}>
                                                    <div class="outbound-1">
                                                        <div class="input-group">
                                                            <div class="dateformat-modifay">
                                                                <span id="sDay5" class="sDay-modifay"></span><span id="sDate5" class="sDate-modifay"></span>
                                                                <div class="sMonth-modifay">
                                                                    <span id="sMonth5"></span>
                                                                    <span id="sYear5"></span>
                                                                </div>
                                                                <input name="from" type="text" class="form-control1" placeholder="Outbound Date" id="from5" style={{color: "#fff",border:"0px"}} spellcheck="false" autocomplete="off"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="outbound-2">
                                                        <div class="input-group">
                                                            <div class="dateformat-modifay">
                                                                <span id="sDay55" class="sDay-modifay"></span><span id="sDate55" class="sDate-modifay"></span>
                                                                <div class="sMonth-modifay">
                                                                    <span id="sMonth55"></span>

                                                                    <span id="sYear55"></span>
                                                                </div>
                                                                <input name="to" type="text" class="form-control1" placeholder="Inbound Date" id="to5" style={{color: "#fff", border:"0px"}} spellcheck="false" autocomplete="off"/>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="cutomer-2 second" id="divfltindate" style={{display:"none"}}>
                                                    <div class="outbound-1">
                                                        <div class="input-group">
                                                            <input class="form-control" id="txtorigin" name="txtorigin" placeholder="Change in Departure Airport"/>

                                                        </div>
                                                    </div>
                                                    <div class="outbound-2">
                                                        <div class="input-group">
                                                            <input class="form-control" id="txtdestination" name="txtdestination" placeholder="Change in Destination Airport"/>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="cutomer-3">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FAmendmentsCoustomerEmail1" placeholder="Email Address*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-4">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FAmendmentsCoustomerPhoneNumber" maxlength="15" onkeypress="return NumericOnly(event)" placeholder="Phone Number*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-5">
                                                    <textarea placeholder="Additional Comments" id="FAmendmentsCoustomerComments"></textarea>
                                                </div>
                                                <div class="but-sub">
                                                    <button onclick="SaveEnquirydataForFlight(1)">Submit</button>
                                                </div>
                                                <div class="customer-6" id="divimpname">
                                                    <p>Important Information’s:  </p>
                                                    <ol>
                                                        <li>
                                                            Name must match as on your govt. issued photo ID(for example your driver’s license for a domestic flight, or your passport for international travel).
                                                            You may be denied boarding or entry at your destination if the names are incorrect.
                                                        </li>
                                                        <li>Most airlines allow for corrections to misspelling on tickets, but doesn’t allow name changes to another person.</li>
                                                        <li>If your booking is with multiple airlines, there may be separate change policies for each carrier.</li>
                                                        <li>Name correction may incur airlines penalties, fare difference & admin fee.</li>
                                                        <li>Upon submitting the request, our support team will contact you within 24hrs.  </li>
                                                    </ol>
                                                </div>
                                                <div class="customer-6" id="divimpdate" style={{display:"none"}}>
                                                    <p>Important Information’s:  </p>
                                                    <ol>
                                                        <li>
                                                            If your itinerary or confirmation email shows that you booked a Basic Economy or Light fare, your reservation cannot be changed.
                                                            For other types of fares, you may proceed to submit your request
                                                        </li>
                                                        <li>Date/Route/Airport change may incur airlines penalties, fare difference & admin fee</li>
                                                        <li>Once the request is submitted, our support team will contact you within 24hrs.</li>

                                                    </ol>
                                                </div>
                                                <div class="customer-6" id="divimpcancel" style={{display:"none"}}>
                                                    <p>Important Information’s:  </p>
                                                    <ol>
                                                        <li>
                                                            If you cancel a non-refundable flight reservation, you will lose the value of your ticket. Certain airlines only refund the airport taxes
                                                            (if airport taxes are refundable & subjected to airlines conditions )
                                                        </li>
                                                        <li>If you are cancel a refundable ticket, airlines cancellation charges with admin fee may incur </li>
                                                        <li>In the event you cancel your flight due to death or Medical reason, documentation is required and it will be purely on the sole discretions of airlines to offer a waiver</li>
                                                        <li>Once the request is submitted, our support team will contact you within 24hrs. </li>
                                                    </ol>
                                                </div>
                                                <div id="f1" class="commmsg"></div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingTwo">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <img src="/images/feedback-icon.png"/>   Feedback
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                        <div class="panel-body">
                                            <div class="amadmant-main">
                                                <h2>We are delighted to hear your experience about your trip with Fybomide Travel </h2>
                                                <p>Ensure to provide Fybomide Travel Reference No (example: FTBF1234567) to complete the request.</p>
                                                <div class="cutomer-1">
                                                    <select class="form-control adult" id="ddflt2">
                                                        <option value="Airline">Airline</option>
                                                        <option value="Service / Agent">Service / Agent</option>
                                                        <option value="Website">Website</option>
                                                    </select>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div class="cutomer-1">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FFeedbackCoustomerName" placeholder="Customer Name*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-2">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FFeedbackCoustomerFTBF" placeholder=" FTBF/Ticket No/ Airline Ref Code*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-3">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FFeedbackCoustomerEmail1" placeholder="Email Address*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-4">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FFeedbackCoustomerPhoneNumber" maxlength="15" onkeypress="return NumericOnly(event)" placeholder="Phone Number*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-5">
                                                    <textarea placeholder="Additional Comments" id="FFeedbackCoustomercomment"></textarea>
                                                </div>
                                                <div class="but-sub">
                                                    <button onclick="SaveEnquirydataForFlight(2)">Submit</button>
                                                </div>
                                                <div id="f2" class="commmsg"></div>
                                                <div class="customer-6">
                                                    <p>Important Information’s:  </p>
                                                    <ol>
                                                        <li>We act as an agent between airlines, suppliers and provide services on their behalf. But if timely feedback is received from the customers, the same can be taken with the suppliers/hotels concerned strongly.</li>
                                                        <li>We treat every case in isolation and ensure it is resolved on priority basis</li>
                                                        <li>Once the request is submitted, our support team will contact you within 24hrs.</li>

                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingThree">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <img src="/images/online-icon.png"/>   Online Check-in
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                        <div class="panel-body">
                                            <div class="amadmant-main">
                                                {/* <h2 style={{visibility:"hidden"}}>share your experience about a completed trip you booked with Fybomide Travel</h2> */}
                                                <p>
                                                    Please be advised that you can check-in online 24 hours prior to departure on Airline’s website by using the airline reference<br/>
                                                    Number (example: L84RTL) and your last name.
                                                </p>

                                                <div class="clearfix"></div>
                                                <div class="space"></div>
                                                <div class="cutomer-1">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FOnlineCheckINCustomerName" placeholder="Customer Name*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-2">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FOnlineCheckINCustomerFTBF" placeholder=" FTBF/Ticket No/ Airline Ref Code*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-3">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FOnlineCheckINCustomerEmail1" placeholder="Email Address*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-4">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FOnlineCheckINCustomerPhoneNumber" maxlength="15" onkeypress="return NumericOnly(event)" placeholder="Phone Number*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-5">

                                                    <textarea placeholder="Additional Comments" id="FOnlineCheckINCustomerCommentdata"></textarea>
                                                </div>
                                                <div class="but-sub">
                                                    <button onclick="SaveEnquirydataForFlight(3)">Submit</button>
                                                </div>

                                                <div id="f3" class="commmsg"></div>
                                                <div class="customer-6">
                                                    <p>Important Information’s:  </p>
                                                    <ol>
                                                        <li>
                                                            Online flight check-in opens 24-48 hours before your flight departure. You'll need your airline confirmation code (example: ABC432)
                                                        </li>
                                                        <li>We recommend passenger to reach airport 2 hours prior to departure for Domestic Flights and 3 Hours for International Flights</li>
                                                        <li>
                                                            Depending on your airline, after checking in online you may be able to print your boarding pass, save it to your mobile phone,
                                                            or pick it up from a kiosk at the airport.
                                                        </li>
                                                        <li>Airport check-in usually opens 2-3 hours before flight departure</li>
                                                        <li>Once the request is submitted, our support team will contact you within 24hrs.  </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingFour">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                <img src="/images/eticket-icon.png"/> E-Ticket
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                        <div class="panel-body">
                                            <div class="amadmant-main">
                                                {/* <h2 style={{visibility:"hidden"}}>share your experience about a completed trip you booked with Fybomide Travel</h2> */}
                                                <p>Ensure to provide Fybomide Travel Reference No (example: FTBF1234567) to complete the request</p>

                                                <div class="clearfix"></div>
                                                <div class="space"></div>
                                                <div class="cutomer-1">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FETicketCustomerName" placeholder="Customer Name*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-2">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FETicketCustomerFTBF" placeholder=" FTBF/Ticket No/ Airline Ref Code*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-3">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FETicketCustomerMail1" placeholder="Email Address*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-4">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FETicketCustomerPhoneNumber" maxlength="15" onkeypress="return NumericOnly(event)" placeholder="Phone Number*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-5">
                                                    <textarea placeholder="Additional Comments" id="FETicketCustomerComments"></textarea>
                                                </div>
                                                <div class="but-sub">
                                                    <button onclick="SaveEnquirydataForFlight(4)">Submit</button>
                                                </div>
                                                <div id="f4" class="commmsg"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingFive">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                <img src="/images/baggage-icon-customer.png"/>  Baggage Enquiry
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                        <div class="panel-body">
                                            <div class="amadmant-main">
                                                {/* <h2 style={{visibility:"hidden"}}>share your experience about a completed trip you booked with Fybomide Travel</h2> */}
                                                <p>Ensure to provide Fybomide Travel Reference No (example: FTBF1234567) to complete the request</p>

                                                <div class="clearfix"></div>
                                                <div class="space"></div>
                                                <div class="cutomer-1">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FBaggageEnquiryCustomerName" placeholder="Customer Name*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-2">
                                                    <div class="input-group">
                                                        <input class="form-control " id="FBaggageEnquiryCustomerFTBF" placeholder=" FTBF/Ticket No/ Airline Ref Code*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-3">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FBaggageEnquiryCustomerMail1" placeholder="Email Address*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-4">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FBaggageEnquiryCustomerPhoneNumber" maxlength="15" onkeypress="return NumericOnly(event)" placeholder="Phone Number*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-5">
                                                    <textarea placeholder="Additional Comments" id="FBaggageEnquiryCustomerComments"></textarea>
                                                </div>
                                                <div class="but-sub">
                                                    <button onclick="SaveEnquirydataForFlight(5)">Submit</button>
                                                </div>
                                                <div id="f5" class="commmsg"></div>
                                                <div class="customer-6">
                                                    <p>Important Information’s:  </p>
                                                    <ol>
                                                        <li>
                                                            Your baggage allowance may differ on flights operated by other airlines.
                                                        </li>
                                                        <li>
                                                            If a flight is 'OPERATED BY' another carrier, or there is "MORE THAN ONE CARRIER" on your booking, the more restrictive
                                                            baggage policy MAY be in effect. Please contact the carrier(s) directly to clarify this, in order to avoid additional charges.
                                                            Once form is submitted, we will receive the request this way
                                                        </li>
                                                        <li>
                                                            Once the request is submitted, our support team will contact you within 24hrs.
                                                        </li>

                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingSix">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                <img src="/images/spacial-service.png"/>   Special Service Request
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                                        <div class="panel-body">
                                            <div class="amadmant-main">
                                                {/* <h2 style={{visibility:"hidden"}}>share your experience about a completed trip you booked with Fybomide Travel</h2> */}
                                                <p>Ensure to provide Fybomide Travel Reference No (example: FTBF1234567) to complete the request</p>

                                                <div class="clearfix"></div>
                                                <div class="space"></div>
                                                <div class="cutomer-1">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FSpecialServiceRequestCustomerName" placeholder="Customer Name*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-2">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FSpecialServiceRequestCustomerFTBF" placeholder=" FTBF/Ticket No/ Airline Ref Code*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-3">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FSpecialServiceRequestCustomerEmail1" placeholder="Email Address*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-4">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FSpecialServiceRequestCustomerPhoneNumber" maxlength="15" onkeypress="return NumericOnly(event)" placeholder="Phone Number*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-3">
                                                    <select class="form-control adult" id="ddspl">
                                                        <option>Meal</option>
                                                        <option>Seat</option>
                                                        <option>Wheelchair</option>
                                                        <option>Bassinet</option>
                                                        <option>Meet &amp; Assist</option>
                                                        <option>Baggage</option>
                                                    </select>
                                                </div>
                                                <div class="cutomer-5">
                                                    <textarea placeholder="Additional Comments" id="FSpecialServiceRequestCustomerComments"></textarea>
                                                </div>
                                                <div class="but-sub">
                                                    <button onclick="SaveEnquirydataForFlight(6)">Submit</button>
                                                </div>
                                                <div id="f6" class="commmsg"></div>
                                                <div class="customer-6">
                                                    <p>Important Information’s:  </p>
                                                    <ol>
                                                        <li>
                                                            Please note that we act only as the agents to the airlines and can only advise our clients as per the instructions and
                                                            guidelines received from the carrier. All special requests such as Meal requests, seat(s) allocation is purely controlled by the airlines
                                                            who may exercise their discretionary powers on such matters.
                                                        </li>


                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingSeven">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                <img src="/images/sedule-icon.png"/>  Schedule Change
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseSeven" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
                                        <div class="panel-body">
                                            <div class="amadmant-main">
                                                {/* <h2 style={{visibility:"hidden"}}>share your experience about a completed trip you booked with Fybomide Travel</h2> */}
                                                <p>Ensure to provide Fybomide Travel Reference No (example: FTBF1234567) to complete the request</p>

                                                <div class="clearfix"></div>
                                                <div class="space"></div>
                                                <div class="cutomer-1">
                                                    <div class="input-group">
                                                        <input class="form-control" id="ScheduleChangeCustomerName" placeholder="Customer Name*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-2">
                                                    <div class="input-group">
                                                        <input class="form-control" id="ScheduleChangeCustomerFTBF" placeholder=" FTBF/Ticket No/ Airline Ref Code*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-3">
                                                    <div class="input-group">
                                                        <input class="form-control" id="ScheduleChangeCustomerEmail1" placeholder="Email Address*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-4">
                                                    <div class="input-group">
                                                        <input class="form-control" id="ScheduleChangeCustomerPhoneNumber" maxlength="15" onkeypress="return NumericOnly(event)" placeholder="Phone Number*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-5">
                                                    <textarea placeholder="Additional Comments" id="ScheduleChangeCustomerComments"></textarea>
                                                </div>
                                                <div class="but-sub">
                                                    <button onclick="SaveEnquirydataForFlight(7)">Submit</button>
                                                </div>
                                                <div id="f7" class="commmsg"></div>
                                                <div class="customer-6">
                                                    <p>Important Information’s:  </p>
                                                    <ol>
                                                        <li>
                                                            The first thing to remember is airlines do not guarantee their schedules, which means their obligations and liabilities are limited.
                                                            If you are unhappy with the new itinerary, you can ask the airline to find a better routing, without penalty. If none is available,
                                                            in most cases your only choices are to accept the change as it stands, cancel your ticket and apply it to another flight within a year of the issue date,
                                                            or cancel your ticket and request a refund.
                                                        </li>
                                                        <li>Industry like air transportation such changes are inevitable and are beyond our control as we act only as the booking agents for the airlines.</li>
                                                        <li>Fybomide Travel takes every steps to ensure you are provided with an alternative options in case of Schedule Change  </li>
                                                        <li>Once the request is submitted, our support team will contact you within 24hrs.</li>

                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingEight">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                <img src="/images/atol-icon-new.png"/>  Receipt & FlexiPerk
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseEight" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEight">
                                        <div class="panel-body">
                                            <div class="amadmant-main">
                                                {/* <h2 style={{visibility:"hidden"}}>share your experience about a completed trip you booked with Fybomide Travel</h2> */}
                                                <p>Ensure to provide Fybomide Travel Reference No (example: FTBF1234567) to complete the request</p>

                                                <div class="clearfix"></div>
                                                <div class="space"></div>
                                                <div class="cutomer-1">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FReceiptATOLCustomerName" placeholder="Customer Name*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-2">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FReceiptATOLCustomerFTBF" placeholder=" FTBF/Ticket No/ Airline Ref Code*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-3">
                                                    <div class="input-group">
                                                        <input class="form-control " id="FReceiptATOLCustomerEmail1" placeholder="Email Address*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-4">
                                                    <div class="input-group">
                                                        <input class="form-control" id="FReceiptATOLCustomerPhoneNumber" maxlength="15" onkeypress="return NumericOnly(event)" placeholder="PhoneNumber*"/>

                                                    </div>
                                                </div>
                                                <div class="cutomer-3">
                                                    <select class="form-control adult" id="ddpayment">
                                                        <option>Payment Receipt</option>
                                                        <option>ATOL</option>
                                                    </select>
                                                </div>
                                                <div class="cutomer-5">
                                                    <textarea placeholder="Additional Comments" id="FReceiptATOLCustomercomments"></textarea>
                                                </div>
                                                <div class="but-sub">
                                                    <button onclick="SaveEnquirydataForFlight(8)">Submit</button>
                                                </div>
                                                <div id="f8" class="commmsg"></div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
            {/* </div> */}
            </div>
            </div>
        );
    }
}
export default FlightSupport;
