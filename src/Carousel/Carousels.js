import React from 'react';
import Slide from './slide';
// import slide from 'Slide';

const images = [
  'https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
  'https://soliloquywp.com/wp-content/uploads/2017/10/fullwidth-image-slider-in-wordpress.jpg',
  'https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896-1200x450_c.jpg',
];

const Carousels = () => {
  return (
    <div className="App">
      <Slide images={images} />
    </div>
  );
};

export default Carousels;