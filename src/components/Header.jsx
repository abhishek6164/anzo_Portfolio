import React from 'react' 
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
    <div className='absolute flex items-center justify-end w-full text-white z-10 py-16 px-20'>
      <button className='bg-black border-3 text-xl  px-4 py-1 hover:bg-gray-500 rounded-full '>Hire Me</button>
        <i className="ri-more-2-fill text-4xl ml-3  "></i>
    </div>
  )
}

export default Header
