import React from "react";

const ImageCard = ({ image }) => {
  const { id, urls, alt_description } = image;
  return (
    <img
      className="image-card"
      key={id}
      src={urls.small}
      alt={alt_description}
    />
  );
};

export default ImageCard;
