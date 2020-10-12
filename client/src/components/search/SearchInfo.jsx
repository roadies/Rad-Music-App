/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Form } from 'react-bootstrap';

export const SearchInfo = ({ selected }) => {
  const { bandName } = selected;

  return (
    <div>
      {bandName}
    </div>
  );
};

export const SearchInfoVenue = ({ selected }) => {
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
