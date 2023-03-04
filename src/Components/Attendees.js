
import Attendee from "./Attendee";


export default function Attendees({event, attendees, updateEventAttendance}) {
  return (
    <div className="atendees">
      {attendees.map((attendee, index) => ( 
        <Attendee key={attendee.id} attendee={attendee} event={event} updateEventAttendance={updateEventAttendance}/>
      ))}
    </div>
  );
  
  
}
