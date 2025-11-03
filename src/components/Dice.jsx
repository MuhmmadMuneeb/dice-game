import React, { useContext } from 'react'
import Rules from './Rules'
import { scrollContex } from '../context'

const Dice = ({ handleclick, click, dice, currentdice, selectNumber, setscore,error }) => {
    const{playGame}=useContext(scrollContex)
    function score() {
        setscore(0)

    }

    return (
        <section ref={playGame} className=' space-y-10'>
            <div className='h-screen flex flex-col justify-center items-center space-y-10 '>
                <img onClick={selectNumber && dice || error  } className=' object-cover' src={`src/assets/dice/dice_${currentdice}.png`} alt="" />
                <p className='font-medium text-center text-2xl'>Click on Dice to roll</p>
                <button onClick={score} className='px-16 py-2.5 rounded-md hover:bg-black bg-none hover:text-white border-2 cursor-pointer'>Reset Score</button>
                <button onClick={handleclick} className='px-16 py-2.5 rounded-md hover:bg-black bg-none hover:text-white border-2 cursor-pointer'>Show Rules</button>
            </div>
            <div className='flex justify-center items-center'>
                <Rules state={click} />
            </div>
        </section>
    )
}

export default Dice
