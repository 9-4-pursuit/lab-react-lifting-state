import Attendees from "./Attendees";

export default function Event(props) {

  return (
    <>
      <li key={props.event.id} className="event">
      <img src={props.event.eventImage} alt={props.event.name} />
      <h5>
          {props.event.name} {props.event.eventType}
      </h5>
      <br />
      <span>Organized by: {props.event.organizer} </span>
      <br />
      <button onClick={props.toggleEventAttendees}> {!props.showAttendees ? "Show Attendeess" : "Hide Attendees"} </button>
      {props.showAttendees ? (
        <Attendees attendees={props.attendees} toggleEventAttendees={props.toggleEventAttendees} updateEventAttendance={props.updateEventAttendance} event={props.event} />
      ) : null }    
      </li>
    </>
  )
}
