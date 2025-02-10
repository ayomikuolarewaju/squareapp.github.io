import React from 'react'
import Image from '../../node_modules/next/image'
import show from '../../images/img-15.png'

function Showcase() {
  return (
    <div className='bg-white w-full h-full pt-[20px] '>
               <div className='w-full  px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 flex justify-center gap-10 items-start'>
              <div className="flex w-1/2 justify-center items-center h-[500px]">
                  <Image  alt='showimg' src={show}/>
              </div>
               <div className=" flex flex-col h-[500px] w-1/2 justify-start pt-10 gap-y-[50px] ">
          <h2 className='text-[40px] w-[450px]  text-black font-bold capitalize'>About Us</h2>
          <p className='text-black text-md w-[650px]'>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          <button className='rounded-lg w-[300px] h-[50px] text-white bg-[#420606] capitalize'>read more</button>
    </div>
        </div>
         </div>
  )
}

export default Showcase