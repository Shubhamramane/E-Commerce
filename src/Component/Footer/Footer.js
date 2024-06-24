import React from 'react';
import './Footer.css';
import Img1 from '../../Assets/image/icon-1.svg'
import Img2 from '../../Assets/image/icon-2.svg'
import Img3 from '../../Assets/image/icon-3.svg'
import Img4 from '../../Assets/image/icon-4.svg'
import Img5 from '../../Assets/image/icon-5.svg'
import Logo from '../../Assets/image/logo.svg'
import AppStore from '../../Assets/image/app-store.jpg'
import GooglePlay from '../../Assets/image/google-play.jpg'
import Payment_Method from '../../Assets/image/payment-method.png'

import { Link } from 'react-router-dom';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import NewSletterImg from '../../Assets/image/newSletter.png'
import NewSletter from '../../Component/newSletter';

const Footer = () => {
    return (
        <>
            <section className='newsLetterSection'>
                <div className='container-fluid'>
                    <div className='box d-flex align-items-center'>
                        <div className='info'>
                            <h2>Stay home & get your daily <br />needs from our shop</h2>
                            <p>Start You'r Daily Shopping with Nest Mart</p>
                            <NewSletter />
                        </div>
                        <div className='img'>
                            <img src={NewSletterImg} className='w-100' />
                        </div>
                    </div>
                </div>
            </section>

            <div className='footerWrapper'>
                <div className='footerBoxes'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col'>
                                <div className='box d-flex align-items-center'>
                                    <span><img src={Img1} /></span>
                                    <div className='info'>
                                        <h4>Best prices & offers</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='box d-flex align-items-center'>
                                    <span><img src={Img2} /></span>
                                    <div className='info'>
                                        <h4>   Free delivery</h4>
                                        <p>24/7 amazing services</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='box d-flex align-items-center'>
                                    <span><img src={Img3} /></span>
                                    <div className='info'>
                                        <h4>Great daily deal</h4>
                                        <p>When you sign up</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='box d-flex align-items-center'>
                                    <span><img src={Img4} /></span>
                                    <div className='info'>
                                        <h4>Wide assortment</h4>
                                        <p>Mega Discounts</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='box d-flex align-items-center'>
                                    <span><img src={Img5} /></span>
                                    <div className='info'>
                                        <h4>Easy returns</h4>
                                        <p>Within 30 days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-3 part1'>
                                <Link to='/'><img src={Logo} /></Link>
                                <br /><br />
                                <p>Awesome grocery store website template</p>
                                <br />
                                <p><RoomOutlinedIcon /><strong>Address:</strong> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                                <p><HeadphonesOutlinedIcon /><strong>Call Us:</strong>(+91) - 540-025-124553</p>
                                <p><EmailOutlinedIcon /><strong>Email:</strong>sale@Nest.com</p>
                                <p><AccessTimeOutlinedIcon /><strong>Hours:</strong>10:00 - 18:00, Mon - Sat</p>
                            </div>

                            <div className='col-md-6 part2'>
                                <div className='row'>
                                    <div className='col'>
                                        <h3>Company</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">About Us</Link></li>
                                            <li><Link to="#">Delivery Information</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                            <li><Link to="#">Support Center</Link></li>
                                            <li><Link to="#">Careers</Link></li>
                                        </ul>
                                    </div>

                                    <div className='col'>
                                        <h3>Account</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#"> Sign In</Link></li>
                                            <li><Link to="#">View Cart</Link></li>
                                            <li><Link to="#">My Wishlist</Link></li>
                                            <li><Link to="#">Track My Order</Link></li>
                                            <li><Link to="#">Help Ticket</Link></li>
                                            <li><Link to="#">Shipping Details</Link></li>
                                            <li><Link to="#">Compare products</Link></li>
                                        </ul>
                                    </div>

                                    <div className='col'>
                                        <h3>Corporate</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">Become a Vendor</Link></li>
                                            <li><Link to="#">Affiliate Program</Link></li>
                                            <li><Link to="#">Farm Business</Link></li>
                                            <li><Link to="#">Farm Careers</Link></li>
                                            <li><Link to="#">Our Suppliers</Link></li>
                                            <li><Link to="#">Accessibility</Link></li>
                                            <li><Link to="#">Promotions</Link></li>
                                        </ul>
                                    </div>

                                    <div className='col'>
                                        <h3>Popular</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">Milk & Flavoured Milk</Link></li>
                                            <li><Link to="#">Butter and Margarine</Link></li>
                                            <li><Link to="#">Eggs Substitutes</Link></li>
                                            <li><Link to="#">Marmalades</Link></li>
                                            <li><Link to="#">Sour Cream and Dips</Link></li>
                                            <li><Link to="#">Tea & Kombucha</Link></li>
                                            <li><Link to="#">Cheese</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-3 part3'>
                                <h3>Install App</h3>
                                <br />
                                <p>From App Store or Google Play</p>
                                <div className='d-flex store'>
                                    <Link className='AppStore'><img src={AppStore} width={150} /></Link>
                                    <Link className='GooglePlay'><img src={GooglePlay} width={150} className='mx-2' /></Link>
                                </div>
                                <br />
                                <p>Secured Payment Gateways</p>
                                <Link><img src={Payment_Method} /></Link>
                            </div>
                        </div>

                        <hr />

                        <div className='row lastStrip'>
                            <div className='col-md-3'>
                                <p>© 2022, Nest - HTML Ecommerce Template
                                    All rights reserved</p>
                            </div>
                            <div className='col-md-6 d-flex'>
                                <div className='m-auto d-flex align-items-center'>
                                    <div className='phno d-flex align-items-center mx-5'>
                                        <span style={{ marginRight: '10px' }}><CallOutlinedIcon /></span>
                                        <div className='info ml-3'>
                                            <h3 className='text-g mb-0'>1900 - 666</h3>
                                            <p className='mb-0'>Working 8:00 - 22:00</p>
                                        </div>
                                    </div>
                                    <div className='phno d-flex align-items-center mx-5'>
                                        <span style={{ marginRight: '10px' }}><CallOutlinedIcon /></span>
                                        <div className='info ml-3'>
                                            <h3 className='text-g mb-0'>1900 - 888</h3>
                                            <p className='mb-0'>24/7 Support Center</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 part3'>
                                <div className='d-flex align-items-center'>
                                    <h5>Follow Us</h5>
                                    <ul className='list list-inline'>
                                        <li className='list-inline-item'>
                                            <Link to={''}><FacebookOutlinedIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link to={''}><TwitterIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link to={''}><InstagramIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link to={''}><YouTubeIcon /></Link>
                                        </li>
                                    </ul>
                                    {/* <p>Up to 15% discount on your first subscribe</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>

    )
}

export default Footer