import Image from "next/image";
import React from "react";
import twitchImg from "../public/assets/projects/everywhere.jpeg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const everywhere = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={twitchImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Everwhere Logistics Data Pipeline</h2>
          <h3>
            Google Big Query / Mage AI / SQL / Python / Google Cloud Storage /
            Looker Studio
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The primary aim of this project is to conduct comprehensive data
            analytics on the datasets of a delivery and logistics company.
            Leveraging a combination of industry-leading tools and technologies,
            the project encompasses data storage, processing, analysis, and
            visualization. Key components include Google Cloud Platform (GCP)
            Storage, Python for scripting, Compute Instance for scalable
            computing, Mage Data Pipeline Tool for data orchestration, BigQuery
            for analytical querying, and Looker Studio for advanced
            visualization.
          </p>
          <a
            href="https://lookerstudio.google.com/reporting/d8a10780-644d-471e-a54e-414bb1a69a9c"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/victortosin02/Everywhere_Logistics_etl_pipeline"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google Big Query
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mage AI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google Cloud Storage
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google Compute
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Looker Studio
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default everywhere;
