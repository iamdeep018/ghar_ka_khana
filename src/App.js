import React, { Component } from 'react';
import './App.css';
// import Card from './Component/Contents/content';
import ContentDiv from './Component/Contents/contentdiv';
import Footer from './Component/footer/footer';
import Naviga from './Component/header/navigation';
import ImageSlider from './Component/headlines/carousal';
import images from './Component/headlines/carousalData';
import Popup from './Component/popmanager';
// import Signup from './Component/signup-popup/signup';

class App extends Component{
  render(){
    return (
      <>
        <Popup />
        <div className='container'>
          <Naviga />
          
          <ImageSlider images={images} />
          
          <div className='explore'>EXPLORE</div>
          
        <div className='cards-container'>
          <ContentDiv />
        </div>
          <Footer />
          
        </div>
        
    </>
    )
  }
}

export default App;
