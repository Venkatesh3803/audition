import React from 'react'
import brush from "../assets/brush.jpeg"
import netIcon from "../assets/net-icon.svg"
import icon from "../assets/icon.jpeg"
import { Link } from 'react-router-dom'


const BottomMenu = () => {
  return (
    <div>
      <div className="flex w-full items-center justify-center fixed bottom-0 left-0">

        <img className='w-20 h-20 rounded-full relative right-20' src={brush} alt="" />
        <div className="bg-blue-500 p-5 w-[40%] items-center flex justify-center gap-10 rounded-lg cursor-pointer">
          <Link to={"/audition"} className='flex items-center gap-5'>
            <img className='w-20 h-20 rounded-full' src={icon} alt="" />
            <div className="text-4xl font-bold">Protunity Window</div>
          </Link>
        </div>

        <img className='w-20 h-20 rounded-full relative left-20' src={netIcon} alt="" />

      </div>
    </div>
  )
}

export default BottomMenu