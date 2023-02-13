import Attendees from './Attendees';

export default function Event({event, updateEventAttendance, attendees}) {
//toggleEventAttendees, showAttendees
  return (
    <li key={event.id} className="event">
      <img src={event.eventImage} alt={event.name} />
      <h5>
        {event.name} {event.eventType}
      </h5>
      <br />
      <span>Organized by: {event.organizer} </span>
      <br />
      <Attendees 
      people={event.people}
      event = {event}
//      toggleEventAttendees={toggleEventAttendees}
      attendees = {attendees}
 //     showAttendees={showAttendees}
      updateEventAttendance={updateEventAttendance}
      />
    </li>
  );
}
