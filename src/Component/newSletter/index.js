import React from 'react'
import './style.css'
import Button from '@mui/material/Button';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const NewSletter = () => {
    return (
        <div className='newsLetterBanner'>
            <SendOutlinedIcon />
            <input type='text' placeholder='Your email address' />
            <Button className='bg-g'>Subscribe</Button>
        </div>
    )
}

export default NewSletter