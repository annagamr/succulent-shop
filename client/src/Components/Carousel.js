import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic from "./suc.png";
import quiz from "./survey.jpg";


export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed:500,
      cssEase: "linear"
    };
    return (
      <div className="container">
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div className="slide1">
          <img src={pic} />
          <div className="slide1Text"> HOME IS <br/> WHERE <br/>YOUR PLANTS<br/>ARE</div>
          <button>SHOP NOW</button>
          </div>


          <div className="slide2">
          <img src={quiz} />
          <div className="slide2Text"> CAN'T DECIDE WHICH SUCCULENT IS FOR YOU? <br/>OUR QUIZ CAN HELP YOU!</div>
          <button>TAKE QUIZ</button>

          </div>
         
        </Slider>
      </div>
    );
  }
}