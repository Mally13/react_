import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import AboutUs from './pages/About Us/About-us'
import Header from './components/Header';
import Social from './components/Social'
import Footer from './components/Footer';
import './loader'

function App() {
  return (
    <div className="App">

<Header/>
     <Router>
       
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/customer-support' component={CustomerSupport} />  */}
          <Route path='/about-us' component={AboutUs} />
          {/* <Route path='/faq' component={FAQ}/>
          <Route path='/faq' component={FAQ}/>
          <Route path='/faq' component={FAQ}/>
          <Route path='/faq' component={FAQ}/>
          <Route path='/faq' component={FAQ}/>
          <Route path='/faq' component={FAQ}/> */}




        </Switch>             
      </Router>
      <Social/>
      <Footer/>
    </div>
  );
}

export default App;
