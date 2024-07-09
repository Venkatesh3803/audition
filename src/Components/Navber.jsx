
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
            <div className="flex w-full bg-white items-center justify-around py-5 fixed left-0 top-0">
                <div className='w-16 h-16 rounded-full bg-green-500'></div>
                <div className="">
                    <div className="flex items-center gap-5 text-blue-500">
                        <RiDashboardHorizontalFill size={60} color='blue' />
                        <h1 className='text-3xl font-bold'>Social Audition</h1>
                    </div>
                    <h2 className='text-6xl'>{time.toLocaleTimeString()}</h2>
                </div>
                <div className="flex items-center justify-center w-20 h-20 rounded-full border border-yellow-500">
                <HiBadgeCheck size={60} color='green'/>
                </div>
            </div>
        </div>
    );
};




export default Navber