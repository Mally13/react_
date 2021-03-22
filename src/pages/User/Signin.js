import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $, { event,click } from "jquery";
import { ToastContainer, toast } from 'react-toastify'
import 'react-intl-tel-input/dist/main.css';
import 'react-intl-tel-input/dist/components/utils';
import axios from 'axios'
import '../../components/Header.css';


const encodedToken = 'YWRtaW46OWYwZDgxYjE3NDIzOTdkNGMxMTNmNDRlMTM2NmE5OGM='; //Buffer.from(token).toString('base64');
const signin_url = 'https://demo.fybomidetravel.com/fybomide-31353973c9/api/users/signin.php';

class Signin extends Component {
    constructor(props) {
        super(props);
            this.state = {
                txtLoginEmail:'',
                txtLoginPassword:'',
    
            };
            this._handleChange = this._handleChange.bind(this);
            this.resetUserLogin = this.resetUserLogin.bind(this);
            this.resetUserReset = this.resetUserReset.bind(this);
            this.userLoginWithCheckLogin = this.userLoginWithCheckLogin.bind(this);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }
    _handleChange=(e)=> {
        const value = e.target.value;

        this.setState({
        [e.target.name]: value
        });
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
                    toast(response.data.status+','+response.data.message, {
                        position: "bottom-center",
                        autoClose: 10000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        });

                    _.resetCreateAccount();
                    _.resetUserLogin();
                    _.resetUserReset();
                    this.setState({
                        user:response.data.data
                    })
        
                }
                else if(response.data.status==="failed") {
                    toast.warn(response.data.status+','+response.data.message, {
                        position: "bottom-center",
                        autoClose: 10000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        });
                }
            }).catch(function(xhr, status, error) {
                // manipulate the error response here
                toast.error('Error, Please  Try again !', {
                    position: "bottom-center",
                    autoClose: 10000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    });
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
            <section  className="home-middle">
            <div className="sign-in-up">
                                        <div className="sign-in-main">


<div className="sin-form">
<form id="userLogin" onSubmit={this.userLoginWithCheckLogin}>

<div className="sign-titl"> Sign In </div>
<div className="form-group">
<div className="log-sin-label">Login with Email</div>
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
<ToastContainer
      position="bottom-center"
      autoClose={10000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
</div>


<div className="sign-tc">
By proceeding, you agree to Fybomide Travel <a href="/Home/PrivacyPolicy" target="_blank">Privacy Policy</a>,
<a href="#"> User Agreement</a> and <a href="/Home/TermsAndConditions" target="_blank">T&Cs</a>
</div>
</form>
 
</div>


<div className="new-account">New user? <a href="/sign-up" className="signup-show">Create an account</a></div>
<div className="new-account">Forgot Password? <a href="/reset-account" className="forgot-show">Reset</a></div>

</div>



            </div>
            </section>
        );
    }
}

Signin.propTypes = {

};

export default Signin;