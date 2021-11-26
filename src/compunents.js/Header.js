import React from 'react'
import Logo1 from '../imgApp/logo-color-1.png'

const Header = () => {
    return (
        <div id='header'>
            <div id = 'header_box'>
            <ul id='header_list'>
                <li className='header_img'>
                    <img src={Logo1} alt="" className='header_img-1' />
                    </li>
                <li><a href="">HOME</a></li>
                <li>
                    <a href="" className='abc'> PACKAGES </a>
                    <ul className='header_list-item list_time-none1'>
                        <li className='header_list-item-0'>
                            <a>Search1
                                <span className ='header_icon'>HOT</span>
                            </a>
                            </li>
                        <li className='header_list-item-0'><a>Search1</a></li>
                        <li className='header_list-item-0'><a>Tour Package</a></li>
                        <li className='header_list-item-0'><a>Destination</a></li>
                        <li className='header_list-item-0'><a>Typology</a></li>
                    </ul>
                    </li>
                <li>
                    <a href="">SHOP</a>
                    <ul className='header_list-item list_time-none2'>
                        <li className='header_list-item-0'><a>Archive </a></li>
                        <li className='header_list-item-0'><a>Single Product</a></li>
                        <li className='header_list-item-0'><a>Cart</a></li>
                        <li className='header_list-item-0'><a>Checkout</a></li>
                    </ul>
                </li>
                <li>
                    <a href=""> ABOUT US </a>
                    <ul className='header_list-item list_time-none3'>
                        <li className='header_list-item-0'>
                            <a>About Us <span className ='header_icon2'>NEW</span></a>
                            
                            </li>
                        <li className='header_list-item-0'><a>About Us 2</a></li>
                        <li className='header_list-item-0'><a>About Us 3</a></li>
                    </ul> 
                </li>
                <li>
                    <a href=""> PAGES </a>
                    <ul className='header_list-item list_time-none4'>
                        <li className='header_list-item-0'><a>Services </a></li>
                        <li className='header_list-item-0'><a>Agency Tours</a></li>
                        <li className='header_list-item-0'><a>Testimonials</a></li>
                        <li className='header_list-item-0'><a>Prices</a></li>
                        <li className='header_list-item-0'><a>Promotions</a></li>
                        <li className='header_list-item-0'><a>Faq</a></li>
                        <li className='header_list-item-0'><a>Coming Soon</a></li>
                        <li className='header_list-item-0'><a>About Us</a></li>
                        <li className='header_list-item-0'><a>Contact</a></li>
                    </ul>
                </li>
                <li>
                    <a href=""> NEWS </a>
                    <ul className='header_list-item list_time-none5'>
                        <li className='header_list-item-0'><a>Archive</a></li>
                        <li className='header_list-item-0'><a>Single Post</a>
                            <ul className='header_list-item-1'>
                            <li>Full Width</li>
                            <li>Right Sidebar</li>
                            <li>Left Sidebar</li>
                            </ul>
                        </li>
                        
                    </ul>
                </li>
                <li>
                    <a href=""> CONTACT </a> 
                    <ul className='header_list-item list_time-none6'>
                        <li className='header_list-item-0'><a>Contact 1</a></li>
                        <li className='header_list-item-0'><a>Contact 2</a></li>
                    </ul>
                </li>
                <li>
                    <a href="" className='header_BookNow'>BOOK NOW</a>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Header
