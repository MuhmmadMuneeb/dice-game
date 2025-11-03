import React, { useState } from 'react'
import Dice from './Dice'

const btns = [
    1, 2, 3, 4, 5, 6
]
const Score = () => {
    const [click, setclick] = useState(false)
    const [currentdice, setcurrentdice] = useState(1)
    const [score, setscore] = useState(0)
    const [selectNumber, setselectNumber] = useState(null)
    const [warning, setwarning] = useState("")

    console.log(selectNumber)
    function error() {
        if (!selectNumber) {
            setwarning("You have not selected any number")
            console.log("called")
            return
        }

    }

    function dice() {
        setwarning("")
        const random = Math.floor(Math.random() * 6) + 1
        setcurrentdice(random)
        // console.log(currentdice)
        if (random === selectNumber) {
            setscore(prev => prev + selectNumber)
        }
        else {
            setscore(prev => prev - 2)
        }

    }
    function handleclick() {
        if (click === true) {
            setclick(false)

        } else {
            setclick(true)
        }
    }
    return (
        <section className='flex justify-center flex-col items-center p-36 '>
            <div className=' flex justify-between items-center xl:min-w-[1200px] flex-wrap'>
                <div>
                    <p className='text-8xl font-bold'>{score}</p>
                    <p className='font-medium'>Total Score</p>
                </div>
                <div className='relative space-y-5'>
                    <p className={`font-medium text-red-500 text-end`}>{warning}</p>
                    {btns.map((btn, index) => (
                        <button key={index} onClick={() =>
                            setselectNumber(btn)


                        } className={`cursor-pointer px-7 py-4 text-center mr-3.5  border-2 ${btn === selectNumber ? "bg-black text-white" : ""} bg-none`}>{btn}</button>
                    ))}
                    <p className='font-medium absolute right-3'>Select Number</p>
                </div>
            </div>
            <div>
                <Dice click={click} handleclick={handleclick} dice={dice} currentdice={currentdice} selectNumber={selectNumber} setscore={setscore} error={error} />
            </div>
        </section>
    )
}

export default Score
