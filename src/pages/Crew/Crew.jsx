import { useState } from "react";

import Header from "../../components/Header/Header";

import { crews } from "../../data/data";

import anoushehImage from "../../assets/crew/image-anousheh-ansari.webp";
import douglasImage from "../../assets/crew/image-douglas-hurley.webp";
import markImage from "../../assets/crew/image-mark-shuttleworth.webp";
import viktorImage from "../../assets/crew/image-victor-glover.webp";

import classes from "./Crew.module.css";

function Crew() {
  const [image, setImage] = useState(douglasImage);
  const [crew, isCrew] = useState({
    activeObject: crews[0],
    objects: crews,
    images: [douglasImage, markImage, viktorImage, anoushehImage],
  });

  function changeContentHandler(index) {
    setImage(crew.images[index]);
    isCrew({ ...crew, activeObject: crew.objects[index] });
  }

  function toggleClassHandler(index) {
    if (crew.objects[index] === crew.activeObject) {
      return `${[
        classes["crew-page__btn"],
        classes["crew-page__btn--active"],
      ].join(" ")}`;
    } else {
      return `${classes["crew-page__btn"]}`;
    }
  }

  return (
    <div className={classes["crew-page"]}>
      <Header />
      <main className={classes["crew-page__content-container"]}>
        <h2 className={classes["crew-page__heading"]}>
          <span>02</span>meet your crew
        </h2>
        <div className={classes["crew-page__image-container"]}>
          <img
            className={classes["crew-page__image"]}
            src={image}
            alt={crew.activeObject.name}
          />
        </div>
        <div className={classes["crew-page__btn-container"]}>
          {crew.objects.map((el, index) => (
            <button
              key={el.name}
              className={toggleClassHandler(index)}
              onClick={() => changeContentHandler(index)}
            ></button>
          ))}
        </div>
        <div className={classes["crew-page__content"]}>
          <span className={classes["crew-page__role"]}>
            {crew.activeObject.role}
          </span>
          <h3 className={classes["crew-page__name"]}>
            {crew.activeObject.name}
          </h3>
          <p className={classes["crew-page__bio"]}>{crew.activeObject.bio}</p>
        </div>
      </main>
    </div>
  );
}

export default Crew;
