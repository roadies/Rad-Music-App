import React from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

const SearchLocation = () => {
  const {
    ready, value, suggestions: { status, data }, setValue, clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 30, lng: () => -90 }, // this prefers users location here
      radius: 5 * 1069,
    },
  });

  return (
    <Combobox onSelect={async (address) => {
      try {
          const results = await getGeocode({ address });
            console.log(results[0]);
      } catch (err) {
        console.log('ERROR',);
      }
      // console.log(address);
    }}
    >
      <ComboboxInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder="enter an address"
      />
      <ComboboxPopover>
        {status === 'OK' && data.map(({ id, description }) => <ComboboxOption key={id} value={description} />)}
      </ComboboxPopover>
    </Combobox>
  );
};

export default SearchLocation;
