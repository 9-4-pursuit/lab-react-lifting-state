import Attendee from "./Attendee";

export default function Attendees(props) {

  return (
    <div className="attendees">
    {props.showAttendees ? (
      <div>
        {props.attendees.map((attendee) => (
           <Attendee attendee={attendee} event={props.event} updateEventAttendance={props.updateEventAttendance} />
        ))}
      </div>
    ) : null}
  </div>
  )
}
