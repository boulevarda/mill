import React, { ReactElement } from 'react';

import { AiOutlineClockCircle } from 'react-icons/ai';

import config from '../config/index.json';
import Divider from './Divider';

type Schedule = {
  title: string;
  time: string;
  tag?: string;
};
type Day = {
  title?: string;
  description: string;
  img: string;
  schedule: Schedule[];
};
type ScheduleItemProps = {
  item: Schedule;
};
type ItineraryDayProps = {
  day: Day;
  reverse: boolean;
};

const ScheduleItem = ({ item }: ScheduleItemProps): ReactElement => {
  return (
    <li className="mb-5">
      <div className="flex">
        <div className="bg-gray-200 dark:bg-gray-800 h-6 w-20 md:mb-0 rounded-full flex items-center justify-around">
          <AiOutlineClockCircle />
          <span className="text-xs font-normal">{item.time}</span>
        </div>
        <div className="pl-2 md:mb-0 flex-grow text-lg">{item.title}</div>
        {item.tag && (
          <div className="bg-gray-200 dark:bg-gray-800 h-6 w-20 md:mb-0 rounded-full flex items-center justify-center">
            <span className="text-xs font-normal">{item.tag}</span>
          </div>
        )}
      </div>
    </li>
  );
};

const ItineraryDay = ({ day, reverse }: ItineraryDayProps): ReactElement => {
  if (reverse) {
    return (
      <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
        <div className={`w-full sm:w-1/2 p-6`}>
          <img className="h-6/6" src={day?.img} alt={day?.title} />
        </div>
        <div className={`w-full sm:w-1/2 p-6 mt-10`}>
          <div className={`align-middle`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {day?.title}
            </h3>
            <p className={`text-gray-600 mb-8`}>{day?.description}</p>
            <ul>
              {day?.schedule.map((item) => (
                <ScheduleItem key={item.title} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={`flex flex-wrap`}>
      <div className={`w-5/6 sm:w-1/2 p-6 mt-10`}>
        <h3 className={`text-3xl text-gray-800 font-bold leading-none mb-3`}>
          {day?.title}
        </h3>
        <p className={`text-gray-600 mb-8`}>{day?.description}</p>
        <ul>
          {day?.schedule.map((item) => (
            <ScheduleItem key={item.title} item={item} />
          ))}
        </ul>
      </div>
      <div className={`w-full sm:w-1/2 p-6`}>
        <img className="h-6/6" src={day?.img} alt={day?.title} />
      </div>
    </div>
  );
};

const Itinerary = () => {
  const { itinerary } = config;

  return (
    <section className={`bg-background py-8`} id="itinerary">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {itinerary.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto text-center font-bold">
          {itinerary.start} - {itinerary.end}
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          {itinerary.description}
        </p>
        {itinerary?.days.map((day, idx) => (
          <ItineraryDay key={idx} day={day} reverse={!!(idx % 2)} />
        ))}
      </div>
    </section>
  );
};

export default Itinerary;
