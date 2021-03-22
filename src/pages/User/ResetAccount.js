import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ResetAccount extends Component {
    constructor(props) {
        super(props)

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

    render() {
        return (
            <section  className="home-middle">
            <div className="sign-in-up">
<div className="forgot-main">

<div className="sin-form">
<form id="userReset" /*onSubmit={userLoginReset}*/>

<div className="sign-titl">Reset Password </div><br/>
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


<div className="new-account">New user? <a href="/sign-up" className="signup-show">Create an account</a></div>
<div className="new-account">Go back to Login?  <a href="/sign-in" className="log-show">Sign In</a></div>


</div>


            </div>
            </section>
        )
    }
}

ResetAccount.propTypes = {

}

export default ResetAccount;