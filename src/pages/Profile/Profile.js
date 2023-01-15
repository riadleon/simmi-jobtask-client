import React from 'react';
import { FaFirefoxBrowser, FaGithub, FaVoicemail } from 'react-icons/fa';

const Profile = () => {
    return (
        <div className='flex justify-center mb-80 mt-20'>
            <div className="flex flex-col justify-center max-w-xl p-6 shadow-md rounded-xl sm:px-12 bg-black dark:text-gray-100">
                <img src="https://media.licdn.com/dms/image/D5603AQHwwSQvvOu3MA/profile-displayphoto-shrink_200_200/0/1670790248209?e=1679529600&v=beta&t=KDURippBc0z_1eNSNkcRrlRWksAHo8qcBHrzxXkcQNo" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">Riad Shalahin Leon</h2>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-400">MERN-stack developer</p>
                    </div>
                    <div>
                        <p className='text-2xl font-bold'>Contact</p>
                    </div>
                </div>
                <p>Email : riadshalahinleon@gmail.com</p>
                <p>Website : <a href=" https://portfolioriadleo.web.app/"> riadleo </a> </p>
                <p>Phone : +8801621076462</p>
                <p>LinkedIN : <a href="https://www.linkedin.com/in/riad-shalahin-leon-962175224/"> Riad</a>  </p>
                <p>Github : <a href="https://github.com/riadleon">riadleo</a> </p>

            </div>
        </div>
    );
};

export default Profile;