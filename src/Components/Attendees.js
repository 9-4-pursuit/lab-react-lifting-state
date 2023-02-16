import Attendee from "./Attendee"

export default function Attendees({ attendees, event, toggleEventAttendees, showAttendees, updateEventAttendance }) {
  return (
    
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <Attendee
              key={attendee.id}
              attendee={attendee}
              event={event}
              index={index}
              updateEventAttendance={updateEventAttendance}
            />
          ))}
        </div>
  );
}
