import React from 'react';
import './style.css'
import Banner1 from '../../Assets/image/Banner1.PNG'
import Banner2 from '../../Assets/image/Banner2.PNG'
import Banner3 from '../../Assets/image/Banner3.PNG'

const Banners = () => {
    return (
        <div className='bannerSection'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='box'>
                            <img src={Banner1} className='w-100 transition'/>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='box'>
                            <img src={Banner2} className='w-100 transition'/>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='box'>
                            <img src={Banner3} className='w-100 transition'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banners