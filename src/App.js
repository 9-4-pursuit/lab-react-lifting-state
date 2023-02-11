import { useState } from "react";
import eventsData from "./data";
import NewEventForm from "./Components/NewEventForm";
// import Attendees from "./Attendees";
import Event from "./Components/Event";
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";

function App() {
  const [events, setEvents] = useState(eventsData);

  const [showAttendees, setShowAttendees] = useState(false);





 







  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }



  function updateEventAttendance(eventId, attendeeId) {
    const eventArray = [...events];
    const eventIndex = eventArray.findIndex((event) => eventId === event.id);
    const event = { ...eventArray[eventIndex] };
    const personIndex = event.people.findIndex(
      (person) => person.id === attendeeId
    );
    const peopleArray = [...event.people];
    peopleArray[personIndex].attendance = !peopleArray[personIndex].attendance;
    event.people = peopleArray;
    eventArray[eventIndex] = event;
    setEvents(eventArray);
  }

  return (
    <div className="App">
      <>
        <header>
          <h1 className="color-change-5x">RSVP App</h1>
        </header>
      </>
      <main>
        <div className="new-event">
          <NewEventForm handleAddEvent={handleAddEvent}/>
        </div>
        <div className="events">
          <ul>
            {events.map((event) => {
              const { people: attendees } = event;

              return (
                <Event updateEventAttendance={updateEventAttendance} attendees={attendees} event={event}/>
              );
            })}
          </ul>
        </div>
      </main>
      <>
        <footer>
          <ul>
            <li>Contact</li>
            <li>About</li>
            <li>Legal</li>
          </ul>
        </footer>
      </>
    </div>
  );
}

export default App;
