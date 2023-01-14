import React from 'react';
import Banner from './Banner/Banner';
import './Homepage.css';
import Service from './Service/Service';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
        </div>
    );
};

export default Homepage;