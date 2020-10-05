import React, { useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [genre, setGenre] = useState('');


  return (
    <div className="searchView">
      <div className="mapAndList">
        <div className="searchList">
          list of shows
        </div>
        <div className="mapView">
          map
        </div>
      </div>
      <div className="searchCriteria">
        search criteria
        <form>
          <input
            className="create-input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            className="create-input"
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            className="create-input"
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          />
          <input
            className="create-input"
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};
export default Search;
