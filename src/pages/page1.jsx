import TiltText from '../components/TiltText';
import Page1Bottom from '../components/Page1Bottom';

const Page1 = () => {

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
        <TiltText />
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
