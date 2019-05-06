import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  const imageList = images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));

  return <div>{imageList}</div>;
};

export default ImageList;
