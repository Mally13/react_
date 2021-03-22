import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tab from 'react-bootstrap/Tab';
import FlightSupport from './FlightSupport'
import './Support.css'

class CustomerSupport extends Component {
    constructor(props){
        super(props);
        this.handleSuccessfulAuth=this.handleSuccessfulAuth.bind(this);
        
    }
    
    handleSuccessfulAuth(data){
        //todo  update  parent  component
        this.props.history.push("/dashboard");
    
    }
    render() {
        return (
            <div className="customersup">
            <section className="cust-sup-new-main-section">
            <div className="clearfix"></div>
            <div class="cust-sup-new-banner">
            <img src="/images/subscribe-bg-img.jpg"/>
            <h2>How can we help?</h2>
            <span></span>
            </div>
            <div class="clearfix"></div>
            <div class="cust-sup-new-tab-container">
            <div class="inner">
                <h3>We’re here to help you</h3>
                <p class="text-center">Welcome to Fybomide Travel Customer Support. Are you facing difficulties in flight booking, require any modification in your existing ticket or seeking travel assistance. Select your concern and raise a request. You'll get easy customer support from our travel experts.</p>
                {/* <p class="text-center" style={{color:"red"}}>We are currently experiencing a spike in the incoming calls and emails due to ongoing COVID 19 issue. Our sincere apologies incase the response is delayed. Please be assured that we are trying our best to keep up with the increased demand. We will reply to your request as soon as we can.</p> */}
                <div class="cust-sup-new-tab-content-container ">
                <Tabs defaultActiveKey="flights" id="noanim-tab-example">
                    <Tab eventKey="flights" title="Flights">
                    
                    <FlightSupport/>
                    
                    </Tab>
                    <Tab eventKey="hotels" title="Hotels">
                    {/* <Hotels /> */}
                    </Tab>
                    <Tab eventKey="cars" title="Cars" >
                    {/* <Cars/> */}
                    </Tab>
                </Tabs>
                </div>
                {/* <ul class="nav nav-pills">
                    <li class="active">
                        <a data-toggle="pill" data-target="#flight">
                            <img src="images/cust-sup-new-flight-tab-icon.png"/>
                            Flight
                        </a>
                    </li>
                    <li class="active">
                        <a data-toggle="pill" data-target="#flight">
                            <img src="images/cust-sup-new-flight-tab-icon.png"/>
                           Hotels
                        </a>
                    </li>
                    <li class="active">
                        <a data-toggle="pill" data-target="#flight">
                            <img src="images/cust-sup-new-flight-tab-icon.png"/>
                            Cars
                        </a>
                    </li>
                </ul> */}
            </div>
        </div>
            {/* <div class="cust-sup-new-tab-container">
            <div class="inner">
                <h3>We’re here to help you</h3>
                <p class="text-center">Welcome to Fybomide Travel Customer Support. Are you facing difficulties in flight booking, require any modification in your existing ticket or seeking travel assistance. Select your concern and raise a request. You'll get easy customer support from our travel experts.</p>
                
                <Tabs defaultActiveKey="flights" id="noanim-tab-example">
                    <Tab eventKey="flights" title="Flights">
                    
                    <FlightSupport/>
                    
                    </Tab>
                    <Tab eventKey="hotels" title="Hotels">
                    <Hotels />
                    </Tab>
                    <Tab eventKey="cars" title="Cars" >
                    <Cars/>
                    </Tab>
                </Tabs>
            </div>
        </div>  */}
        <div class="cant-find">
            <div class="inner"><b>Fybomide Travel</b>
                <p class="text-left"> A Travel management that saves you time.
We give you everything you need to manage corporate travel in one place with all of the support and none of the stress.
We give you the safest and most flexible experience in business travel, backed up by the best support team on the planet.

Get your time back for the things that matter.</p>
                <p class="text-left">We have the world’s largest travel inventory.
More choice means more planes, accommodation, and cars at better prices than anyone else. Know you’re getting the best options possible in an ever-changing world.</p>
            </div>
        </div>
        </section>
        </div>
        

        )}
        }     
export default CustomerSupport;