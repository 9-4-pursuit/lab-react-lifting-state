import { useState } from "react";
import Attendee from "./Attendee";

const Attendees = ({attendees, event, updateEventAttendance}) => {
  

  return (
    <div className="attendees">
      {attendees.map((attendee, index) => ( 
      <attendee event={event} updateEventAttendance={updateEventAttendance} />
      ))}
    </div>
  )
  
}
export default Attendees