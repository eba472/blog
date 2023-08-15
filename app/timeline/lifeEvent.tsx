import { IEvent } from "./experience";
import Skill from "./skill";

export default function LifeEvent({ event }: { event: IEvent }) {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {event.date}
      </time>
      <h3 className="font-semibold text-gray-900 dark:text-white">
        {event.title} at <span className="italic font-bold">{event.org}</span>
      </h3>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        {event.desc}
      </p>
      <ol>
        {event.acc.map((ac) => (
          <li key={ac}>{ac}</li>
        ))}
      </ol>
      <div className="m-3">
        {event.skills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </div>
    </li>
  );
}
