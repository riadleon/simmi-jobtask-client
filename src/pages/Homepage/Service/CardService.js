import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar } from 'react-icons/fa';

const CardService = ({ service }) => {
    const { _id, image, tittle, description } = service;
    return (
        <div>
            <article className="flex flex-col ">
                <Link>
                    <img alt="" className="object-cover w-full h-52 " src={image} />
                </Link>
                <div className="flex flex-col flex-1 p-6">
                    <p className="text-lg tracking-wider uppercase hover:underline text-black font-bold">{tittle}</p>
                    <h3 className="flex-1 py-2 text-s font-semibold leading-snug">{description.substr(0, 100)}</h3>

                </div>
            </article>
            <div className='text-center'>
                <button className="btn btn-ghost bg-primary">
                    <Link to={`/service/${_id}`}>View Details... </Link>
                </button>

            </div>
        </div >
    );
};

export default CardService;