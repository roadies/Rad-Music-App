/* eslint-disable yoda */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import Geocode from 'react-geocode';
import { Descriptions } from 'antd';

Geocode.setApiKey('AIzaSyDGln1GD7JeYXhk-AVgpP2Biaf5tvfNvxc');

const Map = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [state, setState] = useState('');
  const [markerPosition, setMarkerPosition] = useState({ lat: 30, lng: -90 });
  // const [height, setHeight] = useState(700);
  // const [zoom, setZoom] = useState(10);
  const [mapPosition, setMapPosition] = useState({ lat: 30, lng: -90 });

  const getArea = (addressArray) => {
    let city = '';
    for (let index = 0; index < addressArray.length; index++) {
      if (addressArray[index].types[0] && 'administrative_area_level_2' === addressArray[index].types[0]) {
        city = addressArray[index].long_name;
        return city;
      }
    }
  };

  const getCity = (addressArray) => {
    let area = '';
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray.length; j++) {
          if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
  };

  const getState = (addressArray) => {
    let state = '';
    for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
        if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
          state = addressArray[i].long_name;
          return state;
        }
      }
    }
  };

  const onMarkerDragEnd = (event) => {
    const newLat = event.latLng.lat();
    const newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng)
      .then((res) => {
        const address = res.results[0].formatted_address;
        const addressArray = res.results[0].address_components;
        const city = getCity(addressArray);
        const state = getState(addressArray);
        const area = getArea(addressArray);

        setAddress((address) ? address : '');
        setArea((area) ? area : '');
        setState((state) ? state : '');
        setCity((city) ? city : '');
        setMarkerPosition({ lat: newLat, lng: newLng });
        setMapPosition({ lat: newLat, lng: newLng });
      })
      .catch((err) => console.log('could not get coords', err));
  };

  const MapWithAMarker = withScriptjs(withGoogleMap(() => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: mapPosition.lat, lng: mapPosition.lng }}
    >
      <Marker
        draggable
        onDragEnd={onMarkerDragEnd}
        position={{ lat: markerPosition.lat, lng: markerPosition.lng }}
      >
        <InfoWindow>
          <div>
            Testing Window
          </div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  )));

  return (
    <div>
      <div>
        <h1>GOOGLE MAPS INFO</h1>
        <Descriptions bordered>
          <Descriptions.Item label="City">{ city }</Descriptions.Item>
          <Descriptions.Item label="Area">{ area }</Descriptions.Item>
          <Descriptions.Item label="State">{ state }</Descriptions.Item>
          <Descriptions.Item label="Address">{ address }</Descriptions.Item>
        </Descriptions>
      </div>
      <div>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    </div>

  );
};

export default Map;
