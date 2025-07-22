import React from 'react'

const TiltText = (props) => {
  return (
    <div ref={props.abc} id='tiltDiv' className='mt-40'>
      <h1 className='text-[4.2vw] leading-[4vw] uppercase font-[anzo2]'>I am <span className='text-gray-900'>DARK MODE</span>™</h1>
      <h1 className='text-[8vw] leading-[7vw] font-[anzo2]'>DESIGNER</h1>
      <h1 className='text-[4.2vw] leading-[4vw] uppercase font-[anzo2]'>TO Hire</h1>
    </div>
  )
}

export default TiltText
