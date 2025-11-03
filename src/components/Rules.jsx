import React from 'react'

const data=["Select any number",'Click on dice image',"after click on  dice  if selected number is equal to dice number you will get same point as dice ","if you get wrong guess then  2 point will be dedcuted "]

function Rules({state}) {
  return (
  <section className={`p-10 bg-pink-300  max-w-[800px] ${state ?"block":"hidden"}`}>
    <h1 className='text-3xl font-bold mb-5'>How to play dice game</h1>
   {data.map((para,index)=>(
    <p className='mt-2.5' key={index}>{para}</p>
   ))}
  </section>
  )
}

export default Rules
