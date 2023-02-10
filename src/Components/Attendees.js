import { useState } from "react";
import Attendee from "./Attendee";

export default function Attendees(props) {
    

    const [showAttendees, setShowAttendees] = useState(false);

    const setEvents = props.setEvents;
    const events = props.events;
    const attendees = props.attendees;
    const event = props.event;

    function toggleEventAttendees() {
        setShowAttendees(!showAttendees);
      }

  return(<>
  <button onClick={toggleEventAttendees}>
    {!showAttendees ? "Show Attendees" : "Hide Attendees"}
  </button>

  {showAttendees ? (
    <div className="attendees">
      {attendees.map((attendee, index) => (
        <>
        
          <Attendee key={attendee.div} events={events} event={event} attendee={attendee} setEvents={setEvents}/>
          
        </>
      ))}
    </div>
  ) : null}</>);
}
