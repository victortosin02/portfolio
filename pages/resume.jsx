import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Clint | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Agboola Oyekola</h2>
          <div className='flex'>
            <a
              href='https://us.docworkspace.com/d/sIGq-46NN6Kr0ngY/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='w-full p-4 text-gray-100 mt-2'>Download CV</button>
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Product Design{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated product designer
          with experience in User Interface and Experience and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and 
          solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Figma
            <span className='px-2'>|</span> Adobe XD
            <span className='px-2'>|</span>Blender
            <span className='px-2'>|</span>Invision
            <span className='px-2'>|</span>Sketching
            <span className='px-2'>|</span>Adobe PhotoShop
            <span className='px-2'>|</span>Corel Draw
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            CLOUDWARE TECHNOLOGIES
            </span>
            <span className='px-2'>|</span>Oyo, Nigeria
          </p>
          <p className='py-1 italic'>Senior Product Designer (2022 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Analyzing how a new product ties in with market needs and consumer preferences
            </li>
            <li>
            Set design requirements based on information from internal teams and user research
            </li>
            <li>
            Coordinate with other design team members to ensure consistent and accurate communication
            </li>
            <li>
            Work closely with product engineers to suggest improvements for products and processes
            </li>
            <li>
            Modify and revise existing designs to meet changing customer preferences
            </li>
            <li>
            Present product design ideas to cross-functional teams and senior leadership
            </li>
          </ul>
        </div>


        {/* Personal Experience
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Teaching & Mentoring Web Development
            </span>
            <span className='px-2'>|</span>Dallas, TX
          </p>
          <p className='py-1 italic'>Code Commerce - Youtube Channel (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              In 2021 I started “Code Commerce”, a YouTube channel focused on
              sharing what I’m learning in web development, specifically
              front-end development.
            </li>
            <li>
              Private 1 on 1 Zoom coaching calls related to web development.
              More specifically debugging, teaching basic web development
              concepts and code reviews.
            </li>
          </ul>
        </div> */}

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Vintage Hotel</span>
            <span className='px-2'>|</span>Lagos, Nigeria
          </p>
          <p className='py-1 italic'>Sales Supervisor  (2015 – 2017)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Provide reports to top management like sales reports, 
            lead generation reports, customer complaints reports, 
            and new customers’ on-boarded reports.
            </li>
            <li>
            Serve as a point of reference to employees in terms 
            of showing great work ethic, habits, personal character, 
            and professional character.
            </li>
            <li>
            Develop and maintain accurate records of prospects, 
            leads, pricing, sales activities, and active clients.
            </li>
            <li>
            Identify the trends in the market, both current, and 
            future that are likely to affect the performance of the organization.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Dogans Sugar Limited</span>
            <span className='px-2'>|</span>Lagos, Nigeria
          </p>
          <p className='py-1 italic'>Sales Executive  (2017 – 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Gather feedback from customers or prospects and share with internal teams
            </li>
            <li>
            Ensure the availability of stock for sales and demonstrations
            </li>
            <li>
            Set up meetings with potential clients and listen to their wishes and concerns
            </li>
            <li>
            Negotiate/close deals and handle complaints or objections
            </li>
            <li>
            Actively seek out new sales opportunities through cold calling, networking and social media
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
