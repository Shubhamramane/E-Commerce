import React from 'react';
import './Style.css'
import SliderBanner from './Slider/index';
import CatSlider from '../../Component/catSlider';
import Banners from '../../Component/banners';
import Product from '../../Component/product';
import Banner4 from '../../Assets/image/banner4.PNG'
import Slider from "react-slick";
import Slider1 from '../../Assets/image/slider-1.png'
import TopProducts from './topProducts';

import Footer from '../../Component/Footer/Footer';

const Home = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrow: true,
    autoplay: 3000
  };

  return (
    <div>
      <>
        <SliderBanner />
        <CatSlider />
        <Banners />

        <section className='homeProducts'>
          <div className='container-fluid'>
            <div className='d-flex align-items-center'>
              <h2 className='hd mb-0  mt-0'>Popular Products</h2>
              <ul className='list list-item filterTab mb-0'>
                <li className='list-inline-item'>
                  <a className='cursor'>All</a>
                </li>
                <li className='list-inline-item'>
                  <a className='cursor'>Milks & Dairies</a>
                </li>
                <li className='list-inline-item'>
                  <a className='cursor'>Coffes & Teas</a>
                </li>
                <li className='list-inline-item'>
                  <a className='cursor'>Pet Foods</a>
                </li>
                <li className='list-inline-item'>
                  <a className='cursor'>Meats</a>
                </li>
                <li className='list-inline-item'>
                  <a className='cursor'>Vegetables</a>
                </li>
                <li className='list-inline-item'>
                  <a className='cursor'>Fruits</a>
                </li>
              </ul>
            </div>

            <div className='productRow'>
              <div className='item'>
                <Product tag="sale" />
              </div>
              <div className='item'>
                <Product tag="hot" />
              </div>
              <div className='item'>
                <Product tag="new" />
              </div>
              <div className='item'>
                <Product tag="best" />
              </div>
              <div className='item'>
                <Product />
              </div>
              <div className='item'>
                <Product tag="new" />
              </div>
              <div className='item'>
                <Product />
              </div>
              <div className='item'>
                <Product tag="best" />
              </div>
              <div className='item'>
                <Product />
              </div>
              <div className='item'>
                <Product />
              </div>
            </div>
          </div>
        </section>


        <section className='homeProducts homeProductsRow2 pt-0'>
          <div className='container-fluid'>
            <div className='d-flex align-items-center'>
              <h2 className='hd mb-0  mt-0'>Daily Best Sells</h2>
              <ul className='list list-item filterTab mb-0'>
                <li className='list-inline-item'>
                  <a className='cursor'>Featured</a>
                </li>
                <li className='list-inline-item'>
                  <a className='cursor'>Popular</a>
                </li>
                <li className='list-inline-item'>
                  <a className='cursor'>New Added</a>
                </li>
              </ul>
            </div>
            <br /><br />
            <div className='row'>
              <div className='col-md-3 pr-5'>
                <img src={Banner4} />
              </div>

              <div className='col-md-9'>
                <Slider {...settings} className='prodSlider'>
                  <div className='item'>
                    <Product tag='sale' />
                  </div>
                  <div className='item'>
                    <Product tag='hot' />
                  </div>
                  <div className='item'>
                    <Product tag='new' />
                  </div>
                  <div className='item'>
                    <Product tag='sale' />
                  </div>
                  <div className='item'>
                    <Product tag='hot' />
                  </div>
                  <div className='item'>
                    <Product tag='sale' />
                  </div>
                  <div className='item'>
                    <Product tag='sale' />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>

        <section className='topProductsSection'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col'>
                <TopProducts title='Top Selling' />
              </div>
              <div className='col'>
                <TopProducts title='Trending Products' />
              </div>
              <div className='col'>
                <TopProducts title='Recently Added' />
              </div>
              <div className='col'>
                <TopProducts title='Top Rated' />
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  )
}

export default Home;

