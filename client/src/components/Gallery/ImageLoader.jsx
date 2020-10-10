/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import GalleryList from './GalleryList';

const ImageLoader = () => {
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState();

  const handleFileInputChange = (e) => {
    console.log('submitted');
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    try {
      await fetch('/api/pictures/', {
        method: 'POST',
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { 'Content-type': 'application/json' },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Upload</h1>
      <form onSubmit={handleSubmitFile}>
        <input type="file" name="image" onChange={handleFileInputChange} value={fileInputState} />
        <button type="submit">
          Submit
        </button>
      </form>
      {previewSource && <img src={previewSource} alt="pic" style={{ height: '300px' }} />}
      <div>
        <GalleryList setPreviewSource={setPreviewSource} />
      </div>
    </div>
  );
};

export default ImageLoader;
