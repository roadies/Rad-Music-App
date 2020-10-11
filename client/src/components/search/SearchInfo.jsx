/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

export const SearchInfo = ({ selected }) => {
  const empty = {};

  console.log(selected);
  return (
    <div>
      {selected.bandName}
      <p>
        {selected.venue}
      </p>
    </div>
  );
};

// export const SearchInfoVenue = ({ selected }) => (
//   <div>
//     {selected.venue}
//   </div>
// );
