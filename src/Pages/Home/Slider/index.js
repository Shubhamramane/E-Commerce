import React from 'react';
import './Style.css';
import Slider from "react-slick";
import Slider1 from '../../../Assets/image/slider-1.png'
import Slider2 from '../../../Assets/image/slider-2.png'
import NewSletter from '../../../Component/newSletter';

const HomeSlider = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrow: true
  };

  return (
    <section className='homeSlider'>
      <div className='container-fluid position-relative'>
        <Slider {...settings} className='home_Slider_Main'>
          <div className='item'>
            <img src={Slider1} className='w-100' />
            <div className='info'>
              <h2 className='mb-4'>
                Don't miss amazing<br />
                grocery deals
              </h2>
              <p>Sign up for the daily newsletter</p>
            </div>
          </div>
          <div className='item'>
            <img src={Slider2} className='w-100' />
            <div className='info'>
              <h2 className='mb-4'>
                Fresh Vegetable<br />
                Big discount
              </h2>
              <p>Save upto 50% off on your first order</p>
            </div>
          </div>
        </Slider>

       <NewSletter/>

      </div>
    </section>
  )
}

export default HomeSlider