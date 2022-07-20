import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './home';
import Signup from './Component/signup-popup/signup';
import AdForm from './Component/new_ad/postad';
import ForgotPassword from './Component/signup-popup/forgotpassword';


class App extends Component{
  
  render(){
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createpost" element={<AdForm />} />
            <Route path="/login" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Router>
        
    )
  }
}

export default App;
