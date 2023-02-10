
import Attendees from "./Attendees";

export default function Event(props) {

    const setEvents = props.setEvents
    const events = props.events
    const event = props.event;
    const attendees = props.attendees;
    
  return(<li className="event" key={event.id}>
    <img src={event.eventImage} alt={event.name} />
    <h5>
      {event.name} {event.eventType}
    </h5>
    <br />
    <span>Organized by: {event.organizer} </span>
    <br />
    <>
    
      <Attendees events={events} event={event} attendees={attendees} setEvents={setEvents}/>
      
    </>
  </li>);
}

