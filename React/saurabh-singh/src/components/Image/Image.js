import React from 'react';
import { Link } from 'react-router-dom';

const Image = ({ image }) => {
  return (
    <Link to={`/${image.id}`}>
      <div className='col s12 m6 l4 xl3'>
        <div className='card'>
          <div className='card-image'>
            <img src={image.url} alt={image.title} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Image;
