import React from 'react'

const Page5 = () => {
  return (
    <div className='h-screen relative p-10  bg-white'>
      <div className='h-full w-full overflow-hidden bg-black rounded-[50px]'>
        <video src="/src/assets/moon.mp4" autoPlay='true' loop muted className='h-full w-full object-cover rounded-[50px]'></video>
        <h1 className='font-[anzo2] text-[15vw] absolute uppercase -bottom-0 left-20'>About</h1>
      </div>
      
    </div>
  )
}

export default Page5
