import React from 'react';
import './content.css'
import Content_db from './contentData';

function Card({}){
    return Content_db.map((item)=>{
        return(
            <>
            <div key={item.id} className='card-wrapper'>
                    <img src={item.srcc} className='card-img' />
                    <div>
                        <p className='card-title'>{item.titlee}</p>
                        <p className='card-descp'>{item.Descp}</p>
                        
                        <div className='card-price'>
                            <span>Rs.{item.price}{item.price_stat}</span>
                            {/*star emoji */}
                            <p>{item.rating}/5 Stars</p>
                        </div>
                        <button className='card-btn' >View</button><br />
                        {item.offer===""?<></>:<p className='offer'>{item.offer}</p>}
                    </div>
            </div>
            </>
        )
    })
    }
    // return(
        // <>





            {/* <div className='card-container'>
            {props.map((item) =>(
                <div key={item.id} className='content-wrapper'>
                        <img src={item.srcc} className='card-img' />
                        <p className='card-title'>{item.titlee}</p>
                        <p className='card-type'>{item.descp}</p>
                        <div className='card-price'>
                            <p>Rs.{item.price}{item.price_stat}</p>
                            <p>{item.rating}/5 Stars</p>
                        </div>
                        <button className='card-btn' >View</button>
                    </div>
                
            ))}
            </div> */}
        // </>
    // )


export default Card;