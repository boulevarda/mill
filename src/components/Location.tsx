import React from 'react';

import { FaCampground, FaHotel } from 'react-icons/fa';
import { GiFamilyHouse } from 'react-icons/gi';
import { WiTrain } from 'react-icons/wi';

import config from '../config/index.json';
import Divider from './Divider';

const getIcon = (icon: string) => {
  let result;
  switch (icon) {
    case 'train':
      result = <WiTrain />;
      break;
    case 'camp':
      result = <FaCampground />;
      break;
    case 'hotel':
      result = <FaHotel />;
      break;
    case 'house':
      result = <GiFamilyHouse />;
      break;
    default:
  }
  return result;
};

const Location = () => {
  const { location } = config;
  const {
    title,
    subtitle,
    description,
    img,
    lodging,
    name,
    address1,
    address2,
  } = location;
  const { title: lodgingTitle, options: lodgingOptions } = lodging;
  return (
    <div className={`py-12 bg-background`} id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1
            className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
          >
            {title.split(' ').map((word, index) => (
              <span
                key={index}
                className={index % 2 ? 'text-primary' : 'text-border'}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
          <Divider />
          <p className="my-4 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3xl">
            {subtitle}
          </p>
          <img src={img} />
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {name}
            <br />
            {address1}
            <br />
            {address2}
          </p>
        </div>

        <div className="mt-10 mx-20">
          <p className="my-8 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3xl text-center">
            {lodgingTitle}
          </p>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {lodgingOptions.map((option) => (
              <div key={option.name} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center  text-primary text-3xl`}
                  >
                    {option.icon && getIcon(option.icon)}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {option.name}
                  </p>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Location;
