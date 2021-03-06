import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IntlTelInput from 'react-intl-tel-input';
import axios from 'axios'
import 'react-intl-tel-input/dist/main.css';
import 'react-intl-tel-input/dist/components/utils';
import DatePicker from './DatePicker'
// import axios from "Axios";


const baseURL = "https://demo.fybomidetravel.com/fybomide-31353973c9/api"
const keys = require('../variables/keys.json')
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // value:''
        }
        
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }
    handleSubmit = (event) => {  
        console.log("Form Submit")
        event.preventDefault();
        // axios.post(`${baseURL}/users/signup.php`,{
        // headers: {
        //     Authorization: `Bearer ${keys.accessToken}`
        // },
        //  // We convert the React state to JSON and send it as the POST body
        //     body: JSON.stringify(this.state)
        //   }).then(function(response) {
        //     console.log(response)
        //     return response.json();
        //   }).then(console.log).catch(console.log);
        // event.preventDefault();
        // alert('Submitted: ' + this.state); 
    }
    
    // handleSubmit(event) {
    //     event.preventDefault();
      
    //     if(this.validate()){
    //         console.log(this.state);
      
    //         let input = {};
    //         input["txtname"] = "";
    //         input["txtlastname"] = "";
    //         input["txtemail"] = "";
    //         input["txtPhoneNumber"] = "";
    //         input["txtGende"] = "";
    //         input["txtUserRegistrationDOB"] = "";
    //         input["txtpassword"] = "";
    //         this.setState({input:input});
      
    //         alert('Demo Form is submited');
    //     }
    //   }
    

    render() {
        return (
        <>
            <form id="userRegistration" method="post" >
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
                <input className="s-txt" placeholder="Enter First Name" id="txtname" name="txtname" spellcheck="false" maxlength="25"/>
                <span className="vd" id="spnfirstNameErrorMessage"></span>
            </div>
            <div className="col-6">
                <span className="vd" id="nm"></span>
                <label>Last Name<span> *</span></label>
                <input className="s-txt" placeholder="Enter Last Name" id="txtlastname" name="txtlastname" spellcheck="false" maxlength="25"/>
                <span className="vd" id="spnLastNameErrorMessage"></span>
            </div>
            </div>
            </div>
            <div className="form-group">
            <span className="vd" id="nm1"></span>

            <label>Email<span> *</span></label>
            <input className="s-txt" type="email" placeholder="Enter Email" id="txtemail" name="txtemail" onchange="checkmail(this.value);" spellcheck="false"/>
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
        console.log('onPhoneNumberChange value', value);
        console.log('onPhoneNumberChange number', number);
      }}
      onPhoneNumberBlur={(status, value, countryData, number, id) => {
        console.log('onPhoneNumberBlur value', value);
        console.log('onPhoneNumberBlur number', number);
      }}
      format
      formatOnInit={false}
    //   separateDialCode
    />
<span className="vd" id="spnPhoneErrorMessage"></span>
             
     
        </div>
        </div>

 

            <div className="form-group">
            <div className="row">
            <div className="col-6 pr-0">
                <label>Gender<span> *</span></label>
                <select id="ddlGender" name="txtgender"className="form-control s-txt">
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
                        <DatePicker/>
                        {/* <input type="date" value={this.state.birthDate} className="s-txt"  id="txtUserRegistrationDOB" name="txtUserRegistrationDOB"onChange={this.handleChange}/> */}
                        <span className="vd" id="spnDOBErrorMessage"></span>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div className="form-group">
            <div className="vd" id="phn"></div>
            <label>Password<span> *</span></label>
            <input className="s-txt" type="password" placeholder="Enter Password" id="txtpassword" name="txtpassword" maxlength="25"/>
            <span className="vd" id="spnPasswordErrorMessage"></span>
            </div>
            <div className="form-group">
            <div onclick="chkagree()">
            <input type="checkbox" className="check_box" id="chktc"/> <label className="check_box">I agree <span> *</span><a href="/Home/TermsAndConditions" target="_blank">T&amp;C</a></label>
            <span className="vd" id="spnAgreeErrorMessage"></span>
            </div>
            </div>
            <div className="form-group">
            <input id="registerUserWithCheckvalidate" type="submit" className="btn_yellow" value="Create an Account"/>
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
              </>

            

          
 
        )
    }
}


export default SignUp;