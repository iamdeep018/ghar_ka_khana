import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import "./carousal.css";

const ImageSlider = ({images}) => {

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
      slidesToShow: 1,
      slidesToScroll: 1,
        autoplaySpeed: 5500,
        centerPadding:'200px',
        nextArrow: <GalleryNextArrow />,
        prevArrow: <GalleryPrevArrow />

    };

    

    return (
        <>
        <div className="carousal">
            <div className="imgslider">
                <Slider {...settings}>
                {images.map((item) => (
                    <div key={item.id}>
                    <img src={item.src} alt={item.alt} className="headling-img" />
                    </div>
                ))}
            </Slider>
            
            </div>
        </div>
        </>
    )
    }
    export default ImageSlider;