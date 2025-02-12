import React from 'react'

function Form() {
  return (
      <div className='w-full  px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 flex flex-col justify-center gap-y-[60px] text-white gap-3 items-center pt-[20px] pb-[20px]'>
          
          <div className="flex w-full justify-start items-center h-[100px] p-5">
              <h1 className="text-[70px] text-black font-bold">contact us</h1>
              <p className='text-black border-b-4 w-[400px] border-black'></p>
          </div>

          <div className='flex flex-col w-1/2 gap-y-5'>
          <input className='p-3 rounded-lg bg-transparent ring-2 ring-[#B3973D]' type="text"  placeholder="Enter Your fullName" name="FullName"/>
              <input className='p-3 rounded-lg bg-transparent ring-2 ring-[#B3973D]' type="text"  placeholder="Enter Your Email" name="Email"/>
                  <input className='p-3 rounded-lg bg-transparent ring-2 ring-[#B3973D]' type="text" placeholder="Phone" name="Phone"/>
                  <div className='p-3 rounded-lg bg-[#B3973D] text-white font-bold text-center ring-2 ring-[#B3973D]'><a href="#">Subscribe</a></div>
              </div>
      </div>
  )
}

export default Form