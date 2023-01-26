import { useState } from "react";

import Header from "../../components/Header/Header";

import { destinations } from "../../data/data";

import moonImage from "../../assets/destination/image-moon.webp";
import marsImage from "../../assets/destination/image-mars.webp";
import titanImage from "../../assets/destination/image-titan.webp";
import europaImage from "../../assets/destination/image-europa.webp";

import classes from "./Destination.module.css";

function Destination() {
  const [image, setImage] = useState(moonImage);
  const [destination, isDestination] = useState({
    activeObject: destinations[0],
    objects: destinations,
    images: [moonImage, marsImage, titanImage, europaImage],
  });

  function changeContentHandler(index) {
    setImage(destination.images[index]);
    isDestination({ ...destination, activeObject: destination.objects[index] });
  }

  function toggleClassHandler(index) {
    if (destination.objects[index] === destination.activeObject) {
      return `${[
        classes["destination-page__btn"],
        classes["destination-page__btn--active"],
      ].join(" ")}`;
    } else {
      return `${classes["destination-page__btn"]}`;
    }
  }
  return (
    <div className={classes["destination-page"]}>
      <Header />
      <main className={classes["destination-page__content-container"]}>
        <h2 className={classes["destination-page__heading"]}>
          <span>01</span>pick your destination
        </h2>
        <div className={classes["destination-page__image-container"]}>
          <img
            className={classes["destination-page__image"]}
            src={image}
            alt={destination.activeObject.name}
          />
        </div>
        <div className={classes["destination-page__btn-container"]}>
          {destination.objects.map((el, index) => (
            <button
              key={el.name}
              className={toggleClassHandler(index)}
              onClick={() => changeContentHandler(index)}
            >
              {el.name}
            </button>
          ))}
        </div>
        <h3 className={classes["destination-page__name"]}>
          {destination.activeObject.name}
        </h3>
        <p className={classes["destination-page__description"]}>
          {destination.activeObject.description}
        </p>
        <div className={classes["destination-page__info-container"]}>
          <span className={classes["destination-page__info-text"]}>
            avg. distance
          </span>
          <span className={classes["destination-page__info"]}>
            {destination.activeObject.distance}
          </span>
        </div>
        <div className={classes["destination-page__info-container"]}>
          <span className={classes["destination-page__info-text"]}>
            est. travel time
          </span>
          <span className={classes["destination-page__info"]}>
            {destination.activeObject.travel}
          </span>
        </div>
      </main>
    </div>
  );
}

export default Destination;
