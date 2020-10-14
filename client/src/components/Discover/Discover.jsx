import React, { useState } from 'react';
import {} from 'react-bootstrap';
import DiscoverForm from './DiscoverForm';
import DiscoverRecs from './DiscoverRecs';

const Discover = (genre) => (
  <div>
    <h2>-- let radma help you find something great --</h2>
    <h5>recommendations by genres</h5>
    <h5>recommendations by bands</h5>
    <h3>you say you like {genre.genre} ... what else tickles yr fancy?</h3>
    <DiscoverForm />
  </div>

);

export default Discover;
