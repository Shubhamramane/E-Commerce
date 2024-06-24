import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../../Component/SideBar'
import Product from '../../Component/product'
import Button from '@mui/material/Button';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

const Listing = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [isOpenDropdown2, setIsOpenDropdown2] = useState(false)
  return (
    <section className='listingPage'>
      <div className='container-fluid'>
        <div className='breadcrumb flex-column'>
          <h1>Snack</h1>
          <ul className='list list-inline mb-0'>
            <li className='list-inline-item'>
              <Link to={''}>Home</Link>
            </li>
            <li className='list-inline-item'>
              <Link to={''}>Shop</Link>
            </li>
            <li className='list-inline-item'>
              <Link to={''}>Snack</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='listingData'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3 sideBarWrapper'>
              <SideBar />
            </div>
            <div className='col-md-9 rightContent homeProducts pt-0'>

              <div className='topStrip d-flex align-items-center'>
                <p className='mb-0'>We found <span className='text-success'>29</span> items for you!</p>
                <div className='d-flex align-items-center' style={{ marginLeft: 'auto' }}>
                  <div className='tab_ position-relative' style={{ zIndex: '999' }}>
                    <Button className='btn_' onClick={() => setIsOpenDropdown(!isOpenDropdown)}><GridViewOutlinedIcon />Show: 50</Button>
                    {
                      isOpenDropdown &&
                      <ul className='dropdownMenu'>
                        <li><Button className='align-items-center' onClick={() => setIsOpenDropdown(false)}>50</Button></li>
                        <li><Button className='align-items-center' onClick={() => setIsOpenDropdown(false)}>100</Button></li>
                        <li><Button className='align-items-center' onClick={() => setIsOpenDropdown(false)}>150</Button></li>
                        <li><Button className='align-items-center' onClick={() => setIsOpenDropdown(false)}>200</Button></li>
                        <li><Button className='align-items-center' onClick={() => setIsOpenDropdown(false)}>All</Button></li>
                      </ul>
                    }
                  </div>
                  <div className='tab_ position-relative' style={{ marginLeft: '30px', zIndex: '999' }}>
                    <Button className='btn_' onClick={() => setIsOpenDropdown2(!isOpenDropdown2)}><FilterListOutlinedIcon />Sort by: Featured</Button>
                    {
                      isOpenDropdown2 &&
                      <ul className='dropdownMenu'>
                        <li><Button className='align-items-center' onClick={() => setIsOpenDropdown2(false)}>Featured</Button></li>
                        <li><Button className='align-items-center' onClick={() => setIsOpenDropdown2(false)}>Price: Low to High</Button></li>
                        <li><Button className='align-items-center' onClick={() => setIsOpenDropdown2(false)}>Price: High to Low</Button></li>
                        <li><Button className='align-items-center' onClick={() => setIsOpenDropdown2(false)}>Release Date</Button></li>
                        <li><Button className='align-items-center' onClick={() => setIsOpenDropdown2(false)}>Avg. Rating</Button></li>
                      </ul>
                    }
                  </div>
                </div>
              </div>
              <div className='productRow' style={{ paddingLeft: '40px', paddingRight: '30px' }}>
                <div className='item'>
                  <Product tag="sale" />
                </div>
                <div className='item'>
                  <Product />
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
                  <Product />
                </div>
                <div className='item'>
                  <Product />
                </div>
                <div className='item'>
                  <Product />
                </div>
                <div className='item'>
                  <Product />
                </div>
                <div className='item'>
                  <Product />
                </div>
                <div className='item'>
                  <Product />
                </div>
                <div className='item'>
                  <Product />
                </div>
                <div className='item'>
                  <Product />
                </div>
                <div className='item'>
                  <Product />
                </div>
                <div className='item'>
                  <Product />
                </div>
                <div className='item'>
                  <Product />
                </div>
                <div className='item'>
                  <Product />
                </div>
                <div className='item'>
                  <Product />
                </div>
                <div className='item'>
                  <Product />
                </div>
                <div className='item'>
                  <Product />
                </div>
                <div className='item'>
                  <Product />
                </div>
                <div className='item'>
                  <Product />
                </div>
                <div className='item'>
                  <Product />
                </div>
                <div className='item'>
                  <Product />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Listing