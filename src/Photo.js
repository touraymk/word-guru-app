import React from "react";
import "./Photo.css";

export default function Photo(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photo">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4 searchImage" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
