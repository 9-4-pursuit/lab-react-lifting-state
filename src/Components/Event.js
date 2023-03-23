import Attendees from "./Attendees";
import { useState } from "react";

export default function Event({ event, events, setEvents, attendees }) {

  const [showAttendees, setShowAttendees] = useState(false);

  return (
    <div>
      <li key={event.id}>
        <img src={event.eventImage} alt={event.name} />
        <h5>
          {event.name} {event.eventType}
        </h5>
        <br />
        <span>Organized by: {event.organizer} </span>
        <br />
        <>
          {showAttendees ? (
            <Attendees showAttendees={showAttendees} setShowAttendees={setShowAttendees} event={event} events={events} setEvents={setEvents} attendees={attendees} />
          ) : null}
        </>
      </li>
    </div>
  )
}
