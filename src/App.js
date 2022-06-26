import React, { Component } from 'react';
import './App.css';
import Naviga from './Component/header/navigation';   
import HeadCarou from './Component/headlines/carousal';
import { carousalData } from './Component/headlines/carousalData';

class App extends Component{
  
  render(){
    return (
      
      <div className='backbody'>
        <div className='container'>
          
          <Naviga />
          <HeadCarou slides={carousalData} />
        </div>
      </div>
    )
  }
}

export default App;
