import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from './Calendar';
import './Events.css';

function Events({ user, userInfo }) {
  const [events, setEvents] = useState([]);

  console.log(events);

  useEffect(() => {
    axios.get(`/api/profile/events/${userInfo.id}`)
      .then(({ data }) => {
        setEvents(data);
      })
      .then((err) => console.error(err));
  }, []);

  return (
    <div className="profile">
      <div className="profile_calendar">
        <Calendar userInfo={userInfo} events={events} setEvents={setEvents} />
      </div>
    </div>
  );
}

export default Events;
