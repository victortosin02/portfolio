import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Victor | Resume</title>
        <meta
          name="description"
          content="I’m a data engineer responsible for designing, constructing, and maintaining the architecture 
          and infrastructure necessary for processing, storing, and analyzing large volumes of data."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-transparent my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Victor Oladejo</h2>
          <div className="flex">
            <a
              href="https://drive.google.com/file/d/1dwUFxD_7R9JYVQksB81h_elKokDhgKSp/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="w-full p-4 text-gray-100 mt-2">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Team Player{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Team Player</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated product designer with experience
          in User Interface and Experience and organizational effectiveness in
          fast-paced and challenging environments. Adept at developing
          strategies and driving streamlined operations. Diverse analytical
          skills, team collaboration, and relationship building. Consummate
          professional, and solid interpersonal abilities and complex
          problem-solving skills. Effective and proven track record of critical
          thinking, idea generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>AWS
            <span className="px-2">|</span> GCP
            <span className="px-2">|</span>Apache Spark
            <span className="px-2">|</span>Apache Kafka
            <span className="px-2">|</span>Apche Airflow
            <span className="px-2">|</span>Python
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>Docker
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">EveryWhere Logistics</span>
            <span className="px-2">|</span>Remote (Freelance)
          </p>
          <p className="py-1 italic">Data Engineer (Oct - Nov 2023)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Analyzing how a new product ties in with market needs and consumer
              preferences
            </li>
            <li>
              Set design requirements based on information from internal teams
              and user research
            </li>
            <li>
              Crafted an innovative data analytics strategy, leveraging
              cutting-edge technologies and platforms to drive comprehensive and
              efficient data analysis initiatives.
            </li>
            <li>
              Improved data reliability by 25% through the design and
              implementation of robust data ingestion processes, ensuring
              consistent and high-quality data in GCP Storage.
            </li>
            <li>
              Enhanced data quality and analysis accuracy by 30% through the
              development of advanced Python transformation routines,
              effectively cleansing and formatting data for optimal insights.
            </li>
            <li>
              Streamlined data pipeline orchestration by 20% through proficient
              provisioning and management of Compute Instances on GCP, coupled
              with the strategic use of Mage Data Pipeline Tool.
            </li>
            <li>
              Optimized data accessibility and analysis capabilities by
              conﬁguring and managing BigQuery as a data warehouse, enabling
              eﬃcient querying and analysis processes.
            </li>
            <li>
              Enhanced data-driven decision-making by integrating Looker Studio,
              thereby creating interactive dashboards, and insightful reports,
              facilitating clear communication of analytical ﬁndings to
              stakeholders.
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

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Explore AI Academy</span>
            <span className="px-2">|</span>Johannessburg, South Africa (Remote)
          </p>
          <p className="py-1 italic">Data Engineer</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured data security compliance by implementing robust security
              measures, including encryption and access controls, preventing
              unauthorized data manipulation.
            </li>
            <li>
              Improved workﬂow management by 25% through Docker
              containerization, thereby ensuring portability and consistency in
              the data pipeline
            </li>
            <li>
              Achieved seamless task orchestration by creating well- deﬁned
              Apache Airﬂow DAGs, ensuring eﬃcient and reliable data migration
            </li>
            <li>
              Reduced data processing delays by 20% through comprehensive data
              proﬁling leveraging on services like Apache Spark, thereby
              enabling quicker identiﬁcation and resolution of potential issues.
            </li>
            <li>
              Achieved optimal cloud infrastructure on AWS by carefully
              selecting and conﬁguring services, resulting in a 20% improvement
              in data transfer speed
            </li>
            <li>
              Skillfully orchestrated the collection of extensive career and job
              data from various sources, ensuring data integrity and relevance.
              Ingested the gathered data seamlessly into the AWS cloud
              environment, establishing a foundation for subsequent analysis.
            </li>
            <li>
              Successfully integrate the machine learning models into a dynamic
              web interface built using NextJS for the frontend and Flask for
              the backend due background web development skills in previous
              roles.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">CloudWare Technologies</span>
            <span className="px-2">|</span>Lagos, Nigeria
          </p>
          <p className="py-1 italic">Software Engineer (2020 – 2023)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Achieved a remarkable 30% reduction in page load times,
              significantly enhancing user satisfaction, through the successful
              implementation of performance optimization techniques
            </li>
            <li>
              Elevated project performance by 20% through the strategic
              integration of advanced technologies such as Next JS for
              server-side generation, seamless routing, and scaled codebase
              production.
            </li>
            <li>
              Strengthened system integrity by implementing robust security
              measures, resulting in a 40% reduction in security vulnerabilities
              and ensuring the confidentiality of sensitive data.
            </li>
            <li>
              Demonstrated a commitment to continuous learning by acquiring
              advanced proficiency in Next JS and related technologies,
              contributing to a 15% increase in overall development efficiency.
            </li>
            <li>
              Played a key role in achieving project milestones, contributing to
              a 25% acceleration in feature completion and task execution within
              established project timelines
            </li>
            <li>
              Ensured seamless integration with existing infrastructure,
              resulting in a 30% improvement in system compatibility and reduced
              integration challenges with cross-functional teams.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
