import React, { useState, useEffect } from 'react';
import { Image } from 'cloudinary-react';
import { Button } from 'react-bootstrap';

const GalleryList = ({ setPreviewSource }) => {
  const [imageIds, setImageIds] = useState();

  const loadImages = async () => {
    try {
      const res = await fetch('/api/pictures/');
      const data = await res.json();
      // console.log('IMAGE ID ', data);
      setImageIds(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <div>
      <Button onClick={() => {
        loadImages();
        setTimeout(() => {
          setPreviewSource();
        }, 2);
      }}
      >
        Refresh Gallery
      </Button>

      <div>
        {imageIds && imageIds.map((imageId, id) => (
          <Image
            key={id}
            cloudName="radmaopspark"
            publicId={imageId}
            width="300"
            crop="scale"
          />
        ))}
      </div>
    </div>

  );
};

export default GalleryList;
