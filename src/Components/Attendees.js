import Attendee from "./Attendee";

export default function Attendees({ showAttendees, setShowAttendees, event, events, setEvents, attendees }) {

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return (
    <div>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      <div className="attendees">
        {attendees.map((attendee, index) => (
          <>
            <Attendee key={index} event={event} events={events} setEvents={setEvents} attendee={attendee} />
          </>
        ))}
      </div>
    </div>
  )
}
