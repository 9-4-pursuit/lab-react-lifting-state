import Attendees from "./Attendees";
import { useState } from "react";
export default function Event({ event, updateEventAttendance }) {
  const [showAttendees, setShowAttendees] = useState(false);
  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }
  console.log(event);
  return (
    <li className="event" key={event.id}>
      <img src={event.eventImage} alt={event.name} />
      <h5>
        {event.name} {event.eventType}
      </h5>
      <br />
      <span>Organized by: {event.organizer} </span>
      <br />
      <>
        <button onClick={toggleEventAttendees}>
          {!showAttendees ? "Show Attendees" : "Hide Attendees"}
        </button>
        {showAttendees ? (
          <Attendees
            showAttendees={showAttendees}
            attendees={event.people}
            updateEventAttendance={updateEventAttendance}
            event={event}
          />
        ) : null}
      </>
    </li>
  );
}
