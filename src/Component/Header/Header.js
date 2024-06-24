import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import Icon from '../../Assets/image/Icon.jpg'
import SearchIcon from '@mui/icons-material/Search';
import Select from '../SelectDropdown/Select';
import axios from 'axios'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { ClickAwayListener } from '@mui/material';
import Nav from './Nav/Nav';
import Logo from '../../Assets/image/logo.svg'

const Header = () => {

    const headerRef = useRef();

    const [isOpenDropdown, setIsOpenDropdown] = useState(false)

    const [categories, setCategories] = useState([

        'Wines and Drinks',
        'Clothing and Beauty',
        'Fresh Sea food',
        'Pet Foods and Toy',
        'Fast food',
        'Baking material',
        'Fresh Vegetable',
        'Milks and Dairies'
    ])

    const countryList = []

    useEffect(() => {
        getCountry('https://countriesnow.space/api/v0.1/countries/')
    }, [])

    const getCountry = async (url) => {
        try {
            await axios.get(url).then((res) => {
                if (res !== null) {
                    res.data.data.map((item, index) => {
                        countryList.push(item.country)
                        console.log(item.country, "item")
                    })
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            let position = window.pageYOffset;
            if(position > 100){
                headerRef.current.classList.add('fixed');
            }else{
                headerRef.current.classList.remove('fixed');
            }
        })
    },[])

    return (
        <>
            <div className='headerWrapper' ref={headerRef}>
                <header>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-sm-2'>
                                <img src={Logo} />
                            </div>

                            {/* header Search start*/}
                            <div className='col-sm-5'>
                                <div className='headerSearch d-flex align-items-center'>
                                    <Select data={categories} placeholder={'All Categories'} icon={false} />
                                    <div className='search'>
                                        <input type='text' placeholder='Search for items...' />
                                        <SearchIcon className='searchIcon cursor' />
                                    </div>
                                </div>
                            </div>
                            {/* header Search End*/}


                            <div className='col-sm-5 d-flex align-items-center'>
                                <div className='ml-auto d-flex align-items-center'>
                                    <div className='countryWrapper'>
                                        <Select data={countryList} placeholder={'Your Location'} icon={<LocationOnIcon style={{ opacity: 0.5 }} />} />
                                    </div>
                                    <ClickAwayListener onClickAway={() => setIsOpenDropdown(false)}>
                                        <ul className='list list-inline mb-0 headerTabs'>
                                            <li className='list-inline-item'>
                                                <span>
                                                    <FlipCameraAndroidIcon />
                                                    <span className='badge bg-success'>3</span>
                                                    Compare
                                                </span>
                                            </li>
                                            <li className='list-inline-item'>
                                                <span>
                                                    <FavoriteBorderIcon />
                                                    <span className='badge bg-success'>3</span>
                                                    Wishlist
                                                </span>
                                            </li>
                                            <li className='list-inline-item'>
                                                <span>
                                                    <ShoppingCartOutlinedIcon />
                                                    <span className='badge bg-success'>3</span>
                                                    Cart
                                                </span>
                                            </li>
                                            <li className='list-inline-item'>
                                                <span onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
                                                    <PermIdentityIcon />
                                                    Account
                                                </span>
                                                {
                                                    isOpenDropdown &&
                                                    <ul className='dropdownMenu'>
                                                        <li><Button className='align-items-center'><PermIdentityIcon />My Account</Button></li>
                                                        <li><Button><LocationOnOutlinedIcon />Order Tracking</Button></li>
                                                        <li><Button><FavoriteBorderIcon />My Wishlist</Button></li>
                                                        <li><Button><SettingsIcon />Setting</Button></li>
                                                        <li><Button><LogoutIcon />Sign out</Button></li>
                                                    </ul>
                                                }
                                            </li>
                                        </ul>
                                    </ClickAwayListener>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <Nav />
            </div>

            <div className='afterHeader'></div>
        </>
    )
}

export default Header