import React from 'react';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const Hero = () => {
  return (
    <div>
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-center tracking-wide">
                CyberR: Your Vision, <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>Our Technology</span>
            </h1>

            <p className='mt-10 text-sm text-center text-neutral-500 max-w-4xl lg:text-lg'>
             Unleash your creativity and bring your Virtual Reality applications to life with our user-friendly development tools. Start today and transform your imagination into a captivating reality!
            </p>

            <div className="flex justify-center my-10">
                <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 rounded-md px-4 mx-3'>Start for free</a>

                <a href="#" className='border py-3 rounded-md px-4 mx-3'>Documentation</a>
            </div>

            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange mx-2 my-4'>
                    <source src={video1} type='video/mp4' />
                    Your browser does not support the video.
                </video>

                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange mx-2 my-4'>
                    <source src={video2} type='video/mp4' />
                    Your browser does not support the video.
                </video>
            </div>
        </div>
    </div>
  )
}

export default Hero