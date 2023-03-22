import Attendee from "./Attendee";

export default function Attendees() {
  return (
    <div>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      <div className="attendees">
        {attendees.map((attendee, index) => (
          <>
            <Attendee/>
          </>
        ))}
      </div>
    </div>
  )
}
