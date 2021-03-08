import React, { Component } from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import Tabs from 'react-bootstrap/Tabs';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tab from 'react-bootstrap/Tab';
import Flights from './Flights'
import Hotels from './Hotels'
import Cars from './Cars'
class Home extends Component {


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
      
    </div> 



    );
  }
}


export default Home;