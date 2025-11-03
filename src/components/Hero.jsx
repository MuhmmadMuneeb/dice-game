import React, { useContext, useRef } from 'react'
import Dice from './Dice'
import { scrollContex } from '../context'

const Hero = () => {
   const {handlescroll}=useContext(scrollContex)
    return (
        <section className='flex items-center flex-col justify-center flex-wrap h-screen' >
            <div className='min-w-[600px] '>
                <img className='object-contain w-full' src="src/assets/img-bg.png" alt="" />
            </div>
            <div className='min-w-[500px] relative space-y-10'>
                <h1 className='font-bold text-8xl w-full'>DICE GAME</h1>
                <button onClick={handlescroll} className='px-15 py-1.5 bg-black text-white text-center rounded-md absolute right-1.5'>Play Now</button>
            </div>

        </section>
    )
}

export default Hero
