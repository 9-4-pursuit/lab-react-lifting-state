
import Attendee from "./Attendee";

const Attendees = ({attendees, event, updateEventAttendance}) => {
  
  return (
    <div className="attendees">
      {attendees.map((attendee, index) => ( 
      <Attendee event={event} updateEventAttendance={updateEventAttendance} attendee={attendee}/>
      ))}
    </div>
  )
}
export default Attendees
