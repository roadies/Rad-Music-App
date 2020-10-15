import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import './Calendar.css';

function Calendar({ events, setEvents, userInfo }) {
  const [selected, setSelected] = useState({});

  console.log(selected, '<===== selected');

  const deleteEvent = () => axios.delete(`/api/profile/event/${selected.id}`).then(() => axios.get(`/api/profile/events/${userInfo.id}`)
    .then(({ data }) => {
      setEvents(data);
      setSelected('');
    }));

  function dates() {
    const date = events.map((event) => ({
      title: event.name,
      date: event.date,
      extendedProps: { ...event },
    }));

    return date;
  }

  const handleEventClick = ({ event }) => {
    setSelected(event._def.extendedProps);
  };

  const {
    venue, date, details, genre, name,
  } = selected;
  return (
    <div className="calendar">
      <div className="calendar_dates">
        <FullCalendar
          initialView="dayGridMonth"
          plugins={[dayGridPlugin, interactionPlugin]}
          editable
          selectable
          eventClick={handleEventClick}
          events={dates()}
        />
      </div>
      <div className="calendar_leftSide">

        <div className="calendar_information">
          <h1>Event Information</h1>
          <div className="card" style={{ width: '25rem' }}>
            <div className="card-body">
              <h3 className="card-subtitle mb-2 text-muted">{date}</h3>
              <h2 className="card-title">{name}</h2>
              <h4 className="card-text">{genre}</h4>
              <h3 className="card-text">{venue}</h3>
              <p className="card-text">{details}</p>
            </div>
          </div>
        </div>
        <div className="calendar_button">
          <button type="button" className="btn btn-primary" onClick={deleteEvent}>Delete Event</button>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
