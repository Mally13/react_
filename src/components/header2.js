import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import IntlTelInput from 'react-intl-tel-input';
import $ from "jquery";
// import '../FlightCommon'
import 'react-intl-tel-input/dist/main.css';
import 'react-intl-tel-input/dist/components/utils';
import DatePicker from './DatePicker'
import axios from 'axios'
// import SignUp from './SignUp'
import './Header.css';

const baseURL = "https://demo.fybomidetravel.com/fybomide-31353973c9/api/"
const token = require('../variables/keys.json');

class Header extends Component {
    constructor(props){
        super(props);
    // this.state = {
    //     // title: '',
    //     txtname: '',
    //     txtlastname: '',
    //     txtemail: '',
    //     number:'',
    //     ddlGender: '',
    //     txtUserRegistrationDOB: '',
    //     txtpassword: ''  ,      
    //   };
      
      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleChange = this._handleChange.bind(this);
    //   this.onPhoneNumberChange=this.onPhoneNumberChange.bind(this);

    

}
componentDidMount() {
window.addEventListener("scroll", this.handleScroll);

$(".navbar-toggler").click(function (e) {
    if ($("#navbarSupportedContent").is(":visible")) {
        $("body").css("overflow", "auto");
    }
    else { $("body").css("overflow", "hidden"); }
}); $(".log-toggle").click(function () {
    $(".acc-toggle").slideToggle();
});
$(".logg-continue").click(function () {
            if ($.trim($("#txtLoginEmail").val()).length == 0) {
                $("#spnLoginEmailErrorMessage").html('Enter emailId');
                $("#txtLoginEmail").css("border-color", "red");
                return false;
            }
            else {
                if (checkLoginMail($.trim($("#txtLoginEmail").val())) == false) {
                    return false;
                }
                else {
    
                    $.ajax({
                        url: "https://demo.fybomidetravel.com/fybomide-31353973c9/api/users/signin.php",
                        type: "GET",
                        headers: {Authorization:`YWRtaW46OWYwZDgxYjE3NDIzOTdkNGMxMTNmNDRlMTM2NmE5OGM=`},
                        data: { "emailId": $("#txtLoginEmail").val() },
                        dataType: "json",
                        success: function (data, status, xhr) {
    
                            if (data != null && data != "" && data.IsOperationSuccess == true) {
                                $("#btnemail").hide();
                                $(".log-hide").hide();
                                $(".pswd-btn").show();
                            }
                            else {
                                $("#spnLoginEmailErrorMessage").html('EmailId Not Exists !!');
                                $("#txtLoginEmail").css("border-color", "red");
                            }
                        },
                        error: function (xhr, status, error) {
                            alert("Error!" + xhr.status);
                        },
                    });
    
                }
            }
    });
$(".sng-btn").click(function () {
    $(".sign-in-up").fadeIn();
    resetCreateAccount();
    resetUserLogin();
});

$(".signup-show").click(function () {
    $(".sign-in-main").fadeOut();
    $(".sign-up-main").fadeIn();
    resetCreateAccount();
    resetUserLogin();
});

$(".log-show").click(function () {
    $(".sign-up-main").fadeOut();
    $(".sign-in-main").fadeIn();
    resetCreateAccount();
    resetUserLogin();
    $(".logg-continue").show();
    $(".log-hide").show();
    $(".pswd-btn").hide();
});

$(".sin-close").click(function () {
    resetUserLogin();
    resetCreateAccount();
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
    $("body").addClass("over-hidden")
});

$(".sin-close").click(function () {
    $("body").removeClass("over-hidden")
});

$("#userRegistration .title-tab a").click(function () {
    $(".title-tab a").removeClass("ttab-active");
    $(this).addClass("ttab-active");

});

resetCreateAccount();
resetUserLogin();
userLoginWithCheckLogin();
registerUserWithCheckvalidate();
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
  // Change state of input field so text is updated while typing
//   _handleChange(e) {
//     const value = e.target.value;

//     this.setState({
//       [e.target.name]: value,



//     });
//   }

registerUserWithCheckvalidate() {

    $("#registerUserWithCheckvalidate").click(function () {
        
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


        if ($.trim($("#txtPhoneNumber").number()).length == 0) {
            $("#spnPhoneErrorMessage").html('Enter phone number');
            $("#txtPhoneNumber").css('border-color', 'red');
            errorCount++;
        }

        if ($.trim($("#txtPhoneNumber").number()) == false) {
           $("#spnPhoneErrorMessage").html('Enter valid phone number');
           $("#txtPhoneNumber").css('border-color', 'red');
           errorCount++;
        }


        if ($.trim($("#txtemail").val()).length > 0) {
            if (checkmail($.trim($("#txtemail").val())) == false) {
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

        let model = {
            "Title": $(".ttab-active").text(),
            "FirstName": $.trim($("#txtname").val()),
            "LastName": $.trim($("#txtlastname").val()),
            "EmailId": $.trim($("#txtemail").val()),
            "MobileNumber": $.trim($("#txtPhoneNumber").number()),
            "DOB": $.trim($("#txtUserRegistrationDOB").val()),
            "Password": $.trim($("#txtpassword").val()),
            // "CountryCode": parseInt($("#countrycode").intlTelInput("getSelectedCountryData").dialCode),
            "Gender": $("#ddlGender").find("option:selected").val()

        }

        $.ajax({
            url: "https://demo.fybomidetravel.com/fybomide-31353973c9/api/users/signup.php",
            type: "POST",
            headers: {Authorization:`YWRtaW46OWYwZDgxYjE3NDIzOTdkNGMxMTNmNDRlMTM2NmE5OGM=` 
                     },
            dataType: "json",
            data: { userDetail: model },
            success: function (data, status, xhr) {
                if (data != null && data != undefined && data.IsOperationSuccess == true) {
                    if (data.Status.message == "OK") {
                        alert("User register successfully");
                        $(".sign-in-up").fadeOut();
                        $.ajax({
                            url: "https://demo.fybomidetravel.com/fybomide-31353973c9/api/users/signin.php",
                            headers: {Authorization:`YWRtaW46OWYwZDgxYjE3NDIzOTdkNGMxMTNmNDRlMTM2NmE5OGM=`},
                            type: "GET",
                            data: { "emailId": data.Data[0].EmailId, "password": $.trim($("#txtpassword").val()) },
                            dataType: "json",
                            success: function (data, status, xhr) {
                                if (data != null && data != "") {
                                    resetUserLogin();
                                    resetCreateAccount();
                                    alert("Login successfully");
                                    $(".sin-close").click();
                                    $(".sin-close-sec").click();
                                    window.location.reload();
                                }
                                else {
                                    alert("Email or Password is incorrect");
                                }
                            },
                            error: function (xhr, status, error) {
                                alert("Error!" + xhr.status);
                            },
                        });
                    }
                    else {
                        alert(data.Status.message);
                    }
                }
                else {
                    alert("Error, Try again");
                }
                return true;
            },
            error: function (xhr, status, error) {
                console.log("Error! " + xhr.status);
            },
        });
    })
}
//   _handleSignInSubmit(e) {
//     e.preventDefault();
//     this.setState({
//         // title: '',
//         txtname: '',
//         txtlastname: '',
//         txtemail: '',
//         txtPhoneNumber: '',
//         ddlGender: '',
//         txtUserRegistrationDOB: '',
//         txtpassword: ''    
//     }); 
    
    
//     let model ={
//     'title': $(".ttab-active").text(),
//     'firstName': this.state.txtname,
//     'lastName': this.state.txtlastname,
//     'phone': this.state.txtPhoneNumber,
//     'email': this.state.txtemail,
//     'password': this.state.txtpassword,
//     'gender': this.state.ddlGender,
//     'dob': this.state.txtUserRegistrationDOB
//     }
//     console.log(model)
//     axios.post(`${baseURL}/users/signup.php`,{
//         data:{
//             data: model 
//         },
//         headers: {
//             Authorization:`Basic ${token.accessToken}` 
//         }
//     }).then(function(data, status, xhr){
//         // manipulate the response here
//         if(data != null && data != undefined && data.IsOperationSuccess == true) {
//             if (data.Status.message == "OK") {
//                alert("User registration successfull!");
//                 $(".sign-in-up").fadeOut();
//                     axios.get(`${baseURL}/users/signin.php`,{
//                         data: { 'email': data.Data[0].EmailId, "password": $.trim($("#txtpassword").val()) },
//                         headers: {
//                             Authorization:`Basic${token.accessToken}` 
//                         }
//                     }).then(function(data, status, xhr){
//                             if (data != null && data != "") {
//                                 // resetUserLogin();
//                                 // resetCreateAccount();
//                                 alert("Login successfully");
//                                 $(".sin-close").click();
//                                 $(".sin-close-sec").click();
//                                 window.location.reload();
//                             }
//                             else {
//                                 alert("Email or Password is incorrect");
//                             }
//                         }).catch(function(xhr, status, error) {
//                             // manipulate the error response here
//                             alert("Error!" + xhr.status);
//                         });
//                 }
//                 else {
//                     alert(data.Status.message);
//                 }
//             }
//             else {
//                 alert("Error, Try again");
//             }
//             return true;
//         }).catch(function(xhr, status, error) {
//             // manipulate the error response here
//             alert("Error!" + xhr.status);
//         })
//     }

userLoginWithCheckLogin() {
        $("#btnUserLoginWithCheckLogin").click(function () {
            let errorCount = 0;
          
            if ($.trim($("#txtLoginEmail").val()).length == 0) {
                $("#spnLoginEmailErrorMessage").html('Enter emailId');
                $("#txtLoginEmail").css('border-color', 'red');
                errorCount++;
            }
            if ($.trim($("#txtLoginPassword").val()).length == 0) {
                $("#spnLoginPasswordErrorMessage").html('Enter password');
                $("#txtLoginPassword").css('border-color', 'red');
                errorCount++;
            }
    
            if ($.trim($("#txtLoginEmail").val()).length > 0) {
                if (checkLoginMail($.trim($("#txtLoginEmail").val())) == false) {
                    errorCount++;
                }
            }
    
            $("#txtLoginEmail").keydown(function () {
                $("#spnLoginEmailErrorMessage").html('');
                $("#txtLoginEmail").css('border-color', '');
            });
    
           
    
            if (errorCount > 0) {
                return false;
            }
            let userEmailId = $.trim($("#txtLoginEmail").val());
            let loginPassword = $.trim($("#txtLoginPassword").val());
    
            $.ajax({
                url: "https://demo.fybomidetravel.com/fybomide-31353973c9/api/users/signin.php",
                type: "GET",
                headers: {Authorization:`YWRtaW46OWYwZDgxYjE3NDIzOTdkNGMxMTNmNDRlMTM2NmE5OGM=`},
                data: { "emailId": userEmailId, "password": loginPassword },
                dataType: "json",
                success: function (data, status, xhr) {
                    
                    if (data != null && data != "" && data.IsOperationSuccess == true) {
                        resetUserLogin();
                        resetCreateAccount();
                        alert("Login successfully");
                        $(".sin-close").click();
                        $(".sin-close-sec").click();
                        window.location.reload();
                    }
                    else {
                        alert("Email or Password is incorrect");
                    }
                },
                error: function (xhr, status, error) {
                    alert("Error!" + xhr.status);
                },
            });
            return true;
        });
    }

phonenumber(inputtxt) {

        var key = [event.keyCode || event.which];
        var keychar = String.fromCharCode([event.keyCode || event.which]);
        keventychar = keychar.toLowerCase();
        checkString = "0123456789";
        if ((key == null) || (key == 0) || (key == 8) ||
            (key == 9) || (key == 13) || (key == 27) || (key == 46)) {
            $("#spnPhoneErrorMessage").html('');
            $("#txtPhoneNumber").css('border-color', '');
            return event.returnValue = true;
    
        }
        else if (((checkString).indexOf(keychar) > -1)) {
            $("#spnPhoneErrorMessage").html('');
            $("#txtPhoneNumber").css('border-color', '');
            return event.returnValue = true;
        }
        else {
            $("#txtPhoneNumber").css('border-color', 'red');
            $("#txtPhoneNumber").val('');
            $("#spnPhoneErrorMessage").html('Enter valid phone number');
            return event.returnValue = false;
        }
    
    }

    checkmail(email) {
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
checkLoginMail(email) {
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

    resetCreateAccount() {
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
resetUserLogin() {
        $("#txtLoginEmail").val('');
        $("#txtLoginPassword").val('');
    
        $("#spnLoginEmailErrorMessage").html('');
        $("#spnLoginPasswordErrorMessage").html('');
    
        $("#txtLoginEmail").css('border-color', '');
        $("#txtLoginPassword").css('border-color', '');
    }
    
Showdiv() {
        $("#btnemail").show();
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
                <div className="sign-in-up">
                <form id="userRegistration" /*onSubmit={this._handleSubmit} */ method="post">
                <div className="sign-up-main" style={{display: "none"}}>
                <div className="sin-close" onclick="Showdiv()"><i className="fa fa-close"></i></div><div className="sin-close"><i className="fa fa-close"></i></div>
                <div className="sin-close sin-close-sec"><i className="fa fa-close"></i></div>
                <div className="sin-form">
                <div className="sign-titl">Create an account</div>
                <div className="new-account">Already have an account?  <a href="#" className="log-show">Sign In</a></div>
                <div className="title-select">
                <label>Title <span> *</span></label>
                <div className="title-tab"><a className="ttab-active">Mr.</a><a>Ms</a><a>Mrs</a><a>Miss</a><a>Dr</a></div>
                
                </div>
                <div className="form-group">
                <div className="row">
                <div className="col-6 pr-0">
                    <label>First Name<span> *</span></label>
                    <input className="s-txt" placeholder="Enter First Name" id="txtname" name="txtname" spellcheck="false" maxlength="25"/* value={this.state.txtname} onChange={this._handleChange}*//>
                    <span className="vd" id="spnfirstNameErrorMessage"></span>
                </div>
                <div className="col-6">
                    <span className="vd" id="nm"></span>
                    <label>Last Name<span> *</span></label>
                    <input className="s-txt" placeholder="Enter Last Name" id="txtlastname" name="txtlastname" spellcheck="false" maxlength="25"/*value={this.state. txtlastname} onChange={this._handleChange}*//>
                    <span className="vd" id="spnLastNameErrorMessage"></span>
                </div>
                </div>
                </div>
                <div className="form-group">
                <span className="vd" id="nm1"></span>

                <label>Email<span> *</span></label>
                <input className="s-txt" type="email" placeholder="Enter Email" id="txtemail" name="txtemail" spellcheck="false"/*value={this.state.txtemail} onChange={this._handleChange}*//>
                <span className="vd" id="spnEmailIdErrorMessage"></span>
                </div>
                <div className="form-group">
                            <label>Phone number<span> *</span></label>
                            <div className="input-group">
                            <IntlTelInput
                            

          inputClassName="txtPhoneNumber"
          preferredCountries={['ng','ke','gb']}
          css={['intl-tel-input', 'form-control']}
          utilsScript={'libphonenumber.js'}
          fieldId="txtPhoneNumber"
          fieldName="txtPhoneNumber"

          onSelectFlag={(num, country) => {
            console.log('onSelectFlag', num, country);
          }}
          onPhoneNumberChange={(status, value, countryData, number, id) => {
            this.setState({txtPhoneNumber:number})
            console.log('onPhoneNumberChange value', value);
            console.log('onPhoneNumberChange number', number);
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
                    <select id="ddlGender" name="ddlGender"className="form-control s-txt"/*value={this.state.ddlGender} onChange={this._handleChange}*/>
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
                <input className="s-txt" type="password" placeholder="Enter Password" id="txtpassword" name="txtpassword" maxlength="25"/*value={this.state.txtpassword} onChange={this._handleChange}*//>
                <span className="vd" id="spnPasswordErrorMessage"></span>
                </div>
                <div className="form-group">
                <div onclick="chkagree()">
                <input type="checkbox" className="check_box" id="chktc"/> <label className="check_box">I agree <span> *</span><a href="/Home/TermsAndConditions" target="_blank">T&amp;C</a></label>
                <span className="vd" id="spnAgreeErrorMessage"></span>
                </div>
                </div>
                <div className="form-group">
                <input onclick="registerUserWithCheckvalidate()" id="registerUserWithCheckvalidate" type="submit" className="btn_yellow" value="Create an Account"/>
                <span className="vd" id="crt"></span>
                </div>
                </div>
                </div>
                <input name="__RequestVerificationToken" type="hidden" value="YWRtaW46OWYwZDgxYjE3NDIzOTdkNGMxMTNmNDRlMTM2NmE5OGM="/>
                
                </form>

                <div className="sign-in-main">
                <div className="sin-close" onclick="Showdiv()"><i className="fa fa-close"></i></div>
                <div className="sin-form">
                <div className="sign-titl">Login/Signup </div>

                <div className="form-group log-hide">
                <div className="log-sin-label">Login/Signup with Email</div>
                <input type="email" placeholder="Enter Email" id="txtLoginEmail" spellcheck="false" className="s-txt" onchange="checkLoginMail(this.value);"/>
                <span className="vd" id="spnLoginEmailErrorMessage"></span>
                </div>
                <div className="form-group logg-continue">
                <input type="button" className="btn_yellow" value="Continue" id="btnemail"/>
                </div>
                <div className="form-group pswd-btn">
                <div className="vd" id="phn1"></div>
                <label>Password</label>
                <input type="password" placeholder="Enter Password" id="txtLoginPassword" spellcheck="false" maxlength="25" className="s-txt"/>
                <span className="vd" id="spnLoginPasswordErrorMessage"></span>
                </div>
                <div className="form-group pswd-btn">
                <input id="btnUserLoginWithCheckLogin" type="button" className="btn_yellow" value="Continue"/>
                </div>

                <div className="sign-tc">
                By proceeding, you agree to Fybomidel Travel <a href="/Home/PrivacyPolicy" target="_blank">Privacy Policy</a>,
                <a href="#"> User Agreement</a> and <a href="/Home/TermsAndConditions" target="_blank">T&Cs</a>
                </div>
                <div className="new-account">New user? <a href="#" className="signup-show">Create an account</a></div>
                </div>
                </div>

                </div>
                <div className="login_top_open" id="login_top_open1">
                    <div id="forgot" className="log_box_top" style={{display:"none"}}>
                        <div id="fb-root"></div>
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" id="txtforgotemail" onchange="checkmail2(this.value);" spellcheck="false"/>
                        <div className="clearfix"></div>
                        <div style={{color:"red"}} id="phnn"></div>
                        <input type="button" className="btn_yellow" value="Back" onclick="showuser('Login')" style={{width:"48%"}}/>
                        <input type="button" className="btn_yellow pull-right" value="Submit" onclick="CheckForgot()" style={{width:"48%"}}/>
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
                            <li><a onclick="logout()">Sign out</a></li>
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
