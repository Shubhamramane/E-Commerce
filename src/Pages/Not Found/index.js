import React from 'react';
import Page_404 from '../../Assets/image/page-404.png'
import Button from '@mui/material/Button';
import './style.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notFound'>
            <div className='container-fluid'>
                <div className='box'>
                    <img src={Page_404} />
                    <br/><br/>
                    <h1>Page Not Found</h1>
                    <p>The link you clicked may be broken or the page may have been removed.
                    visit the Homepage or Contact us about the problem</p>
                    <br/>
                    
                    <div className='d-flex'>
                        <Button className='btn-g btn-lg m-auto'><Link to={'/'}>Back To Home Page</Link></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound