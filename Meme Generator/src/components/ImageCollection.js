import React from "react";
import ImageDisplay from "./ImageDisplay.js";

export default function ImageCollection(props) {
  const imageKeys = Object.keys(props.imageList);
  return imageKeys.map((image, k) => {
    return (
      <ImageDisplay
        imageList={props.imageList}
        image={image}
        key={k}
        btnClick={props.picSelectBtn}
      />
    );
  });
}
