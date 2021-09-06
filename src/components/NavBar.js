import React from 'react';
import './NavBar.css';
import './Admin.jpg';

function NavBar() {
    return (
        <div className="navbar">

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;700&display=swap" rel="stylesheet"></link>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet"/>

            <div class="menuBarra cierre">
                <div class="logo-prop">
                    <img src="" alt="Logo"></img>
                    <span class="logo_nomb">FlywareLabs</span>
                </div>    
            <ul class="nav-links">
                <li>
                    <a href="#">
                        <i class="fas fa-border-all"></i>
                        <span class="link_name">Dashboard</span>
                    </a>
                    <ul class="sub-menu blank">
                        <li><a class="link_name" href="#">Menu</a></li>                
                    </ul>
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
                    <li><a href="#">Remeras</a></li>
                    <li><a href="#">Pantalones</a></li>
                    <li><a href="#">Accesorios</a></li>                     
                </ul>
            </li>
            <li>
                <div class="icon-link">
                    <a href="#">
                        <i class="fas fa-cart-arrow-down"></i>
                        <span class="link_name">Mis Compras</span>
                    </a>
                    <i class="fas fa-chevron-down arrow"></i>
                </div>
                <ul class="sub-menu">
                    <li><a class="link_name" href="#">Mis Compras</a></li>
                    <li><a href="#">Compras</a></li>
                    <li><a href="#">Favoritos</a></li>                
                </ul>
            </li>
            <li>
                <div class="icon-link">
                    <a href="#">
                        <i class="fas fa-percentage"></i>
                        <span class="link_name">Descuentos</span>
                    </a>
                    <i class="fas fa-chevron-down arrow"></i>
                </div>
                <ul class="sub-menu">
                    <li><a class="link_name" href="#">Descuentos</a></li>                 
                </ul>
            </li>
            <li>
                <div class="profile-details">
                    <div class="profile-content">
                        <img src="Admin.jpg" alt="User"></img>
                    </div>
                    <div class="name-job">
                        <div class="profile_name">Alvaro Barros</div>
                        <div class="job">Admin</div>
                    </div>
                    <i class="fas fa-sign-out-alt"></i>
                </div>
            </li>
            </ul>
            </div>
        </div>
    )
}

export default NavBar
