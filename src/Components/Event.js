import { useState } from "react";
import Attendees from "./Attendees";


const Event = ({event, updateEventAttendance, attendees}) => {
  const [showAttendees, setShowAttendees] = useState(false);

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return(

    <li key={event.id}>
      <img src={event.eventImage} alt={event.name} />
      <h5>
        {event.name} {event.eventType}
      </h5>
      <br />
      <span>Organized by: {event.organizer} </span>
      <br />
      
      <div className="event">
      <button onClick={toggleEventAttendees}>{!showAttendees ? "Show Attendees" : "Hide Attendees"}</button>

      {showAttendees ? ( <Attendees updateEventAttendance={updateEventAttendance} attendees={attendees} event={event} /> ) : null}
      
          </div>
      </li>
    )
}
export default Event;
