import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuBar.css'

const MenuBar = () => {
    const activeStyle = {
        color: 'red',
        textDeoration: 'none'

    }
    return (
        <div>

            {/* Navigation bar */}
            <nav class="navbar nav-bg navbar-expand-lg ">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse nv" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink to='/home' className='text-black fs-4 fw-bold m-3 p-3 fs-6' style={{
                                    fontFamily: 'Satisfy',
                                }} activeStyle={activeStyle}>Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to='/services' className='text-black fw-bold m-3 p-3 fs-4' style={{
                                    fontFamily: 'Satisfy',
                                }} activeStyle={activeStyle}>Services</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to='/feedback' className='text-black fw-bold m-3 p-3 fs-4' style={{
                                    fontFamily: 'Satisfy',
                                }} activeStyle={activeStyle}>FeedBack</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to='/about' className='text-black fw-bold m-3 p-3 fs-4' style={{
                                    fontFamily: 'Satisfy',
                                }} activeStyle={activeStyle}>About Us</NavLink>
                            </li>
                            <li class="nav-item">
                                <a href='' className=' nav-logo' style={{
                                    fontFamily: 'Fleur De Leah',
                                }} >Learning Skill</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MenuBar;