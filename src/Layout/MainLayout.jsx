import React from 'react';
import HomePage from '../pages/homePages/HomePage';
import { Outlet } from 'react-router';
import Footer from '../components/shared/footer/Footer';
import NavBar from '../components/shared/navBar/NavBar';

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;