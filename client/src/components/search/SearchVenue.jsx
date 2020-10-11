/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

const SearchVenueLocation = ({
  setData,
}) => {
  const {
    ready, value, suggestions: { status, data }, setValue, clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 30, lng: () => -90 }, // this prefers users location here
      radius: 10 * 1069,
    },
  });

  return (
    <Combobox onSelect={async (address) => {
      try {
        const results = await getGeocode({ address });
        const addressLat = results[0].geometry.location.lat();
        const addressLng = results[0].geometry.location.lng();
        const addressDesc = address;
        console.log(address, 'address'); // => address components
        setValue(address);
        setData(address);
        clearSuggestions();
        // console.log('coords', 'lat', addressLat, 'lng', addressLng, 'address', addressDesc);
        console.log(address);
      } catch (err) {
        console.log('ERROR');
      }
      // console.log(address);
    }}
    >
      <ComboboxInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          // setData(e.target.value);
        }}
        disabled={!ready}
        placeholder="enter an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === 'OK' && data.map(({ id, description }) => <ComboboxOption key={id} value={description} />)}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default SearchVenueLocation;
