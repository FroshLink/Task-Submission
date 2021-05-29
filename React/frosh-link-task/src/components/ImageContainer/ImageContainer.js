import React, { useState, useEffect, useContext } from "react";

import { imageContext } from "../../App";
import ImageCart from "../ImageCart/ImageCart";
import Header from "../Header/Header";
const ImageContainer = () => {
  const [totalImage, setTotalImage] = useContext(imageContext);
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setPhoto(data.slice(0, 40));
        setTotalImage(data.slice(0, 40));
      });
  }, []);
  console.log(totalImage);
  return (
    <>
      <Header />
      <div className="row mx-auto">
        {photo.map((data) => (
          <ImageCart imgData={data} key={data.id} />
        ))}
      </div>
    </>
  );
};

export default ImageContainer;
