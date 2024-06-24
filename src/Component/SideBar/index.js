import React from 'react'
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Banner from '../../Assets/image/Banner1.PNG'

function valuetext(value) {
    return `${value}°C`;
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SideBar = () => {

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className='sidebar'>
                <div className='card border-0 shadow'>
                    <h3>Category</h3>
                    <div className='catList'>
                        <div className='catItem d-flex align-items-center'>
                            <span>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg' width={30} />
                            </span>
                            <h4>Milks & Dairies</h4>
                            <span className='d-flex align-items-center justify-content-center rounded-circle'>30</span>
                        </div>
                    </div>
                    <div className='catList'>
                        <div className='catItem d-flex align-items-center'>
                            <span>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg' width={30} />
                            </span>
                            <h4>Milks & Dairies</h4>
                            <span className='d-flex align-items-center justify-content-center rounded-circle'>30</span>
                        </div>
                    </div>
                    <div className='catList'>
                        <div className='catItem d-flex align-items-center'>
                            <span>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg' width={30} />
                            </span>
                            <h4>Milks & Dairies</h4>
                            <span className='d-flex align-items-center justify-content-center rounded-circle'>30</span>
                        </div>
                    </div>
                    <div className='catList'>
                        <div className='catItem d-flex align-items-center'>
                            <span>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg' width={30} />
                            </span>
                            <h4>Milks & Dairies</h4>
                            <span className='d-flex align-items-center justify-content-center rounded-circle'>30</span>
                        </div>
                    </div>
                    <div className='catList'>
                        <div className='catItem d-flex align-items-center'>
                            <span>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg' width={30} />
                            </span>
                            <h4>Milks & Dairies</h4>
                            <span className='d-flex align-items-center justify-content-center rounded-circle'>30</span>
                        </div>
                    </div>
                </div>

                <div className='card border-0 shadow'>
                    <h3>Fill By Price</h3>

                    <Slider
                        min={0}
                        step={1}
                        max={1000}
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        color='success'
                    />

                    <div className='d-flex pt-2 pb-2 priceRange'>
                        <span>From: <strong className='text-success'>${value[0]}</strong></span>
                        <span style={{ marginLeft: "auto" }}>From: <strong className='text-success'>${value[1]}</strong></span>
                    </div>

                    <div className='filters'>
                        <h5>Color</h5>
                        <ul className='mb-0'>
                            <li><Checkbox {...label} color='success' />Red(56)</li>
                            <li><Checkbox {...label} color='success' />Green(56)</li>
                            <li><Checkbox {...label} color='success' />Yellow(56)</li>
                            <li><Checkbox {...label} color='success' />Blue(56)</li>
                            <li><Checkbox {...label} color='success' />Orange(56)</li>
                            <li><Checkbox {...label} color='success' />Red(56)</li>

                        </ul>
                    </div>

                    <div className='filters mt-4'>
                        <h5>Item Condition</h5>
                        <ul>
                            <li><Checkbox {...label} color='success' />New (1506)</li>
                            <li><Checkbox {...label} color='success' />Refurbished (27)</li>
                            <li><Checkbox {...label} color='success' />Used (45)</li>

                        </ul>
                    </div>

                    <div className='flex'>
                        <button className='btn btn-g'><FilterAltOutlinedIcon />Filter</button>
                    </div>
                </div>
                <br />
                <img src={Banner} className='w-100'/>
            </div>
        </>
    )
}

export default SideBar