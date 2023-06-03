import React from 'react';
import Navbar from '../Shared/Navbar';
import Roomates from '../Roomates/Roomates';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
           <Navbar/> 
           <Banner/>
           <Roomates/>
        </div>
    );
};

export default Home;