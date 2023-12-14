import Image from 'next/image';
import React from 'react';
import Streamfix from '../public/assets/projects/streamfix.jpeg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const streamfix = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={Streamfix}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Streamfix Application</h2>
          <h3>Amazon Athena / Amazon Lambda / AWS Glue / Quicksight / S3 / Apache Kafka</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This project is geared towards the secure management, optimization,
            and analysis of both structured and semi-structured videos derived
            from Streamfix real-time data. The primary focus is on establishing
            a robust infrastructure capable of efficiently handling diverse data
            sources, transforming raw data, and providing scalable, centralized
            storage for streamlined analytics. Key components include data
            ingestion mechanisms, an ETL (Extract, Transform, Load) system, the
            creation of a data lake, scalability considerations, cloud
            integration (specifically AWS), and the development of a reporting
            dashboard for insightful analytics.
          </p>
          <a
            href='https://github.com/victortosin02/streaming-application-pipeline'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          {/* <a
            href='https://property-finder-development.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a> */}
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Amazon Athena
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Amazon S3
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> AWS IAM
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Amazon Glue
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Amazon Lambda
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Quicksight
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default streamfix;
