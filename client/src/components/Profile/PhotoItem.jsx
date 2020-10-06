import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const PhotoItem = ({ photo }) => (
  <img
    width="100%"
    height="400px"
    src={photo}
    alt="Photo"
  />
);

export default PhotoItem;
