/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Form } from 'react-bootstrap';

export const SearchInfo = ({ selected, genre }) => {
  const empty = {};

  // console.log(selected);
  return (
    <div>
      {selected.bandName}
    </div>
  );
};

export const SearchInfoVenue = ({ selected }) => (
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
        <b>Genre:</b>
        {' '}
        <br />
        {selected.genreId}
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
