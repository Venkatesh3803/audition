
import React, { useEffect, useState } from 'react'
import { HiBadgeCheck } from 'react-icons/hi';
import { RiDashboardHorizontalFill } from 'react-icons/ri';

const Navber = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timerID);
    }, []);

    return (
        <div>
            <div className="flex w-full bg-white items-center justify-around py-5 sticky top-0 left-0">
                <div className='md:w-20 md:h-20 h-12 w-12  rounded-full bg-green-500'></div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center md:gap-5 gap-2 text-blue-500">
                        <RiDashboardHorizontalFill className='md:w-20 md:h-20 h-8 w-8 ' color='blue' />
                        <h1 className=' md:text-3xl font-bold'>Social Audition</h1>
                    </div>
                    <h2 className='md:text-6xl'>{time.toLocaleTimeString()}</h2>
                </div>
                <div className="flex items-center justify-center md:w-20 md:h-20 h-12 w-12  rounded-full border border-yellow-500">
                <HiBadgeCheck size={60} color='green'/>
                </div>
            </div>
        </div>
    );
};




export default Navber