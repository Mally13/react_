        import React, { Component } from 'react'
        import PropTypes from 'prop-types'

        import IntlTelInput from 'react-intl-tel-input';
        import $, { event,click } from "jquery";
        import 'react-intl-tel-input/dist/main.css';
        import 'react-intl-tel-input/dist/components/utils';
        import axios from 'axios'
        import './Header.css';
        import { NavItem } from 'react-bootstrap';

        const encodedToken = 'YWRtaW46OWYwZDgxYjE3NDIzOTdkNGMxMTNmNDRlMTM2NmE5OGM='; //Buffer.from(token).toString('base64');
        const signup_url = 'https://demo.fybomidetravel.com/fybomide-31353973c9/api/users/signup.php';
        const signin_url = 'https://demo.fybomidetravel.com/fybomide-31353973c9/api/users/signin.php';

        class Signin_up extends Component {
            constructor(props) {
                super(props)
                this.state = {
                    txtLoginEmail:'',
                    txtLoginPassword:'',
                    title: '',
                    txtname: '',
                    txtlastname: '',
                    isCorporate:'',
                    txtemail: '',
                    number:'',
                    ddlGender: '',
                    txtUserRegistrationDOB: '',
                    txtpassword: '', 
                    checked:''  ,
                    registrationError:''   
                };
                
                this.registerUserWithCheckvalidate = this.registerUserWithCheckvalidate.bind(this);
                this._handleChange = this._handleChange.bind(this);
                this.resetUserLogin = this.resetUserLogin.bind(this);
                this.resetUserReset = this.resetUserReset.bind(this);
                this.resetCreateAccount = this.resetCreateAccount.bind(this);
                this.userLoginWithCheckLogin = this.userLoginWithCheckLogin.bind(this);

            
                }

            


        componentDidMount() {
                var _=this;
        // $(".navbar-toggler").click(function (e) {
        //     if ($("#navbarSupportedContent").is(":visible")) {
        //         $("body").css("overflow", "auto");
        //     }
        //     else { $("body").css("overflow", "hidden"); }
        // });

        $(".log-toggle").click(function () {
            $(".acc-toggle").slideToggle();
        });
        $(".sng-btn").click(function () {
          $(".sign-in-up").fadeIn();
            _.resetCreateAccount();
            _.resetUserLogin();
        });
        $(".signup-show").click(function () {
            $(".sign-in-main").fadeOut();
            $(".forgot-main").fadeOut();
            $(".sign-up-main").fadeIn();
            _.resetCreateAccount();
            _.resetUserLogin();
            _.resetUserReset();
        });

        $(".log-show").click(function () {
            $(".sign-up-main").fadeOut();
            $(".forgot-main").fadeOut();
            $(".sign-in-main").fadeIn();
            _.resetCreateAccount();
            _.resetUserLogin();
            _.resetUserReset();
        });
        $(".forgot-show").click(function () {
            $(".sign-up-main").fadeOut();
            $(".sign-in-main").fadeOut();
            $(".forgot-main").fadeIn();
            _.resetCreateAccount();
            _.resetUserLogin();
            _.resetUserReset();
        });
        $(".sin-close").click(function () {
            _.resetUserLogin();
            _.resetCreateAccount();
            $(".logg-continue").show();
            $(".log-hide").show();
            $(".pswd-btn").hide();
            $(".sign-in-up").fadeOut();
        });
        $(".sin-close-sec").click(function () {
            $(".sign-up-main").hide();
            $(".sign-in-main").fadeIn();
            $(".forgot-main").hide();
        });
        $(".user-den").click(function () {
            $(".sign-toggle").slideToggle();
        });
        $(".sng-btn").click(function () {
            $("body").addClass("over-hidden");
        });
        $(".sin-close").click(function () {
            $("body").removeClass("over-hidden");
        });
        $("#userRegistration .title-tab a").click(function () {
            $(".title-tab a").removeClass("ttab-active");
            $(this).addClass("ttab-active");
        });

        }


        // Change state of input field so text is updated while typing
        _handleChange=(e)=> {
            const value = e.target.value;

            this.setState({
            [e.target.name]: value
            });
        }
        handlecheckboxChange=(e)=>{
            const {checked}=e.target
            this.setState({checked:checked})
        }

        registerUserWithCheckvalidate=(e)=> {
        var _=this;
            e.preventDefault();
            this.setState({
                title: '',
                txtname: '',
                txtlastname: '',
                isCorporate:'',
                txtemail: '',      
                txtPhoneNumber:'',
                ddlGender: '',
                txtUserRegistrationDOB: '',
                txtpassword: '' 
            }); 


            let errorCount = 0;

                if ($.trim($("#txtname").val()).length == 0) {
                    $("#spnfirstNameErrorMessage").html('Enter first name');
                    $("#txtname").css('border-color', 'red');
                    errorCount++;
                }
                if ($.trim($("#txtlastname").val()).length == 0) {
                    $("#spnLastNameErrorMessage").html('Enter last name');
                    $("#txtlastname").css('border-color', 'red');
                    errorCount++;
                }
                if ($.trim($("#txtemail").val()).length == 0) {
                    $("#spnEmailIdErrorMessage").html('Enter email id');
                    $("#txtemail").css('border-color', 'red');
                    errorCount++;
                }
                if ($.trim($("#txtpassword").val()).length == 0) {
                    $("#spnPasswordErrorMessage").html('Enter password');
                    $("#txtpassword").css('border-color', 'red');
                    errorCount++;
                }


                if ($.trim($("#txtPhoneNumber").val()).length == 0) {
                    $("#spnPhoneErrorMessage").html('Enter phone number');
                    $("#txtPhoneNumber").css('border-color', 'red');
                    errorCount++;
                }

                if ($.trim($("#txtPhoneNumber").val()) == false) {
                $("#spnPhoneErrorMessage").html('Enter valid phone number');
                $("#txtPhoneNumber").css('border-color', 'red');
                errorCount++;
                }


                if ($.trim($("#txtemail").val()).length > 0) {
                    if (_.checkmail($.trim($("#txtemail").val())) == false) {
                        $("#spnEmailIdErrorMessage").html('Enter valid email id');
                        $("#txtemail").css('border-color', 'red');
                        errorCount++;
                    }
                }

                if ($("#chktc").is(":checked") == false) {

                    $("#spnAgreeErrorMessage").html('Please check terms & conditions');
                    $("#chktc").css('border-color', 'red');
                    errorCount++;
                }


                $("#txtname").keydown(function () {
                    $("#spnfirstNameErrorMessage").html('');
                    $("#txtname").css('border-color', '');
                });

                $("#txtlastname").keydown(function () {
                    $("#spnLastNameErrorMessage").html('');
                    $("#txtlastname").css('border-color', '');
                });

                $("#txtemail").keydown(function () {
                    $("#spnEmailIdErrorMessage").html('');
                    $("#txtemail").css('border-color', '');
                });

                $("#txtpassword").keydown(function () {
                    $("#spnPasswordErrorMessage").html('');
                    $("#txtpassword").css('border-color', '');
                });

                $("#txtPhoneNumber").keydown(function () {
                    $("#spnPhoneErrorMessage").html('');
                    $("#txtPhoneNumber").css('border-color', '');
                });

                if (errorCount > 0) {
                    return false;
                }
                
                let model={
            'title':$(".ttab-active").text(),
            'firstName': _.state.txtname,
            'lastName':_.state.txtname,
            'phone':_.state.txtPhoneNumber,
            'email':_.state.txtemail,
            'password':_.state.txtpassword,
            'gender':_.state.ddlGender,
            'dob':_.state.txtUserRegistrationDOB,
        'isCorporate':_.state.checked.toString()

                }
                console.log(model)

            let regformData = new FormData();
            
        
            regformData.append('title',$(".ttab-active").text())
            regformData.append('firstName', _.state.txtname)
            regformData.append('lastName',_.state.txtname)
            regformData.append('phone',_.state.txtPhoneNumber)
            regformData.append('email',_.state.txtemail)
            regformData.append('password',_.state.txtpassword);
            regformData.append('gender',_.state.ddlGender)
            regformData.append('dob',_.state.txtUserRegistrationDOB)
            regformData.append('isCorporate', _.state.checked.toString())

            console.log(regformData);


            let configSignUp = {
                method: 'post',
                url: signup_url,
                data: regformData,
                headers: { 
                    'Authorization': `Basic ${encodedToken}`,
                    'Content-Type': `multipart/form-data`,
                    'Access-Control-Allow-Origin':`*`,
                    'Access-Control-Allow-Headers': `Origin, X-Requested-With, Content-Type, Accept`
                }
            };
            axios(configSignUp)
            .then(response=> {
                    if (response.data.status ==="success") {
                        alert("User registration successful!");
                        $(".sign-in-main").fadeIn();
                        $(".sign-up-main").fadeOut();
                        $(".forgot-main").fadeOut();
                        _.resetCreateAccount();
                        _.resetUserLogin();
                        _.resetUserReset();
                        // _.props.handleSuccessfulAuth(response.data);
                        console.log(response)

                    }else if(response.data.status === "failed"){
                        alert(response.data.message,"Please, Try again" );
                        $(".sign-up-main").fadeIn();
                        $(".forgot-main").fadeOut();
                        $(".sign-in-main").fadeOut();
                        _.resetCreateAccount();
                        _.resetUserLogin();
                        _.resetUserReset();
                    }

            }).catch(function(xhr, status, error) {
                // manipulate the error response here
                alert("Error!" + xhr.status);
            })

        }
        
        userLoginWithCheckLogin=(e)=> {
            var _=this;  
            e.preventDefault();
            this.setState({
                txtLoginEmail:'',
                txtLoginPassword:'',
            });

        
                
                let errorCount = 0;
            
                if ($.trim($("#txtLoginEmail").val()).length == 0) {
                    $("#spnLoginEmailErrorMessage").html('Enter email Id');
                    $("#txtLoginEmail").css('border-color', 'red');
                    errorCount++;
                }
                if ($.trim($("#txtLoginPassword").val()).length == 0) {
                    $("#spnLoginPasswordErrorMessage").html('Enter password');
                    $("#txtLoginPassword").css('border-color', 'red');
                    errorCount++;
                }

                if ($.trim($("#txtLoginEmail").val()).length > 0) {
                    if (_.checkLoginMail($.trim($("#txtLoginEmail").val())) == false) {
                        errorCount++;
                    }
                }

                $("#txtLoginEmail").keydown(function () {
                    $("#spnLoginEmailErrorMessage").html('');
                    $("#txtLoginEmail").css('border-color', '');
                });

                $("#txtLoginPassword").keydown(function () {
                    $("#spnLoginPasswordErrorMessage").html('');
                    $("#txtLoginPassword").css('border-color', '');
                });

            

                if (errorCount > 0) {
                    return false;
                }
                let logmodel={
                'email':_.state.txtLoginEmail,
                'firstName': _.state.txtLoginPassword,
                }
                console.log(logmodel);

                let loginformData = new FormData();

                loginformData.append('email',_.state.txtLoginEmail);
                loginformData.append('password', _.state.txtLoginPassword);
                
                console.log(loginformData)
                let configSignIn = {
                    method: 'post',
                    url: signin_url,
                    data: loginformData,
                    headers: { 
                        'Authorization': `Basic ${encodedToken}`,
                        'Content-Type': `multipart/form-data`,
                        'Access-Control-Allow-Origin':`*`,
                        'Access-Control-Allow-Headers': `Origin, X-Requested-With, Content-Type, Accept`

                    
                    }
                };

                axios(configSignIn)
                .then(response=>{
                    if (response.data.status==="success"){
                        alert("Login Successful" );
                        $(".login_to_open").fadeIn();
                        $(".sign-up-main").fadeOut();
                        $(".forgot-main").fadeOut();
                        $(".sign-in-main").fadeOut();
                        _.resetCreateAccount();
                        _.resetUserLogin();
                        _.resetUserReset();
                        this.setState({
                            user:response.data.data
                        })
            
                    }
                    else if(response.data.status==="failed") {
                        alert(response.data.message,"Email or Password is incorrect");
                    }
                }).catch(function(xhr, status, error) {
                    // manipulate the error response here
                    alert("Error!" + xhr.status);
                });

        }



        checkmail=(email)=>  {
            var emailReg = new RegExp(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i);
            $("#txtemail").keydown(function () {
                $("#spnEmailIdErrorMessage").html('');
                $("#txtemail").css('border-color', '');
            });
            if (!emailReg.test(email)) {
                $("#spnEmailIdErrorMessage").html('Enter valid email id');
                $("#txtemail").css('border-color', 'red');
                return false;
            } else {
                $("#spnEmailIdErrorMessage").html('');
                $("#txtemail").css('border-color', '');
                return true;
            }
        }

        checkLoginMail=(email)=>  {
            var emailReg = new RegExp(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i);
            $("#txtLoginEmail").keydown(function () {
                $("#spnLoginEmailErrorMessage").html('');
                $("#txtLoginEmail").css('border-color', '');
            });

            if ($.trim($("#txtLoginEmail").val()).length == 0) {
                $("#spnLoginEmailErrorMessage").html('Enter emailId');
                $("#txtLoginEmail").css('border-color', 'red');
                return false;
            }

            if (!emailReg.test(email)) {
                $("#spnLoginEmailErrorMessage").html('Enter valid email id');
                $("#txtLoginEmail").css('border-color', 'red');
                return false;
            }
            else {
                $("#spnLoginEmailErrorMessage").html('');
                $("#txtLoginEmail").css('border-color', '');
                return true;
            }
        }
        resetUserReset=()=>{
            $("#txtforgotemail").val('');
        }
        resetCreateAccount=()=> {
            var _=this;
            $("#txtname").val('');
            $("#txtlastname").val('');
            $("#txtemail").val('');
            $("#txtPhoneNumber").val('');
            _.setState({
                txtPhoneNumber:''
            })
            $("#txtpassword").val('');

            $("#spnfirstNameErrorMessage").html('');
            $("#spnLastNameErrorMessage").html('');
            $("#spnEmailIdErrorMessage").html('');
            $("#spnPhoneErrorMessage").html('');
            $("#spnDOBErrorMessage").html('');
            $("#spnPasswordErrorMessage").html('');

            $("#txtname").css('border-color', '');
            $("#txtlastname").css('border-color', '');
            $("#txtemail").css('border-color', '');
            $("#txtPhoneNumber").css('border-color', '');
            $("#txtpassword").css('border-color', '');

        }

        resetUserLogin=()=> {
            $("#txtLoginEmail").val('');
            $("#txtLoginPassword").val('');

            $("#spnLoginEmailErrorMessage").html('');
            $("#spnLoginPasswordErrorMessage").html('');

            $("#txtLoginEmail").css('border-color', '');
            $("#txtLoginPassword").css('border-color', '');
        }

        Showdiv=()=> {
            $("#btnemail").show();
        } 
        render() {
                return (
                    <div>
                        <div className="sign-in-up">

                        {/* card1 */}
                        <div className="login_to_open">
                        <div className="sin-close" onClick="Showdiv()"><i className="fa fa-close"></i></div>
                            <div className='profile_container'>
                            <div className='profile_wrapper'>
                                <ul className="">
                                    <hr/>
                                    <li><a href="/account-settings">My Account</a></li>
                                    <hr/>
                                    <li><a href="/inbox">Messages</a></li>
                                    <hr/>
                                    <li><a href="/alerts">Notifications</a></li>
                                    <hr/> 
                                    <li><a href="/trips">Trips</a></li>
                                    <hr/>

                                    <li><a onClick="logout()">Log out</a></li>
                                    <hr/>
                                </ul>
                                </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>

                            {/* card2 */}
                        <form id="userRegistration" onSubmit={this.registerUserWithCheckvalidate}>
                        <div className="sign-up-main" style={{display: "none"}}>
                        <div className="sin-close" onClick="Showdiv()"><i className="fa fa-close"></i></div><div className="sin-close"><i className="fa fa-close"></i></div>
                        <div className="sin-close sin-close-sec"><i className="fa fa-close"></i></div>
                        <div className="sin-form">
                        <div className="sign-titl">Create an account</div>
                        <div className="new-account">Already have an account?  <a href="#" className="log-show">Sign In</a></div>
                        <div className="title-select">
                        <label>Title <span> *</span></label>
                        <div className="title-tab"  name="title" ><a className="ttab-active">Mr.</a><a>Ms</a><a>Mrs</a><a>Miss</a><a>Dr</a></div>
                        
                        </div>
                        <div className="form-group">
                        <div className="row">
                        <div className="col-6 pr-0">
                            <label>First Name<span> *</span></label>
                            <input className="s-txt" placeholder="Enter First Name" id="txtname" name="txtname" spellcheck="false" maxlength="25" value={this.state.txtname} onChange={this._handleChange}/>
                            <span className="vd" id="spnfirstNameErrorMessage"></span>
                        </div>
                        <div className="col-6">
                            <span className="vd" id="nm"></span>
                            <label>Last Name<span> *</span></label>
                            <input className="s-txt" placeholder="Enter Last Name" id="txtlastname" name="txtlastname" spellcheck="false" maxlength="25"value={this.state.txtlastname} onChange={this._handleChange}/>
                            <span className="vd" id="spnLastNameErrorMessage"></span>
                        </div>
                        </div>
                        </div>

                        <div className="form-group">
                        <label>Service Type</label>
                        <input type="checkbox" className="isCorporate" 
                        name="isCorporate" id="isCorporate" value={this.state.checked.toString()} onChange={e=>this.handlecheckboxChange(e)} 
                        defaultChecked={this.state.checked}/> 
                        <label className="check_box"style={{width:"90%",float:"right"}}>Please select if you are a corporate</label>
                        <span className="vd" id="spnAgreeErrorMessage"></span>
                        </div>

                        <div className="form-group">
                        <span className="vd" id="nm1"></span>
                        <label>Email<span> *</span><br/>
                        <span style={{color:"#02b7a4"}}> Please use a business email for corporate service</span></label>
                        <input className="s-txt" type="email" placeholder="Enter Email" id="txtemail" name="txtemail" spellCheck="false" value={this.state.txtemail} onChange={this._handleChange}/>
                        <span className="vd" id="spnEmailIdErrorMessage"></span>
                        </div>

                        
                        <div className="form-group">
                                    <label>Phone number<span> *</span></label>
                                    <div className="input-group">
                                <IntlTelInput
                                    inputClassName="txtPhoneNumber"
                                    preferredCountries={['ng','ke','gb']}
                                    // css={['intl-tel-input', 'form-control']}
                                    utilsScript={'utils.js'}
                                    fieldId="txtPhoneNumber"
                                    fieldName="txtPhoneNumber"

                                    onSelectFlag={(num, country) => {
                                        console.log('onSelectFlag', num, country);
                                    }}
                                    onPhoneNumberChange={(status, value, countryData, number, id) => {
                                        
                                        console.log('onPhoneNumberChange value', value);
                                        console.log('onPhoneNumberChange number', number);
                                        this.setState({txtPhoneNumber:number})

                                    }}
                                    onPhoneNumberBlur={(status, value, countryData, number, id) => {
                                        console.log('onPhoneNumberBlur value', value);
                                        console.log('onPhoneNumberBlur number', number);
                                    }}
                                    
                                    format
                                    formatOnInit={false} 
                                    //  separateDialCode
                                    />
                                    <span className="vd" id="spnPhoneErrorMessage"></span>
                        
                
                    </div>
                    </div>

            

                        <div className="form-group">
                        <div className="row">
                        <div className="col-6 pr-0">
                            <label>Gender<span> *</span></label>
                            <select id="ddlGender" name="ddlGender"className="form-control s-txt"value={this.state.ddlGender} onChange={this._handleChange}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Trans">Trans</option>
                            </select>
                            <span className="vd" id="spnGenderErrorMessage"></span>
                        </div>
                        <div className="col-6">
                            <div className="elem-control">
                                <label>Date of Birth<span> *</span></label>
                                <div className="input-group" id="div-dob">
                                <input type="date" value={this.state.txtUserRegistrationDOB} className="s-txt" placeholder="Enter Date of Birth" id="txtUserRegistrationDOB" name="txtUserRegistrationDOB"onChange={this._handleChange} /> 
                                    <span className="vd" id="spnDOBErrorMessage"></span>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="form-group">
                        <div className="vd" id="phn"></div>
                        <label>Password<span> *</span></label>
                        <input className="s-txt" type="password" placeholder="Enter Password" id="txtpassword" name="txtpassword" maxlength="25"  value={this.state.txtpassword} onChange={this._handleChange}/>
                        <span className="vd" id="spnPasswordErrorMessage"></span>
                        </div>
                        <div className="form-group">
                        <div onClick="chkagree()">
                        <input type="checkbox" className="check_box" id="chktc"/> <label className="check_box">I agree <span> *</span><a href="/Home/TermsAndConditions" target="_blank">T&amp;C</a></label>
                        <span className="vd" id="spnAgreeErrorMessage"></span>
                        </div>
                        </div>
                        <div className="form-group">
                        <input  id="registerUserWithCheckvalidate" type="submit" className="btn_yellow" value="Create an Account"/>
                        <span className="vd" id="crt"></span>
                        </div>
                        </div>
                        </div>
                        </form>
                        
                        {/* card3 */}
                        <div className="forgot-main">

        <div className="sin-close" onClick="Showdiv()"><i className="fa fa-close"></i></div>
        <div className="sin-form">
        <form id="userReset" /*onSubmit={userLoginReset}*/>

        <div className="sign-titl">Login/Signup </div>
        <div className="form-group">
        <div className="log-sin-label">Reset Password</div>
        <label>Email</label>
        <input type="email" placeholder="Enter Email" id="txtforgotemail" class="s-txt" onchange="checkmail2(this.value);" spellcheck="false"/>
                <div className="clearfix"></div>
                <div style={{color:"red"}} id="phnn"></div>

        </div>

        <div className="form-group">
        <input id="forgotUserLoginWithCheckLogin" type="submit" className="btn_yellow" value="Reset"/>
        </div>


        <div className="sign-tc">
        By proceeding, you agree to Fybomide Travel <a href="/Home/PrivacyPolicy" target="_blank">Privacy Policy</a>,
        <a href="#"> User Agreement</a> and <a href="/Home/TermsAndConditions" target="_blank">T&Cs</a>
        </div>
        </form>
        </div>


        <div className="new-account">New user? <a href="#" className="signup-show">Create an account</a></div>
        <div className="new-account">Go back to Login?  <a href="#" className="log-show">Sign In</a></div>


        </div>
        {/* card4 */}


                        <div className="sign-in-main">

                        <div className="sin-close" onClick="Showdiv()"><i className="fa fa-close"></i></div>
                        <div className="sin-form">
                        <form id="userLogin" onSubmit={this.userLoginWithCheckLogin}>

                        <div className="sign-titl">Login/Signup </div>
                        <div className="form-group">
                        <div className="log-sin-label">Login/Signup with Email</div>
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" id="txtLoginEmail" name="txtLoginEmail" spellcheck="false" className="s-txt"  value={this.state.txtLoginEmail} onChange={this._handleChange}/>
                        <span className="vd" id="spnLoginEmailErrorMessage"></span>
                        </div>

                        <div class="form-group">
                            <div class="vd" id="phn1"></div>
                            <label>Password</label>
                            <input type="password" placeholder="Enter Password" id="txtLoginPassword" name="txtLoginPassword" spellcheck="false" maxlength="25" class="s-txt"  value={this.state.txtLoginPassword} onChange={this._handleChange}/>
                            <span class="vd" id="spnLoginPasswordErrorMessage"></span>
                        </div>
                        <div className="form-group">
                        <input id="btnUserLoginWithCheckLogin" type="submit" className="btn_yellow" value="Login"/>
                        </div>
                        

                        <div className="sign-tc">
                        By proceeding, you agree to Fybomide Travel <a href="/Home/PrivacyPolicy" target="_blank">Privacy Policy</a>,
                        <a href="#"> User Agreement</a> and <a href="/Home/TermsAndConditions" target="_blank">T&Cs</a>
                        </div>
                    </form>
                        </div>
                        

                        <div className="new-account">New user? <a href="#" className="signup-show">Create an account</a></div>
                        <div className="new-account">Forgot Password? <a href="#" className="forgot-show">Reset</a></div>
                        
                        </div>
                        

                        </div>
                        

                    </div>
                )
            }
        }



        export default Signin_up;