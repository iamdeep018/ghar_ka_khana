import React from 'react';
import './content.css'
// import Content_db from './contentData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Card({props}){
 

    return props.map((item)=>{
        return(
            <>
            <div key={item.id} className='card-wrapper'>
                    {item.offer===""?'':<p className='offer'>{item.offer}</p>}
                    <img src={item.srcc} className='card-img' />
                    <div>
                        <p className='card-title'>{item.titlee}</p>
                        <p className='card-descp'>{item.Descp},  
                        <span>{item.address}</span></p>
                        <div className='card-price'>
                            <span>Rs.{item.price}{item.price_stat}</span>
                            <p><FontAwesomeIcon icon={faStar} />{item.rating}/5 Stars</p>
                        </div>
                        <button className='card-btn' >View</button><br />
                        
                    </div>
            </div>
            </>
        )
    })
    }


export default Card;