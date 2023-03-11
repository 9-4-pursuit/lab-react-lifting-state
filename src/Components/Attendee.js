export default function Attendee(props) {

  return (
    <div key={props.attendee.id} className="attendee">
    <p>
      <img
        src={props.attendee.avatar}
        alt={props.attendee.firstName}
      />
      {"   "}
      <span>
        {" "}
        {props.attendee.firstName} {props.attendee.lastName}{" "}
      </span>
    </p>
    <p>
      <button
        className="clickable"
        onClick={() =>
          props.updateEventAttendance(
            props.event.id,
            props.attendee.id
          )
        }
      >
        Attending:
      </button>
      <span>
        {props.attendee.attendance ? "✅" : "❌"}
      </span>
    </p>

    <p>
      <span>Note:</span> {props.attendee.note}
    </p>
  </div>
  )
}
