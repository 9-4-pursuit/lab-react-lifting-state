import Attendee from "./Attendee";
import { useState } from "react";

export default function Attendees({ event, events, setEvents, attendees }) {

  const [showAttendees, setShowAttendees] = useState(false);

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return (
    <div>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>
      
      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <>
              <Attendee key={attendee.div} event={event} events={events} setEvents={setEvents} attendee={attendee} />
            </>
          ))}
        </div>
      ) : null}
    </div>
  )
}
