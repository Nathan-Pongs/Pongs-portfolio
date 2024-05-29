import React from 'react';
import Marquee from "react-fast-marquee";

const Mymarquee = () => {

  return (
    <div>
      <Marquee 
      direction="left" className='bg-[#161947] md:!w-[100vw] self-end'
    //   speed={100}
      >
        <div className='flex py-6 items-center justify-around w-fit gap-10 md:w-[100vw]'>
        <div className='flex gap-2 text-2xl'><span><img src='https://img.icons8.com/?size=100&id=19294&format=png&color=000000' className='w-[70px]'/></span><p className="text-2xl font-semibold">Front-End</p></div>
        <div className='flex gap-2 text-2xl'><span><img src='https://img.icons8.com/?size=100&id=19294&format=png&color=000000' className='w-[70px]'/></span><p className="text-2xl font-semibold">Back-End</p></div>
        <div className='flex gap-2 text-2xl'><span><img src='https://img.icons8.com/?size=100&id=19294&format=png&color=000000' className='w-[70px]'/></span><p className="text-2xl font-semibold">UX/UI</p></div>
        </div>
      </Marquee>
    </div>
  );
};

export default Mymarquee;
