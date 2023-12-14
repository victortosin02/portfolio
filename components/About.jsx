import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/victor picture (1).png';

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
          I am a professional responsible for designing, constructing, and maintaining big data
          infrastructure necessary for processing, storing, and analyzing large volumes of data.
          As a professional with astute experience in processing large datasets, data architecture 
          including data ingestion pipeline design, data governance, data modeling, and CI/CD design. 
          My focus on data integrity and cross-functional integrations both on and off the cloud has 
          consistently boosted efficiency coupled with optimized and scalable data pipelines.
          </p>
          <p className='py-2 text-gray-600'>
            I started Data Engineering in one of the renowned Artifical Intelligence Academy in Africa,
            Explore AI Academy based in South Africa. After my intensive course work at Explore AI, I went
            ahead to pursue an Internship with the Academy where I worked in a cross-functional team of Data 
            Engineers and scientist and able to build a career recommendation system using core and advanced
            machine learning models. Due to my prior knowledge as a software engineer, I was able to help the
            team to integrate the models into a web user interface and responsible for maintaining the interface
            data pipeline.
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
