import React from 'react';
import GalleryMain from './GalleryMain';
import lakeImage from "./image/lake.JPG"; 

const imageData = [
  { id: 1, img: lakeImage },
  { id: 2, img: lakeImage },
  { id: 3, img: lakeImage },
  { id: 4, img: lakeImage }
];

const ImageGallery = () => {
  return (
    <div>
      <GalleryMain imageData={imageData} /> 
    </div>
  );
};

export default ImageGallery;
