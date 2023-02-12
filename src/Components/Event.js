import Attendees from "./Attendees";
import { useState } from "react";

export default function Event({ attendees, event, updateEventAttendance }) {
  const [showAttendees, setShowAttendees] = useState(false);

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return (
    <li key={event.id}>
      <img src={event.eventImage} alt={event.name} />
      <h5>
        {event.name} {event.eventType}
      </h5>
      <br />
      <span>Organized by: {event.organizer} </span>
      <br />
      <div className="event">
        <button onClick={toggleEventAttendees}>
          {!showAttendees ? "Show Attendees" : "Hide Attendees"}
        </button>

        {showAttendees ? (
          <Attendees
            updateEventAttendance={updateEventAttendance}
            event={event}
            attendees={attendees}
          />
        ) : null}
      </div>
    </li>
  );
}
