import Attendee from "./Attendee"

export default function Attendees({ event, updateEventAttendance, attendees }) {
  return (
    <div className="attendees">
      {attendees.map((attendee, index) => (
        <Attendee updateEventAttendance={updateEventAttendance} attendee={attendee} event={event} key={index} />
      ))}
    </div>
  )
}