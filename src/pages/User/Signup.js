import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify'
import Notifications,{ notify } from 'react-notify-toast'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from '../../components/Spinner'
import IntlTelInput from 'react-intl-tel-input';
import $, { event,click } from "jquery";
import 'react-intl-tel-input/dist/main.css';
import 'react-intl-tel-input/dist/components/utils';
import axios from 'axios'
import '../../components/Header.css';

const encodedToken = 'YWRtaW46OWYwZDgxYjE3NDIzOTdkNGMxMTNmNDRlMTM2NmE5OGM='; //Buffer.from(token).toString('base64');
const signup_url = 'https://demo.fybomidetravel.com/fybomide-31353973c9/api/users/signup.php';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            registrationError:'' , 
            sendingDetails: false,
        };
        this.registerUserWithCheckvalidate = this.registerUserWithCheckvalidate.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this.resetCreateAccount = this.resetCreateAccount.bind(this);
;

    }



    componentDidMount() {
        var _=this;
        $("#userRegistration .title-tab a").click(function () {
            $(".title-tab a").removeClass("ttab-active");
            $(this).addClass("ttab-active");
        });
    }
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
            txtpassword: '' ,
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


            if ($.trim(_.state.txtPhoneNumber).length === 0) {
                $("#spnPhoneErrorMessage").html('Enter phone number');
                $("#txtPhoneNumber").css('border-color', 'red');
                errorCount++;
            }

            if ($.trim(_.state.txtPhoneNumber) === false) {
            $("#spnPhoneErrorMessage").html('Enter a valid phone number');
            $("#txtPhoneNumber").css('border-color', 'red');
            errorCount++;
            }
            if ($.trim(_.state.ddlGender).length === 0) {
                $("#spnGenderErrorMessage").html('Select gender  type');
                $("#ddlGender").css('border-color', 'red');
                errorCount++;
                }
            if ($.trim(_.state.txtUserRegistrationDOB).length === 0) {
                $("#spnDOBErrorMessage").html('Select date of birth');
                $("#txtUserRegistrationDOB").css('border-color', 'red');
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
            $("#ddlGender").keydown(function () {
                $("#spnGenderErrorMessage").html('');
                $("#ddlGender").css('border-color', '');
            });
            $("#txtUserRegistrationDOB").keydown(function () {
                $("#spnDOBErrorMessage").html('');
                $("txtUserRegistrationDOB").css('border-color', '');
            });

            if (errorCount > 0) {
                return false;
            }
            this.setState({
                sendingDetails: true
            })
            
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
            var mytext=response.data.message
           
                if (response.data.status ==="success") {
                    toast(response.data.status+','+response.data.message, {
                        position: "bottom-center",
                        autoClose: 10000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        });

                    _.setState({
                        sendingDetails: false
                    })                        
                    _.resetCreateAccount();
                    window.location.href= "/sign-in"; 
                    console.log(mytext)
                }else if(response.data.status === "failed"){
                    toast.warn(response.data.status+','+response.data.message, {
                        position: "bottom-center",
                        autoClose: 10000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        });

                    _.setState({
                        sendingDetails: false
                    })

                    console.log(mytext)

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
            _.resetCreateAccount();
            _.setState({
                sendingDetails: false
            })
            // window.location.reload();

        })

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
    resetCreateAccount=()=> {
        var _=this;
        $("#txtname").val('');
        $("#txtlastname").val('');
        $("#txtemail").val('');
        $("#txtPhoneNumber").val('');
        _.setState({
            txtPhoneNumber:'',
            number:'',
            
        });
        $('input').val('')
        // $('input').intlTelInput('setCountry', 'myDefaultCountry' );
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


    render=()=>{
        const {sendingDetails}=this.state
        return (
            <section
                style={{
                    margin: "0",
                    padding:"0",
                    position: "relative",
                    top: "0",
                    height: "950px"
                }
                }>
            <div className="sign-in-up">
                 
                        <div className="sign-up-main" style={{display:"block"}}>
                      
                        <div className="sin-form">
                        <form id="userRegistration" onSubmit={this.registerUserWithCheckvalidate}>
                        <div className="sign-titl">Create an account</div>
                        <div className="new-account">Already have an account?  <a href="/sign-in" >Sign In</a></div>
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
                        <label>Corporate Service Type
                        </label>
                        <input type="checkbox" className="isCorporate  check_box" 
                        name="isCorporate" id="isCorporate" value={this.state.checked.toString()} onChange={e=>this.handlecheckboxChange(e)} 
                        defaultChecked={this.state.checked}/> 
                        <label className="check_box"style={{width:"90%",float:"right"}}>Please only select if you are a corporate</label>

                        </div>


                        <div className="form-group">
                        <span className="vd" id="nm1"></span>
                        <label>Email<span> *</span><br/>
                        {this.state.checked &&  <div className="corporatealert">
                        <label><span style={{color:"#02b7a4"}}> Please ensure you use a business email for corporate service</span></label>
                        </div>}
                        </label>
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
                            <select id="ddlGender" name="ddlGender"className="form-control s-txt"   value={this.state.ddlGender} onChange={this._handleChange}>
                                <option value=""   disabled>Gender</option>
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
                        <input type="checkbox" className="check_box" id="chktc"/> <label className="check_box">I agree <span> *</span><a href="/TermsAndConditions" target="_blank">T&amp;C</a></label>
                        <span className="vd" id="spnAgreeErrorMessage"></span>
                        </div>
                        </div>
                        <div className="form-group">
                        <button  id="registerUserWithCheckvalidate" type="submit" className="btn_yellow" value="Create an Account"
                        disabled={sendingDetails}>
                         {sendingDetails 
                             ? <Spinner size='lg' spinning='spinning' /> 
                             : "Create an Account"}
                        </button>
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
                        <span className="vd" id="crt"></span>
                        </div>
                        </form>
 
                        </div>
                        </div>
                        

            </div>
            </section>
        );
    }
}

Signup.propTypes = {

};

export default Signup;