import React from 'react';

export const LandingInfo = ({ selected }) => (
  <div>
    {selected.bandName}
  </div>
);

export const LandingVenue = ({ selected }) => (
  <div>
    <ul>
      <li>
        <b>Date:</b>
        <br />
        {selected.date}
      </li>
      <li>
        <b>Location:</b>
        {' '}
        <br />
        {selected.venue}
      </li>
      <li>
        <b>Details:</b>
        {' '}
        <br />
        {selected.details}
      </li>
    </ul>
  </div>
);
