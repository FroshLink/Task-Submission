import React, { useContext } from "react";
import { useParams } from "react-router";
import { imageContext } from "../../App";
import Header from "../Header/Header";

const ImageDetailsContainer = () => {
  const [totalImage, setTotalImage] = useContext(imageContext);

  const { id } = useParams();
  const filteredImage = totalImage.filter((data) => id == data.id);
  const { title, url } = filteredImage[0];

  return (
    <div>
      <Header />
      {
        <div
          className="card mx-auto my-2 py-5"
          style={{ width: "50%", minHeight: "460px" }}
        >
          <img src={url} className="w-50 mx-auto" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.lorem Some quick example text to build
              on the card title and make up the bulk of the card's content.lorem
              Some quick example text to build on the card title and make up the
              bulk of the card's content.lorem
            </p>
          </div>
        </div>
      }
    </div>
  );
};

export default ImageDetailsContainer;
