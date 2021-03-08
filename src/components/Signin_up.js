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
            checked:''     
          };
          
          this.registerUserWithCheckvalidate = this.registerUserWithCheckvalidate.bind(this);
          this._handleChange = this._handleChange.bind(this);
          this.resetUserLogin = this.resetUserLogin.bind(this);
          this.resetCreateAccount = this.resetCreateAccount.bind(this);
          this.userLoginWithCheckLogin = this.userLoginWithCheckLogin.bind(this);

    
        }

    


componentDidMount() {
        var _=this;
$(".navbar-toggler").click(function (e) {
    if ($("#navbarSupportedContent").is(":visible")) {
        $("body").css("overflow", "auto");
    }
    else { $("body").css("overflow", "hidden"); }
});
//login sign up popup
$(".logg-continue").click(function () {
    
    if ($.trim(_.state.txtLoginEmail).length == 0) {
        $("#spnLoginEmailErrorMessage").html('Enter emailId');
        $("#txtLoginEmail").css("border-color", "red");
        return false;
    }
    else {
        
        if ( _.checkLoginMail($.trim(_.state.txtLoginEmail)) == false) {
            $("#spnLoginEmailErrorMessage").html('Please Enter a valid email!');
            $("#txtLoginEmail").css("border-color", "red");
        }
        else {
                $("#btnemail").hide();
                $(".log-hide").hide();
                $(".pswd-btn").show();
              }
         }
});
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
    $(".sign-up-main").fadeIn();
    _.resetCreateAccount();
    _.resetUserLogin();
  });
  $(".log-show").click(function () {
    $(".sign-up-main").fadeOut();
    $(".sign-in-main").fadeIn();
    _.resetCreateAccount();
    _.resetUserLogin();
    $(".logg-continue").show();
    $(".log-hide").show();
    $(".pswd-btn").hide();
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
//   $("#isCorporate").on('change', function() {
//     if ($(this).is(':checked')) {
//       $(this).attr('value', 'true');
//     } else {
//       $(this).attr('value', 'false');
//     }
// });

// this.resetCreateAccount();
// this.resetUserLogin();
// this.userLoginWithCheckLogin();
// this.registerUserWithCheckvalidate(e);
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
    // regformData.append( 'countryCode',_.state.txtPhoneNumber.dialCode)

    console.log(regformData);


    let configSignUp = {
        method: 'post',
        url: signup_url,
        data: regformData,
        headers: { 
            'Authorization': `Basic ${encodedToken}`,
            'Content-Type': 'multipart/form-data'
          }
      };
      axios(configSignUp)
      .then(function (response) {
        // document.getElementById("response").innerHTML = JSON.stringify(response);
        if(response != null ) {
            if (response.status == "success") {
               alert("User registration successfull!");
                $(".sign-in-up").fadeOut();

                let loginformData = new FormData();

                loginformData.append("email", _.state.txtLoginEmail);
                loginformData.append("password", _.state.txtLoginPassword);
             
                console.log(loginformData);

                let configSignIn = {
                    method: 'post',
                    url: signin_url,
                    data: loginformData,
                    headers: { 
                        'Authorization': `Basic ${encodedToken}`,
                        'Content-Type': 'multipart/form-data'
                      }
                  };
   
                  axios(configSignIn)
                  .then(function (response) {
                   document.getElementById("response").innerHTML = JSON.stringify(response.data);
                   if (response.status="success") {
                        _.resetUserLogin();
                        _.resetCreateAccount();
                        alert("Login successful");
                        $(".sin-close").click();
                        $(".sin-close-sec").click();
                        window.location.reload();
                    }
                    else {
                        alert("Email or Password is incorrect");
                    }
                }).catch(function(xhr, status, error) {
                    // manipulate the error response here
                    alert("Error!" + xhr.status);
                });
            }
            else {
                alert(response.status );
            }
        }
        else {
            alert("Error, Try again");
        }
        return true;
    }).catch(function(xhr, status, error) {
        // manipulate the error response here
        alert("Error!" + xhr.status);
    })

}
  
userLoginWithCheckLogin=()=> {
    this.setState({
        txtLoginEmail:'',
        txtLoginPassword:'',
    })
    var _=this;
    $("#btnUserLoginWithCheckLogin").click(function () {
        
        let errorCount = 0;
      
        if ($.trim(_.state.txtLoginEmail).length == 0) {
            $("#spnLoginEmailErrorMessage").html('Enter email Id');
            $("#txtLoginEmail").css('border-color', 'red');
            errorCount++;
        }
        if ($.trim(_.state.txtLoginPassword).length == 0) {
            $("#spnLoginPasswordErrorMessage").html('Enter password');
            $("#txtLoginPassword").css('border-color', 'red');
            errorCount++;
        }

        if ($.trim(_.state.txtLoginEmail).length > 0) {
            if (_.checkLoginMail($.trim(_.txtLoginEmail)) == false) {
                errorCount++;
            }
        }

        $("#txtLoginEmail").keydown(function () {
            $("#spnLoginEmailErrorMessage").html('');
            $("#txtLoginEmail").css('border-color', '');
        });

       

        if (errorCount > 0) {
            return false;
        }else{

        let loginformData = new FormData();

        loginformData.append("email",_.state.txtLoginEmail);
        loginformData.append("password", _.state.txtLoginPassword);
        
        console.log(loginformData)
        let configSignIn = {
            method: 'post',
            url: signin_url,
            data: loginformData,
            headers: { 
                'Authorization': `Basic ${encodedToken}`,
                'Content-Type': 'multipart/form-data'
              }
          };

          axios(configSignIn)
          .then(function (response,status,xhr) {
            // document.getElementById("response").innerHTML = JSON.stringify(response);
            if (response.status="success") {
                _.resetUserLogin();
                _.resetCreateAccount();
                alert("Login successfully");
                $(".sin-close").click();
                $(".sin-close-sec").click();
                window.location.reload();
            }
            else {
                alert("Email or Password is incorrect");
            }
        }).catch(function(xhr, status, error) {
            // manipulate the error response here
            alert("Error!" + xhr.status);
        });
        return true;
        }
    
    
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
resetCreateAccount=()=> {
    $("#txtname").val('');
    $("#txtlastname").val('');
    $("#txtemail").val('');
    $("#txtPhoneNumber").val('');
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
                name="isCorporate" id="isCorporate" onChange={e=>this.handlecheckboxChange(e)} 
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
                            css={['intl-tel-input', 'form-control']}
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


               
                <div className="sign-in-main">
                <div className="sin-close" onClick="Showdiv()"><i className="fa fa-close"></i></div>
                <div className="sin-form">
                <form id="userLogin" onSubmit={this.userLoginWithCheckLogin}>
                <div className="sign-titl">Login/Signup </div>
                <div className="form-group log-hide">
                <div className="log-sin-label">Login/Signup with Email</div>
                <input type="email" placeholder="Enter Email" id="txtLoginEmail" name="txtLoginEmail" spellcheck="false" className="s-txt"  value={this.state.txtLoginEmail} onChange={this._handleChange}/>
                <span className="vd" id="spnLoginEmailErrorMessage"></span>
                </div>

                <div className="form-group logg-continue">
                <input type="button" className="btn_yellow" value="Continue" id="btnemail"/>
                </div>

                <div class="form-group pswd-btn">
                    <div class="vd" id="phn1"></div>
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" id="txtLoginPassword" spellcheck="false" maxlength="25" class="s-txt"  value={this.state.txtLoginPassword} onChange={this._handleChange}/>
                    <span class="vd" id="spnLoginPasswordErrorMessage"></span>
                </div>
                <div className="form-group pswd-btn">
                <input id="btnUserLoginWithCheckLogin" type="button" className="btn_yellow" value="Continue"/>
                </div>
                

                <div className="sign-tc">
                By proceeding, you agree to Fybomide Travel <a href="/Home/PrivacyPolicy" target="_blank">Privacy Policy</a>,
                <a href="#"> User Agreement</a> and <a href="/Home/TermsAndConditions" target="_blank">T&Cs</a>
                </div>
                </form>
                </div>
                

                <div className="new-account">New user? <a href="#" className="signup-show">Create an account</a></div>
                
                </div>
                </div>
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

            </div>
        )
    }
}



export default Signin_up;