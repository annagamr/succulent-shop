import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic from "./suc.png";


export default class AutoPlay extends Component {
   
  
    render() {
      const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        speed:4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      return (
        <div className="container">
          <Slider {...settings}>

            <div className="imageContainer">
            <h2> HOME IS <br/> WHERE <br/>YOUR PLANTS <br/> ARE</h2>
            <img src={pic} alt="logo" /> 
            <button>SHOP NOW</button>
            </div>

            <div className="imageContainer">
         
            <img src={pic} alt="logo" /> 
            
            </div>
          
           
           
          </Slider>
        </div>
        
      );
    }
  }