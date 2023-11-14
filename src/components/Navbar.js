import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navLink = [
        { name: "home" , to: "/" },
        { name: "about" , to : "/about" },
        { name: "work" , to : "/work" },
        { name: "blog" , to : "/blog" },
        { name: "profile" , to: "/profile" },
        { name: "contact" , to : "/contact"}
    ]
    // const [first, setfirst] = useState(second)
    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    
  return (
    <div className='grid grid-cols-12 justify-between items-center p-8'>
        <div className='grid grid-cols-5 col-span-6'>
            Vaishali
        </div>
        <div className='flex col-span-6 gap-8'>
            {
                navLink.map((element)=>(
                    <Link to={element.to} className='uppercase font-extralight grid col-span-1 hover:text-gray-600 active:underline focus:underline'>{element.name}</Link>
                ))
            }
        </div>
    </div>
  )
}

export default Navbar