import React, { useContext } from 'react';
import './NavBar.css';
import Card from './CartWidget';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const NavBar = () => {

    const {cart} = useContext(CartContext)

    return (
    <div className="menuComp">
        <div id="navbar">
            <div class="menuBarra cierre">
                <Link to={'/'}><div class="logo-prop">
                    <img src="/images/Logo.jpg" alt="Logo"></img>
                    <span class="logo_nomb">EliBel</span>
                </div></Link>    
            <ul class="nav-links">
                <Link to={'/'}><li>
                    <a href="#">
                        <i class="fas fa-border-all"></i>
                        <span class="link_name">Dashboard</span>
                    </a>
                    <ul class="sub-menu blank">
                        <li><a class="link_name" href="#">Menu</a></li>                
                    </ul>
                </li></Link> 
                <li>
                <Link to='/cart' className='align-items-center p-0'>
                <i class="fas fa-cart-arrow-down">
                {
                    cart.length !== 0 && <span className="h5 mx-1">{cart.length}</span>
                }</i>
                </Link>
                </li>

            <li>
                <div class="icon-link">
                    <a href="#">
                        <i class="fas fa-tshirt"></i>
                        <span class="link_name">Remeras y Pantalones</span>
                    </a>
                    <i class="fas fa-chevron-down arrow"></i>
                </div>
                <ul class="sub-menu">
                    <li><a class="link_name" href="#">Remeras y más</a></li>
                    <Link to={'/item/1'}><li><a href="#">Remeras</a></li></Link>
                    <Link to={'/item/2'}><li><a href="#">Pantalones</a></li></Link>
                    <Link to={'/item/3'}><li><a href="#">Accesorios</a></li></Link>                    
                </ul>
            </li>
            <li>
                <div class="profile-details">
                    <div class="profile-content">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="User"></img>
                    </div>
                    <div class="name-job">
                        <div class="profile_name">Martin Belizan</div>
                        <div class="job">Admin</div>
                    </div>
                    <i class="fas fa-sign-out-alt"></i>
                </div>
            </li>
            </ul>
            </div>
        </div>
    </div>
    )
}

export default NavBar
