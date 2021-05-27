import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageList from '../components/Image/ImageList';
import Loader from '../components/UI/Loader';

const HomePage = () => {
  const [loadingImages, setLoadingImages] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      setLoadingImages(true);

      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/photos'
      );

      setImages(data.slice(0, 12));

      setLoadingImages(false);
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h3 style={{ textAlign: 'center' }} className='grey-text text-darken-1'>
        Our Images
      </h3>
      {loadingImages ? (
        <Loader></Loader>
      ) : (
        <ImageList images={images}></ImageList>
      )}
    </div>
  );
};

export default HomePage;
