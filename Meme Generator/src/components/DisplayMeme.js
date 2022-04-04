import React from "react";

export default function DisplayMeme(props) {
  return (
    <div className="col mt-2 ms-4  border border-dark meme-container">
      {props.position === "top" ? (
        <div className="my-3">
          <h4>{props.text}</h4>
        </div>
      ) : null}
      <div className="mt-1">
        <img
          src={props.image}
          className="rounded-top rounded-bottom rounded mx-auto d-block displayMeme"
          alt="Meme"
        />
      </div>
      {props.position === "top" ? null:(
        <div className="my-3">
          <h4>{props.text}</h4>
        </div>
      )}
    </div>
  );
}
