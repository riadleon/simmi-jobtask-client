import React from 'react';
import { useLoaderData } from 'react-router-dom';

import BannerItem from './BannerItem';


const Banner = () => {
    const bannerData = useLoaderData([]);
    return (
        <div className="carousel w-full py-10 ">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }

        </div>
    );
};

export default Banner;