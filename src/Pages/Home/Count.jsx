import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Count = () => {
  const [prev, View] = useInView({triggerOnce:true });

  return (
    <div className='w-11/12 mx-auto'>

    
      <div ref={prev} className='lg:mb-24 border bg-[#eeeeee] border-gray-300 grid md:grid-cols-4 grid-cols-1 lg:gap-10'>
        {[
              {  count: 10, label: 'Years of Experience', duration: 4 },
          {  count: 1500, label: 'Events Hosted', duration: 7 },
          {  count: 3670, label: 'Goals Achieved', duration: 10 },
          {  count: 4200, label: 'Active Members', duration: 12 },
        ].map((item, idx) => 
          
          (
          <div key={idx} className=' w-11/12 mx-auto p-10 '>
           
            <div className="flex text-4xl items-center justify-center font-extrabold mt-2">
              {View ? (
                <CountUp className='font-extrabold text-black lg:text-7xl text-5xl' end={item.count} duration={item.duration} start={1} />
              ) : 
              
              (
                0
              )}

              <p className='text-[#1d7e14]'>+</p>
            </div>
            
            <h2 className=' text-[#1d7e14] text-center text-xl mt-5 font-bold '>{item.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Count;
