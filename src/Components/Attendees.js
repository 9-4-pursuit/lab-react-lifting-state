import Attendee from "./Attendee";
import { useState } from "react";

export default function Attendees({ attendees, updateEventAttendance, event }) {
  const [showAttendees, setShowAttendees] = useState(false)

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }
  return (
    <>
      <button onClick={() => toggleEventAttendees()}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>
      {showAttendees ? (
        attendees.map((attendee, index) => {
          console.log(attendee, index)
          return (
            <div className="attendees">
              <Attendee
                event={event}
                attendee={attendee}
                updateEventAttendance={updateEventAttendance}
                index={index}
              />
            </div>
          )




        })
      )
        : null}
    </>
  )
}

