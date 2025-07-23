import React from 'react'

const Page3 = () => {
    return (
        <div className='h-screen relative bg-white flex items-center justify-center'>
            <img className='absolute z-40 h-[75vh] w-[75vw] ' src="/src/assets/monitorphoto.avif" alt="" />
            <video autoPlay="true" loop muted className='h-[55vh] z-10 w-[55vw] object-cover relative' src="/src/assets/monitor.mp4"></video>
            <div className='h-0.5 w-4/6 top-[40%] absolute z-0 bg-black'></div>
            <div className='h-0.5 w-4/5 top-[55%] absolute z-0 bg-black'></div>
            <div className='h-0.5 w-4/6 top-[70%] absolute z-0 bg-black'></div>        
        </div>
    )
}

export default Page3
