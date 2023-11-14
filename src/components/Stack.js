import React from 'react'
import {SiReact} from 'react-icons/si'

const Stack = () => {
    const list = [
        
    ]
  return (
    <div className='grid grid-cols-12 col-span-12 justify-between items-center gap-8 mt-64 mb-64 mr-16 ml-16'>
        <div className='grid grid-cols-8 col-span-7'>
            <span className='text-7xl col-span-6 font-extralight'>Tech Stack</span>
            <span className='text-sm col-span-6 font-light'> Labore et dolor consequat ea velit. t dolor consequat ea velit. t dolor consequat ea velit.</span>
        </div>
        <div className='grid grid-cols-5 col-span-5'>
            <SiReact size="70"/>
            <SiReact size="70"/>
            <SiReact size="70"/>
            <SiReact size="70"/>
            <SiReact size="70"/>
            <SiReact size="70"/>
            <SiReact size="70"/>
            <SiReact size="70"/>
            <SiReact size="70"/>
        </div>

    </div>
  )
}

export default Stack