import React, { Component } from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import Tabs from 'react-bootstrap/Tabs';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Social from './Social';
import Tab from 'react-bootstrap/Tab';
import Flights from './Flights'
import Hotels from './Hotels'
import Cars from './Cars'
class Home extends Component {
  constructor(props){
    super(props);
    this.handleSuccessfulAuth=this.handleSuccessfulAuth.bind(this);
    
}

handleSuccessfulAuth(data){
    //todo  update  parent  component
    this.props.history.push("/dashboard");

}
  render() {
    
    return (  
      <div>
        
        <Tabs defaultActiveKey="flights" id="noanim-tab-example">
        <Tab eventKey="flights" title="Flights">
          
          <Flights/>
          
        </Tab>
        <Tab eventKey="hotels" title="Hotels">
          <Hotels />
        </Tab>
        <Tab eventKey="cars" title="Cars" >
          <Cars/>
        </Tab>
      </Tabs>
      <Social/>
      

      
    </div> 



    );
  }
}


export default Home;