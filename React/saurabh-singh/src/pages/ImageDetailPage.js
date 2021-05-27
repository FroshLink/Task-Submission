import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/UI/Loader';

const ImageDetailPage = ({ match }) => {
  const [image, setImage] = useState({});
  const [loadingImage, setLoadingImage] = useState(false);

  useEffect(() => {
    const fetchingImage = async () => {
      setLoadingImage(true);
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/photos/${match.params.id}`
      );
      setImage(data);
      setLoadingImage(false);
    };

    fetchingImage();
  }, [match]);
  return (
    <React.Fragment>
      <Link to='/' className='btn black'>
        Go Back
      </Link>
      {loadingImage ? (
        <Loader></Loader>
      ) : (
        <div>
          <h4>{image.title}</h4>
          <img
            style={{ height: '400px', width: '500px' }}
            className='responsive-img'
            src={image.url}
            alt={image.title}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default ImageDetailPage;
