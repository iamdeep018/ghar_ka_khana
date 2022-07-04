import React, { Component } from 'react';
import './App.css';
import Card from './Component/Contents/content';
import Footer from './Component/footer/footer';
import Naviga from './Component/header/navigation';   
import ImageSlider from './Component/headlines/carousal';
import images from './Component/headlines/carousalData';

class App extends Component{
  render(){
    return (
      <>
        <div className='container'>
          
          <Naviga />
          
          <ImageSlider images={images} />
          <div className='explore'>EXPLORE</div>
          
        <div className='cards-container'>
          <Card />
        </div>
          <Footer />
        </div>
        </>
    )
  }
}

export default App;
