import React from 'react';
import  "./Home/Home.css"

const NotFound = () => {
    return (
          
<div class="payment-decline">
<img src="/images/404.png" alt="error404-img"/>
    <strong>Page Not Found</strong>
    <p>
        When communicating via HTTP, a server is required to respond to a request, such as a web browser
        <br/>request for a web page, with a numeric response code and an optional, mandatory, or disallowed.
    </p>
    <a  href="/">Search Again</a>
</div>
       
    );
}

export default NotFound;
