import { educationEvents, workEvents } from "./experience";
import LifeEvent from "./lifeEvent";

export default function Timeline() {
  return (
    <>
      <h1>WORK EXPERIENCE</h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {workEvents.map((event) => (
          <LifeEvent key={event.org} event={event} />
        ))}
      </ol>
      <h1>EDUCATION</h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {educationEvents.map((event) => (
          <LifeEvent key={event.org} event={event} />
        ))}
      </ol>
    </>
  );
}
