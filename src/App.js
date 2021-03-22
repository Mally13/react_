import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';
import './App.css';
import $,{jQuery}  from 'jquery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import NotFound from './pages/NotFound';
import Home from './pages/Home/Home';
import AboutUs from './pages/About Us/About-us'
import CustomerSupport from './pages/Support/CustomerSupport'
import Header from './components/Header';
import Dashboard from './pages/User/Dashboard'
import Signup from './pages/User/Signup'
import  Signin from './pages/User/Signin'
import Spinner from './components/Spinner'
import Notifications from './pages/User/Notifications'
import  Trips from './pages/User/Trips'
import Footer from './components/Footer';
import './loader'
import { Component } from 'react';
import { render } from '@testing-library/react';
import ResetAccount from './pages/User/ResetAccount';
import Confirm from './pages/Support/Confirm';

export default  class App extends Component{
  constructor(){
    super();
    this.state={
      loading: true,
      loggedInStatus:"NOT_LOGGED_IN",
      user:{}
    }
  }
  componentDidMount=()=>{
    this.setState({ loading: false })
  }

render=()=>{
const content = () => {
    if (this.state.loading) {
      return <Spinner size='8x' spinning='spinning' />
    }
  return (
     <BrowserRouter>
        <Switch>
          <Route exact
          path='/' 
          render={props=>(
          <Home {...props}  loggedInStatus={this.state.loggedInStatus}/>
          )}
          />
          
          <Route exact  path='/customer-support' 
          render={props=>(
          <CustomerSupport {...props}  loggedInStatus={this.state.loggedInStatus}/>
          )}
           /> 
          <Route exact path='/about-us'
          render={props=>(
          <AboutUs {...props}  loggedInStatus={this.state.loggedInStatus}/>
          )}
          />
          <Route exact  path='/account-settings' 
          render={props=>(
          <Dashboard {...props}  loggedInStatus={this.state.loggedInStatus}/>
          )}
         />
          <Route exact  path='/confirm/:id' 
          render={props=>(
          <Confirm {...props}  loggedInStatus={this.state.loggedInStatus}/>
          )}
         />
                   <Route exact  path='/alerts' 
          render={props=>(
          < Notifications  {...props}  loggedInStatus={this.state.loggedInStatus}/>
          )}
         />
                   <Route exact  path='/user/myreviews' 
          render={props=>(
          <Trips {...props}  loggedInStatus={this.state.loggedInStatus}/>
          )}
          
         />
          <Route exact  path='/sign-up' 
          render={props=>(
          <Signup {...props}  loggedInStatus={this.state.loggedInStatus}/>
          )}
          
         />
          <Route exact  path='/sign-in' 
          render={props=>(
          <Signin {...props}  loggedInStatus={this.state.loggedInStatus}/>
          )}
         />
          <Route exact  path='/reset-account' 
          render={props=>(
          <ResetAccount {...props}  loggedInStatus={this.state.loggedInStatus}/>
          )}
         />
         <Route
         render={props=>(
          <NotFound {...props}  loggedInStatus={this.state.loggedInStatus}/>
          )}
          
         />

        <Redirect from='*' to='/sign-in'/>




        </Switch>             
      </BrowserRouter>
  )}
  return(
    <div>
    <Header/>
    <main>
    {content()}
    </main>
    <Footer/>

    </div>
  )}
 
}
