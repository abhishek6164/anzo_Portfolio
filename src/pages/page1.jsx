import TiltText from '../components/TiltText';
import Page1Bottom from '../components/Page1Bottom';
import { useRef , useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal,setXVal] = useState(0);
  const [yVal,setYVal] = useState(0); 

  const mouseMoving = (e) => {
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/50)
    setYVal((e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/15)
    tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  };

  useGSAP(function(){
    gsap.to(tiltRef.current, {
      transform:`rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration:3,
      ease: 'elastic.out(1, 0.3),',
    })
  },[xVal, yVal]);

  return (
    <div
      onMouseMove={(e) => { mouseMoving(e) }}
      className="h-screen p-4 bg-white"
      style={{ position: 'relative' }}
    >
      <div id='page1-in'
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

        <TiltText abc={tiltRef} />
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
