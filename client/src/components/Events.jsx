import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Events({ user, userInfo }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`/api/profile/events/${userInfo.id}`)
      .then(({ data }) => {
        setEvents(data);
      })
      .then((err) => console.error(err));
  }, []);

  return (
    <div className="profile">
      <h1>{user}</h1>
      <div className="profile_event-container">
        {events.map(({
          name, venue, date, genre, details,
        }) => (
            <div class="profile_event">
              <h3>{date}</h3>
              <h4>bandname: {name}</h4>
              <h5>genre: {genre}</h5>
              <h4>
                venue:
               {venue}
              </h4>
              <p>{details}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Events;
