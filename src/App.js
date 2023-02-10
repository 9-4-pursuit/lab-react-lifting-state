import { useState } from "react";
import eventsData from "./data";

import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewEventForm from "./Components/NewEventForm";

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
                
                    <Event key={event.id} event={event} events={events} attendees={attendees} setEvents={setEvents}/>
                  
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
