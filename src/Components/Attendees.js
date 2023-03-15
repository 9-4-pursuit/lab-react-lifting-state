import Attendee from "./Attendee";

export default function Attendees({
  attendees,
  showAttendees,
  updateEventAttendance,
  event,
}) {
  return (
    <div>
      {/* <header>
        <h1 className="color-change-5x">RSVP App</h1>
      </header> */}
      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <>
              <Attendee
                attendee={attendee}
                updateEventAttendance={updateEventAttendance}
                event={event}
              />
              {/* <div key={attendee.id} className="attendee">
                <p>
                  <img src={attendee.avatar} alt={attendee.firstName} />
                  {"   "}
                  <span>
                    {" "}
                    {attendee.firstName} {attendee.lastName}{" "}
                  </span>
                </p>
                <p>
                  <button
                    className="clickable"
                    onClick={() => updateEventAttendance(event.id, attendee.id)}
                  >
                    Attending:
                  </button>
                  <span>{attendee.attendance ? "✅" : "❌"}</span>
                </p>

                <p>
                  <span>Note:</span> {attendee.note}
                </p>
              </div> */}
            </>
          ))}
        </div>
      ) : null}
    </div>
  );
}
