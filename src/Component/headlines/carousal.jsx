import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import "./carousal.css";
import { useDispatch } from 'react-redux';
import { categoryFilter } from "../../reducers/catefilterReducer";


const ImageSlider = ({images}) => {
    const dispatch=useDispatch();


    const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
         const { className, onClick } = props;
    
        return (
          <div {...props} className="custom-prevArrow" onClick={onClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            </svg>
          </div>
        );
      };
      const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
        const { className, onClick } = props;
        return (
          <div {...props} className="custom-nextArrow" onClick={onClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
            </svg>
          </div>
        );
      };



    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3500,
      // centerPadding:'100px',
      nextArrow: <GalleryNextArrow />,
      prevArrow: <GalleryPrevArrow />
    }; 
    function linkcarousal(iid){
      if(iid===1){
        dispatch(categoryFilter(""))
      }
      else if(iid===2){
        dispatch(categoryFilter("food"))
      }
      else if(iid===3){
        dispatch(categoryFilter("car"))
      }
      else if(iid===4){
        dispatch(categoryFilter("rent"))
      }
    }

    return (
        <>
        <div className="carousal">
            <div className="imgslider">
                <Slider {...settings}>
                {images.map((item) => (
                    <div key={item.id} className="carousal_image" onClick={()=>linkcarousal(item.id)}>
                    
                    <img src={item.src} alt={item.alt} />

                    </div>
                ))}
            </Slider>
            
            </div>
        </div>
        </>
    )
    }
    export default ImageSlider;