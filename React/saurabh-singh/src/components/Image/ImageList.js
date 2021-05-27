import React from 'react';
import Image from './Image';

const ImageList = ({ images }) => {
  return (
    <div style={{ marginTop: '0.8rem' }} className='row'>
      {images.map((image) => {
        return <Image key={image.id} image={image}></Image>;
      })}
    </div>
  );
};

export default ImageList;
