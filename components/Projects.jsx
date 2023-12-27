import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Recommender from '../public/assets/projects/recommender.PNG';
import Mapdr from '../public/assets/projects/mapdr.jpg';
import TradingBot from '../public/assets/projects/TradingBot.jpg';
import Everywhere from '../public/assets/projects/everywherelog.PNG';
import Architecture from '../public/assets/projects/architecture.jpg';
import Streamfix from '../public/assets/projects/streamfix.jpeg';
import Hulu from '../public/assets/projects/hulu.jpg';
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
            title='Career Reco'
            backgroundImg={Recommender}
            projectUrl='/recommender'
            tech='AWS, Next JS, Flask'
          />
          <ProjectItem
            title='Mapdr Medical Imaging'
            backgroundImg={Mapdr}
            projectUrl='/medical'
            tech='Docker, Python, Javascript'

          />
          <ProjectItem
            title='Trading Bot'
            backgroundImg={TradingBot}
            projectUrl='/trading'
            tech='Apache Spark, Hadoop, MapReduce, & PyDeequ'
          />
          <ProjectItem
            title='Streamfix App'
            backgroundImg={Streamfix}
            projectUrl='/streamfix'
            tech='AWS Glue, AWS Lambda, S3, Amazon Thena, IAM, S3, Amazon Quicksight'

          />
          <ProjectItem
            title='Kafka Streaming Application'
            backgroundImg={Architecture}
            projectUrl='/streaming'
            tech='AWS Glue, Amazon Athena, EMR, Python, S3'
          />
          <ProjectItem
            title='Everywhere Logistics App'
            backgroundImg={Everywhere}
            projectUrl='/everywhere'
            tech='GCP, Looker Studio & Big Query'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
