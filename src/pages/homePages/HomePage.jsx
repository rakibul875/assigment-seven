import React from 'react';
import Banner from '../../components/HomePage/Banner';
import HomeCart from '../../components/HomePage/HomeCart';
import AllFriends from './AllFriends';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <HomeCart/>
            <AllFriends/>
        </div>
    );
};

export default HomePage;