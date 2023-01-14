import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailService = () => {
    const { _id, image, tittle, description } = useLoaderData();
    return (
        <div className='p-5 ml-10'>
            <div className='mb-12'>
                <h3 className='text-5xl  font-bold mb-5 mt-5'>{tittle}</h3>
                <img className='w-2/5 h-96 mb-10' src={image} alt="" />

                <p className='text-2xl mb-10'> <span className='font-bold'>What is {tittle}? </span> {description}</p>

            </div>

        </div>
    );
};

export default DetailService;