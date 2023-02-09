import Attendees from "./Attendees";

export default function Event({ attendees, event, updateEventAttendance }) {
  console.log(event.id)
  return (
    <>
 <li className="event" key={event.id}>
              <img src={event.eventImage} alt={event.name} />
              <h5>
                {event.name} {event.eventType}
              </h5>
              <br />
              <Attendees
              event={event}

              
               attendees={attendees}
               updateEventAttendance={updateEventAttendance}
              />
              <span>Organized by: {event.organizer} </span>
              <br />
            </li>
    </>
  )
}
