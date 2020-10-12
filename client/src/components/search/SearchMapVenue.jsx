import React from 'react';
import MapEntry from './MapEntry';

const SearchMapVenue = ({ markers }) => {
  const empty = {

  };

  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>
        {markers.map((marker) => <MapEntry marker={marker} />)}
      </ul>
    </div>
  );
};

export default SearchMapVenue;
