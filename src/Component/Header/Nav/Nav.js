import React from 'react';
import '../Nav/Nav.css';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';

const Nav = () => {
    return (
        <div className='nav d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row position-relative'>
                    <div className='col-sm-2 part1 d-flex align-items-center'>
                        <Button className='bg-g text-white catTab'><GridViewIcon /> &nbsp; Browse All Categories<KeyboardArrowDownIcon /></Button>
                    </div>

                    <div className='col-sm-8 part2 position-static'>
                        <nav>
                            <ul className='list list-inline d-flex mb-0'>
                                <li className='list-inline item'>
                                    <Button><Link>HOME<KeyboardArrowDownIcon /></Link></Button>
                                </li>
                                <li className='list-inline item'>
                                    <Button><Link>ABOUT</Link></Button>
                                </li>
                                <li className='list-inline item'>
                                    <Button><Link>SHOP<KeyboardArrowDownIcon /></Link></Button>
                                </li>
                                <li className='list-inline item'>
                                    <Button><Link>VENDORS<KeyboardArrowDownIcon /></Link></Button>
                                </li>
                                <li className='list-inline item position-static'>
                                    <Button><Link>MEGA MENU<KeyboardArrowDownIcon /></Link></Button>
                                    <div className='dropdown_menu megaMenu  w-100'>
                                        <div className='row'>
                                            <div className='col'>
                                                <h4 className='text-g'>Fruit and Vegetable</h4>
                                                <ul className='mt-4 mb-0'>
                                                    <li><Link to=''>Meat and Poultry</Link></li>
                                                    <li><Link to=''>Fresh and Vegetables</Link></li>
                                                    <li><Link to=''>Herbs and Seasonings</Link></li>
                                                    <li><Link to=''>Cuts and Sprouts</Link></li>
                                                    <li><Link to=''>Exotic Fruits and Veggies</Link></li>
                                                    <li><Link to=''>Packaged Produce</Link></li>
                                                </ul>
                                            </div>
                                            <div className='col'>
                                                <h4 className='text-g'>Breakfast & Dairy</h4>
                                                <ul className='mt-4 mb-0'>
                                                    <li><Link to=''>Meat and Poultry</Link></li>
                                                    <li><Link to=''>Fresh and Vegetables</Link></li>
                                                    <li><Link to=''>Herbs and Seasonings</Link></li>
                                                    <li><Link to=''>Cuts and Sprouts</Link></li>
                                                    <li><Link to=''>Exotic Fruits and Veggies</Link></li>
                                                    <li><Link to=''>Packaged Produce</Link></li>
                                                </ul>
                                            </div>
                                            <div className='col'>
                                                <h4 className='text-g'>Meat & Seafood</h4>
                                                <ul className='mt-4 mb-0'>
                                                    <li><Link to=''>Meat and Poultry</Link></li>
                                                    <li><Link to=''>Fresh and Vegetables</Link></li>
                                                    <li><Link to=''>Herbs and Seasonings</Link></li>
                                                    <li><Link to=''>Cuts and Sprouts</Link></li>
                                                    <li><Link to=''>Exotic Fruits and Veggies</Link></li>
                                                    <li><Link to=''>Packaged Produce</Link></li>
                                                </ul>
                                            </div>
                                            <div className='col'>
                                               <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png' className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='list-inline item'>
                                    <Button><Link>BLOG<KeyboardArrowDownIcon /></Link></Button>
                                </li>
                                <li className='list-inline item'>
                                    <Button><Link>PAGES<KeyboardArrowDownIcon /></Link></Button>
                                    <div className='dropdown_menu'>
                                        <ul>
                                            <li><Button><Link>About Us</Link></Button></li>
                                            <li><Button><Link>Contact</Link></Button></li>
                                            <li><Button><Link>My Account</Link></Button></li>
                                            <li><Button><Link>Login Us</Link></Button></li>
                                            <li><Button><Link>Register</Link></Button></li>
                                            <li><Button><Link>Forgot Password</Link></Button></li>
                                            <li><Button><Link>Reset Password</Link></Button></li>
                                            <li><Button><Link>Purchase Guide</Link></Button></li>
                                            <li><Button><Link>Private Policy</Link></Button></li>
                                            <li><Button><Link>Term of Service</Link></Button></li>
                                            <li><Button><Link>404 Page</Link></Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='list-inline item'>
                                    <Button><Link>CONTACT</Link></Button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='col-sm-2 part3 d-flex align-items-center'>
                        <div className='phno d-flex align-items-center ml-auto'>
                            <span><HeadphonesOutlinedIcon /></span>
                            <div className='info ml-3'>
                                <h3 className='text-g mb-0'>1900 - 888</h3>
                                <p className='mb-0'>24/7 Support Center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Nav