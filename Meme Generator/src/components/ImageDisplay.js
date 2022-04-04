import React from "react";

export default function ImageDisplay(props) {
  return (
    <div className="col mt-2 ms-4  border border-dark img-container bg-dark bg-gradient">
      <div className="mt-1">
        <img
          src={props.imageList[props.image]}
          className="rounded-pill rounded mx-auto d-block"
          alt="Meme"
        />
      </div>
      <div className="d-grid mx-3 mt-2">
        <button
          type="btn"
          className="btn btn-primary btn-block btn-lg"
          onClick={() => {props.btnClick(props.image);}}
        >
          Select this
        </button>
      </div>
    </div>
  );
}
