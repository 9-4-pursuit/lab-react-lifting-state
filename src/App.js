import { useState } from "react";
import eventsData from "./data";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NewEventForm from "./Components/NewEventForm";
import Event from "./Components/Event";

function App() {

  const [events, setEvents] = useState(eventsData);

  return (
    <div className="App">
      <>
          <Header />
      </>
      <main>
        <div className="new-event">
          <>
            <NewEventForm events={events} setEvents={setEvents} />
          </>
        </div>

        <div className="events">
          <ul>
            {events.map((event) => {
              const { people: attendees } = event;
              return (
                <>
                  <Event key={event.id} event={event} events={events} setEvents={setEvents} attendees={attendees} />
                </>
              );
            })}
          </ul>
        </div>
      </main>

      <>
        <Footer />
      </>
    </div>
  );
}

export default App;
