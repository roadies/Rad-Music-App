import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import first from './sample_data/first.jpg';
import second from './sample_data/second.jpg';
import third from './sample_data/third.png';

const Photos = () => (

  <Carousel
    className="photo-carousel"
    style={{
      marginTop: 10,
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  >
    <Carousel.Item>
      <img
        width="100%"
        height="400px"
        src={first}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        width="100%"
        height="400px"
        src={second}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        width="100%"
        height="400px"
        src={third}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
);

export default Photos;
