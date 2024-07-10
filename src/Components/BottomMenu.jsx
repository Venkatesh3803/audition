import React from 'react'
import brush from "../assets/brush.jpeg"
import netIcon from "../assets/net-icon.svg"
import icon from "../assets/icon.jpeg"
import { Link } from 'react-router-dom'


const BottomMenu = () => {
  return (
    <div>
      <div className="flex w-full items-center justify-center fixed bottom-5 left-0">
        <img className='md:w-20 md:h-20 h-12 w-12  rounded-full relative md:right-20 right-5' src={brush} alt="" />
        <div className="bg-blue-500 p-5 w-[40%] items-center flex justify-center gap-10 rounded-lg cursor-pointer">
          <Link to={"/audition"} className='flex items-center gap-5'>
            <img className='md:w-20 md:h-20 h-12 w-12 hidden sm:block rounded-full' src={icon} alt="" />
            <div className="text-sm md:text-2xl  lg:text-4xl font-bold">Protunity Window</div>
          </Link>
        </div>

        <img className='md:w-20 md:h-20 h-12 w-12 rounded-full relative md:left-20 left-5' src={netIcon} alt="" />

      </div>
    </div>
  )
}

export default BottomMenu