import TiltText from '../components/TiltText';
import Page1Bottom from '../components/Page1Bottom';
import { useRef } from 'react';

const Page1 = () => {

  const tiltRef = useRef(null)
  const mouseMoving = (e) => {

    console.log('Mouse moved:', e.clientX, e.clientY);

  };

  return (
    <div
      onMouseMove={mouseMoving}
      className="h-screen p-4 bg-white"
      style={{ position: 'relative' }}
    >
      <div
        className="shadow-xl p-10 shadow-gray-700 h-full w-full bg-cover bg-center rounded-[50px]"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1865,h_895,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg')",
          minHeight: '100%',
        }}
      >
        <img
          className="h-20 bg-transparent"
          src="https://static.wixstatic.com/media/f1c650_88a2ca4f663c44a3a6c61d8c7bcb0e7a~mv2.png"
          alt=""
        />

        <div ref={tiltRef} id='tiltDiv' className='mt-40'>
          <h1 className='text-[4.2vw] leading-[4vw] uppercase font-[anzo2]'>I am <span className='text-gray-900'>DARK MODE</span>™</h1>
          <h1 className='text-[8vw] leading-[7vw] font-[anzo2]'>DESIGNER</h1>
          <h1 className='text-[4.2vw] leading-[4vw] uppercase font-[anzo2]'>TO Hire</h1>
        </div>
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
