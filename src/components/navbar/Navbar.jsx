import React,{useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css';
import logo from '../../asserts/logo.png';
const Navbar = () => { 
    const [toogleMenu, setToggleMenu] = useState(false);
    return (
        <div className='finvesta__navbar'>
            <div className='finvesta_navbar-links'>
                <div className='finvesta_navbar-links_logo'>
                     <img src={logo} alt='logo' /> 
                </div>
                <div className='finvesta_navbar_container_links'>
                    <p><a href='#home'>Home</a></p>
                    <p><a href='#aboutUs'>Know about Finvesta</a></p>
                    <p><a href='#contact'>Contact Us</a></p>
                </div>
            </div>
           <div className='finvesta_navbar_menu'>
               {toogleMenu
               ?<RiCloseLine color='rgb(27, 26, 26)' size={27} onclick={()=>setToggleMenu(false)}/>
               :<RiMenu3Line color='rgb(27, 26, 26)' size={27} onclick={()=>setToggleMenu(true)}/>
               }
               {toogleMenu && (
                   <div className='finvesta_navbar_menu_container scale-up-center'>
                       <div className='finvesta_navbar_menu_container_links'>
                       <p><a href='#home'>Home</a></p>
                    <p><a href='#aboutUs'>Know about Finvesta</a></p>
                    <p><a href='#contact'>Contact Us</a></p>
                       </div>
                   </div>
               )}
           </div>
        </div>
    )
}

export default Navbar