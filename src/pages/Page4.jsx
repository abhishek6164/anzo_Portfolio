import React from 'react';

const Page4 = () => {
  return (
    <div className="relative h-full rounded-[10%]  overflow-hidden bg-white text-white p-10 ">

      {/* ⭐ Stars Background */}
      <video
        src="/src/assets/stars.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0  px-10 w-full h-full object-cover z-0"
      />     

      {/* 🪐 Earth & Moon */}
      <div className="relative z-10 flex justify-end items-center h-full gap-10 pr-20">
        <video
          src="/src/assets/earth.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-[350px] w-auto rounded-full object-cover"
        />
        <video
          src="/src/assets/moon1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-[200px] w-auto rounded-full object-cover"
        />
      </div>

      {/* 📝 Text Content */}
      <div className="absolute z-10 top-28 left-14 max-w-[600px]">
        <h1 className="text-[8vw] font-bold uppercase leading-none mb-2">About</h1>
        <p className="font-semibold text-lg uppercase mb-4">
          INTUITIVE APPROACH | FUTURE-FOCUSED STRATEGY | UNCOMPROMISING DISCIPLINE
        </p>
        <p className="text-gray-300 leading-relaxed">
          Anyone can create. Some have the talent to design. But who can capture and translate your
          vision into a lasting legacy? True design is more than aesthetics; web design is a complete
          extension of your brand – a seamless blend of visual identity, your story and messaging, your
          goals and strategy working together to create a powerful digital experience. It’s not a
          separate piece – it’s your brand in action.
        </p>

        <button className="mt-6 border-2 border-white px-8 py-2 rounded-full text-white hover:bg-white hover:text-black transition">
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default Page4;
