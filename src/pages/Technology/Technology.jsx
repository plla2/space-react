import { useEffect, useLayoutEffect, useRef, useState } from "react";

import Header from "../../components/Header/Header";

import landVehicleImage from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import landCapsuleImage from "../../assets/technology/image-space-capsule-landscape.jpg";
import landSpaceportImage from "../../assets/technology/image-spaceport-landscape.jpg";

import portVehicleImage from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import portCapsuleImage from "../../assets/technology/image-space-capsule-portrait.jpg";
import portSpaceportImage from "../../assets/technology/image-spaceport-portrait.jpg";

import { technologies } from "../../data/data";

import classes from "./Technology.module.css";

function Technology() {
  const [image, setImage] = useState(portVehicleImage);
  const [technology, isTechnology] = useState({
    activeObject: technologies[0],
    objects: technologies,
    landImages: [landVehicleImage, landSpaceportImage, landCapsuleImage],
    portImages: [portVehicleImage, portSpaceportImage, portCapsuleImage],
  });
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  function changeContentHandler(index) {
    if (width <= 1279) {
      setImage(technology.landImages[index]);
    } else {
      setImage(technology.portImages[index]);
    }

    isTechnology({ ...technology, activeObject: technology.objects[index] });
  }

  function toggleClassHandler(index) {
    if (technology.objects[index] === technology.activeObject) {
      return `${[
        classes["technology-page__btn"],
        classes["technology-page__btn--active"],
      ].join(" ")}`;
    } else {
      return `${classes["technology-page__btn"]}`;
    }
  }

  useEffect(() => {
    if (width <= 1279) {
      setImage(landVehicleImage);
    } else {
      setImage(portVehicleImage);
    }
  }, [width]);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <div className={classes["technology-page"]} ref={ref}>
      <Header />
      <main className={classes["technology-page__content-container"]}>
        <h2 className={classes["technology-page__heading"]}>
          <span>03</span>space launch 101
        </h2>
        <div className={classes["technology-page__image-container"]}>
          <img
            className={classes["technology-page__image"]}
            src={image}
            alt={technology.activeObject.name}
          />
        </div>
        <div className={classes["technology-page__btn-container"]}>
          {technology.objects.map((el, index) => (
            <button
              key={el.name}
              className={toggleClassHandler(index)}
              onClick={() => changeContentHandler(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <span className={classes["technology-page__terminology"]}>
          the terminology...
        </span>
        <h3 className={classes["technology-page__name"]}>
          {technology.activeObject.name}
        </h3>
        <p className={classes["technology-page__description"]}>
          {technology.activeObject.description}
        </p>
      </main>
    </div>
  );
}

export default Technology;
