import React from   "react";

const  NavButton=   ({onClick})  =>(
    <button className="log-toggle sng-btn"  onClick={onClick}>
    <p className="ls_desk">Account</p>
    <span className="text_sign d-none d-sm-none d-lg-block">
        <span className="sign-icon"></span>
        <i class="fa fa-bars" aria-hidden="true" style={{color:"#a7a2a2",marginLeft:"10px"}}></i>

        <span id="sign">
         <i className="fa fa-angle-down bar-ioc"></i>
        </span>
    </span>
</button>
)

export default NavButton;