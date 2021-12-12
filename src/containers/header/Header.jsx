import React from 'react';
import banner from '../../asserts/banner.png'
import './header.css';
const Header = () => {
    return (
        <div className='finvesta_header section_padding' id='home'>
            <div className='finvesta_header_content'>
                <h1 className='gradient__text'>Finvesta offers an Integrated Data Management for Investment Data.</h1>
                <p>Integrate, organize and manage your data from a single source of unified data</p>
             <span className='adjesting'><img src={banner} alt='banner'></img></span>
            </div>
        </div>
    )
}

export default Header