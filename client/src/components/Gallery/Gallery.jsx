/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {} from 'react-bootstrap';
import GalleryList from './GalleryList';
import ImageLoader from './ImageLoader';

const Gallery = () => (
  <div>
    <div className="Gallery-Image-Upload">
      Post your event images here!
      <ImageLoader />
    </div>
  </div>

);

export default Gallery;
