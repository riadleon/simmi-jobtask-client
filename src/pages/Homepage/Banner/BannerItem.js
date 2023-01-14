import React from 'react';
import './BannerItem.css';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" className="rounded-xl " />
            </div>
            <div className="lg:mt-48 absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-2xl lg:text-6xl font-bold text-white'>
                    <span className='text-secondary'>Welcome</span> <br />
                    to our <br />
                    <span className='text-primary'>phoneGPT</span> Servicing
                </h1>
            </div>
            <div className="mt-10 lg:mt-48 absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className='lg:text-xl text-warning font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle btn-primary mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-primary btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;