import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Feedback from './pages/Feedback/Feedback';
import AboutUs from './pages/AboutUs/AboutUs';
import Error from './pages/Error/Error';



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/services'>
            <Services></Services>
          </Route>
          <Route exact path='/feedback'>
            <Feedback></Feedback>
          </Route>

          <Route exact path='/about'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
