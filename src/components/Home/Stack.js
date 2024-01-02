import React from 'react'
import {SiReact} from 'react-icons/si'
import { animated, useSpring } from "@react-spring/web";
import TechStack from "../../assets/techStack.png"

const Stack = () => {
  const [spring, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reverse: false,
  }));
    const list = [
        
    ]
  return (
    <div className='grid grid-cols-12 col-span-12 justify-between items-center gap-8 mt-64 mb-64 mr-16 ml-16'>
        <div className='grid grid-cols-8 col-span-7'>
            <span className='text-7xl col-span-6 font-black uppercase'>Tech Stack</span>
            <span className='text-sm col-span-6 font-light'> Labore et dolor consequat ea velit. t dolor consequat ea velit. t dolor consequat ea velit.</span>
        </div>
        <div className='grid grid-cols-5 col-span-5'>
            <img className="w-fill h-fill col-span-5" src={TechStack}/>
        </div>

    </div>
  )
}

export default Stack