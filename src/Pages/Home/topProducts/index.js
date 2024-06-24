import React from 'react'
import './style.css'
import img1 from '../../../Assets/image/thumbnail-1.jpg'
import img2 from '../../../Assets/image/thumbnail-2.jpg'
import img3 from '../../../Assets/image/thumbnail-3.jpg'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';

const TopProducts = (props) => {
  return (
    <div className='topselling_box'>
      <h3>{props.title}</h3>

      <div className='items d-flex align-items-center'>
        <div className='img'>
          <Link>
            <img src={img1} className='w-100' />
          </Link>
        </div>
        <div className='info px-3'>
          <Link to=''><h4>Nestly Orginal Coffee-Mate Coffee Creamer</h4></Link>
          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
          <div className='d-flex align-items-center'>
            <span className='price text-g font-weight-bold'>$28.75</span><span className='oldPrice'>$32.8</span>
          </div>
        </div>
      </div>

      <div className='items d-flex align-items-center'>
        <div className='img'>
          <Link>
            <img src={img1} className='w-100' />
          </Link>
        </div>
        <div className='info px-3'>
          <Link to=''><h4>Nestly Orginal Coffee-Mate Coffee Creamer</h4></Link>
          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
          <div className='d-flex align-items-center'>
            <span className='price text-g font-weight-bold'>$28.75</span><span className='oldPrice'>$32.8</span>
          </div>
        </div>
      </div>
      <div className='items d-flex align-items-center'>
        <div className='img'>
          <Link>
            <img src={img1} className='w-100' />
          </Link>
        </div>
        <div className='info px-3'>
          <Link to=''><h4>Nestly Orginal Coffee-Mate Coffee Creamer</h4></Link>
          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
          <div className='d-flex align-items-center'>
            <span className='price text-g font-weight-bold'>$28.75</span><span className='oldPrice'>$32.8</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default TopProducts