import React from 'react';

import { FiTwitter, FiInstagram } from 'react-icons/fi';

import config from '../config/index.json';
import Divider from './Divider';

const Team = () => {
  const { team } = config;

  return (
    <section className={`bg-background py-8`} id="team">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {team.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
      </div>
      <div className="lg:flex md:flex sm:flex items-center xl:justify-around flex-wrap md:justify-around sm:justify-around lg:justify-around bg-sky px-10 pt-20">
        {team.members.map((member) => (
          <div
            key={member.name}
            className="xl:w-3/4 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-xl lg:w-2/5"
          >
            <div className="rounded overflow-hidden shadow-md bg-white">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  <img
                    src={member?.avatar}
                    alt={member?.name}
                    className="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div className="px-6 mt-16">
                <div className="font-bold text-3xl text-center pb-1">
                  {member?.name}
                </div>
                <p className="text-gray-800 text-sm text-center">
                  {member?.title}
                </p>
                <p className="text-center text-gray-600 text-base pt-3 font-normal">
                  {member?.description}
                </p>
                <div className="w-full flex justify-center pt-5 pb-5">
                  <a href={member?.socials?.twitter} className="mx-5">
                    <div>
                      <FiTwitter />
                    </div>
                  </a>
                  <a href={member?.socials?.instagram} className="mx-5">
                    <div>
                      <FiInstagram />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>{' '}
    </section>

    // <div>
    //   <div className="w-full bg-gray-100 px-10 pt-10">
    //     <div className="container mx-auto">
    //       <div className="container flex justify-center mx-auto pt-16">
    //         <div>
    //           <p className="text-gray-500 text-lg text-center font-normal pb-3">
    //             {team.title}
    //           </p>
    //           <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
    //             {team.subtitle}
    //           </h1>
    //         </div>
    //       </div>
    //       <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
    //         {team.members.map((member) => (
    //           <div
    //             key={member.name}
    //             className="xl:w-3/4 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-xl lg:w-2/5"
    //           >
    //             <div className="rounded overflow-hidden shadow-md bg-white">
    //               <div className="absolute -mt-20 w-full flex justify-center">
    //                 <div className="h-32 w-32">
    //                   <img
    //                     src={member?.avatar}
    //                     alt={member?.name}
    //                     className="rounded-full object-cover h-full w-full shadow-md"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="px-6 mt-16">
    //                 <div className="font-bold text-3xl text-center pb-1">
    //                   {member?.name}
    //                 </div>
    //                 <p className="text-gray-800 text-sm text-center">
    //                   {member?.title}
    //                 </p>
    //                 <p className="text-center text-gray-600 text-base pt-3 font-normal">
    //                   {member?.description}
    //                 </p>
    //                 <div className="w-full flex justify-center pt-5 pb-5">
    //                   <a href={member?.socials?.twitter} className="mx-5">
    //                     <div>
    //                       <FiTwitter />
    //                     </div>
    //                   </a>
    //                   <a href={member?.socials?.instagram} className="mx-5">
    //                     <div>
    //                       <FiInstagram />
    //                     </div>
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Team;
