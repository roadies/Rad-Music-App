/* eslint-disable react/prop-types */
import React from 'react';

export const LandingInfo = ({ selected }) => {
  const { bandName } = selected;

  return (
    <div>
      {bandName}
    </div>
  );
};

export const LandingVenue = ({ selected }) => {
  const {
    date,
    venue,
    genre,
    details,
  } = selected;

  return (
    <div>
      <ul>
        <li>
          <b>Date:</b>
          <br />
          {date}
        </li>
        <li>
          <b>Location:</b>
          {' '}
          <br />
          {venue}
        </li>
        <li>
          <b>Genre:</b>
          {' '}
          <br />
          {genre}
        </li>
        <li>
          <b>Details:</b>
          {' '}
          <br />
          {details}
        </li>
      </ul>
    </div>
  );
};
