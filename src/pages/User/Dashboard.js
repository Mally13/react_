import React from 'react';
import './theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


const Dashboard = props => {
    return (

        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <div class="sidebar">
                            <ul class="widget widget-menu unstyled">
                                <li ><NavLink to="/account-settings"  activeClassName="active"><i class="fa fa-cog" aria-hidden="true" style={{margin:"10px"}}></i>
                                        Account Settings</NavLink></li>
                                <li><NavLink to="ui-typography.html"    activeClassName="active"><i class="menu-icon icon-book"></i>Profile</NavLink></li>
                                <li><NavLink to="form.html" activeClassName="active"><i class="menu-icon icon-paste"></i>Bookings</NavLink></li>
                                <li><NavLink to="table.html"    activeClassName="active"><i class="menu-icon icon-table"></i>Travellers Info</NavLink></li>
                                <li><NavLink to="/logout" activeClassName="active"><i class="menu-icon icon-signout"></i>Logout </NavLink></li>
                            </ul>
                        </div>
                        </div>
                        <div class="col-sm-9">
                          <div class="content">
                            <div class="btn-controls">
                              <div class="btn-box-row row-fluid">
                                    <div class="col-12">

                                    </div>
                                        <div class="row-fluid">
                                            <div class="line-1">
                                            <div class="card " ><a href="#" ><i class="fa fa-address-card-o" style={{marginBottom:"16px",fontSize:"30px",color:"#175355"}} aria-hidden="true"></i>
                                                <br/>
                                                  <b>Personal Info</b><br/><p>Provide personal details and how we can reach you</p>
                                                </a></div>
                                            <div class="card" ><a href="#" ><i class="fa fa-shield" aria-hidden="true" style={{marginBottom:"16px",fontSize:"30px",color:"#175355"}}></i>
                                                <br/><b>Login & Security</b><br/><p>Update your password and secure your account</p>
                                                </a></div>
                                            <div class="card " ><a href="#" ><i class="fa fa-money" aria-hidden="true"  style={{marginBottom:"16px",fontSize:"30px",color:"#175355"}}></i>
                                                    <br/> <b>Payments & Payouts</b><br/>
                                                    <p>Review payments, payouts, coupons, gift cards, and taxes</p>
                                                </a></div>
                                            
                                            </div>
                                        </div>
                                        <div class="row-fluid">
                                            <div class="line-1">
                                            <div class="card " ><a href="#" ><i class="fa fa-bullhorn" aria-hidden="true" style={{marginBottom:"16px",fontSize:"30px",color:"#175355"}}></i>
                                                <br/> <b>Notifications</b><br/>
                                                <p>Choose notification preferences and how you want to be contacted</p>
                                                </a></div>
                                            <div class="card " ><a href="#" ><i class="fa fa-user-secret" aria-hidden="true" style={{marginBottom:"16px",fontSize:"30px",color:"#175355"}}></i>
                                                <br/> <b>Privacy</b><br/>
                                                <p>Control connected apps, what you share, and who sees it</p>
                                                </a></div>
                                            <div class="card " ><a href="#" ><i class="fa fa-globe" aria-hidden="true" style={{marginBottom:"16px",fontSize:"30px",color:"#175355"}}></i><br/> <b>
                                            Global Preferences</b> <br/><p>Set your default language, currency, and timezone</p></a></div>
                                            
                                            </div>
                                        </div>
                                        <div class="row-fluid">
                                            <div class="line-1">
                                            <div class="card " ><a href="#" ><i class="fa fa-briefcase" aria-hidden="true"style={{marginBottom:"16px",fontSize:"30px",color:"#175355"}}></i>
                                                <br/> <b>Travel For Work</b><br/>
                                                <p>Add a work email for business trip benefits</p>
                                                </a></div>
                                            <div class="card " ><a href="#" ><i class="fa fa-gift" aria-hidden="true" style={{marginBottom:"16px",fontSize:"30px",color:"#175355"}}></i>
                                            <br/> <b>Referral Credit &  Coupon</b><br/>
                                            <p>You have £0 referral credits and coupon. Learn more.</p>
                                                </a></div>
                                                <div class="card "style={{display:"none",visibility:"hidden"}} ><a href="#" ><i class="icon-bullhorn"style={{marginBottom:"16px",fontSize:"30px",color:"#175355"}}></i><br/> <b>Social Feed</b>
                                                </a></div>
                                           
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                      </div>
                      </div>
                      </div>
                </div>
            </div>    

        


 
    );
}

export default Dashboard;
