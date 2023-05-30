import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/Frame 3 (1) (2).png';
import cryptoImg from '../public/assets/projects/Frame 1 (3) (1).png';
import netflixImg from '../public/assets/projects/Frame 2 (1) (1).png';
import twitchImg from '../public/assets/projects/everywhere.jpeg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (  
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='MONCORAN App'
            backgroundImg={cryptoImg}
            projectUrl='/property'
            tech='Figma'
          />
          <ProjectItem
            title='HOD Laundry App'
            backgroundImg={netflixImg}
            projectUrl='/crypto'
            tech='Figma'

          />
          <ProjectItem
            title='Mortgage Finder App'
            backgroundImg={propertyImg}
            projectUrl='/netflix'
            tech='Figma'

          />
          <ProjectItem
            title='Everywhere Logistics App'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Figma'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
