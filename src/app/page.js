'use client'
import Points from '@/components/Points'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import React, { useEffect } from 'react'


const Home = () => {
  
  return (
    <div className='bg-white w-full'>
      <div><Services/></div>
      <div><Portfolio /></div>
      <div>
        <Points
          title='We Are Providing Best Business Service' 
          describe='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
          call='contact us'
          />
      </div>
    </div>
  )
}

export default Home