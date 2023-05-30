import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/hod.jpeg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I specialize in building mobile responsive front-end UI and screens 
            for applications. I’m passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building design screens for applications using Figma, Adobe, and
            other design tools. I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great designer is not using one
            specific tool, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-600'>
            I started product design in 2021 managing by designing screens for
            Learning Managemnt Systems, Mortgage Finder, Laundry Application,
            Logistics App and may more. I have experience designing
            mock wireframes and prototypes for designed applications. I also conduct 
            UX development, feasibility and competitor analysis to ensure that the User
            Interface ensures an engaging user experience for application end users
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
