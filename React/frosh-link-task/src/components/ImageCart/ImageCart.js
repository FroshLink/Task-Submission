import React from "react";
import { Link } from "react-router-dom";

const ImageCart = (props) => {
  const { title, url, id } = props.imgData;
  return (
    <div className="col-md-3 col-sm-12 ">
      <div
        className="card mx-auto my-2"
        style={{ width: "18rem", minHeight: "460px" }}
      >
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <Link to={`/imageDetails/${id}`} className="btn btn-primary">
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageCart;
