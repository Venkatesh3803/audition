import React from 'react'
import Hero from '../Components/Hero'
import Navber from '../Components/Navber'
import BottomMenu from '../Components/BottomMenu'

const Homepage = () => {
    return (
        <div className="w-full h-screen overflow-hidden overflow-y-scroll">
            <Navber />
            <Hero />
            <BottomMenu />
        </div>
    )
}

export default Homepage