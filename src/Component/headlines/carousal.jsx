import React,{useState} from 'react';
import './carousal.css'
import { carousalData } from './carousalData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const HeadCarou =(slides)=>{
    const [current, setCurrent]=useState(0)
    const leng=slides.length;
    
    const nextSlide = () => {
        setCurrent(current===leng-1 ? 0 : current +1);
        console.log(current);
    };

return(
<div className='carousal'>
     <FaArrowAltCircleLeft className='left-arrow' />
     <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />

     


    {carousalData.map((slide,index)=>{
        return(
            <img src={slide.image} alt="food" className='carouimage'/>
        )
    })}
</div>
)
}

export default HeadCarou;