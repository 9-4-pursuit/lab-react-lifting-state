export default function NewEventForm(props) {

  return (
    <div className="new-event">
    <>
      <form onSubmit={props.handleSubmit}>
        <h3>Create a new event</h3>
        <label htmlFor="name">Event name:</label>
        <input
          type="text"
          id="name"
          onChange={props.handleTextChange}
          value={props.newEvent.name}
        />

        <label htmlFor="organizer">Organizer:</label>
        <input
          type="text"
          id="organizer"
          onChange={props.handleTextChange}
          value={props.newEvent.organizer}
        />

        <label htmlFor="eventImage">Event image:</label>
        <input
          type="text"
          id="eventImage"
          onChange={props.handleTextChange}
          value={props.newEvent.eventImage}
        />
        <label htmlFor="eventType">Event type:</label>
        <select id="eventType" onChange={props.handleSelectChange}>
          <option value=""></option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Intramural Sport">Intramural Sport</option>
          <option value="Watch Party">Watch Party</option>
          <option value="wedding">Wedding</option>
        </select>
        <br />
        <input type="submit" />
      </form>
    </>
  </div>
  )
}
