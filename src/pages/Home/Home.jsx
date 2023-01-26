import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";

import classes from "./Home.module.css";

function Home() {
  let navigate = useNavigate();

  function goToDestinationHandler() {
    navigate("/destination");
  }

  return (
    <div className={classes["home-page"]}>
      <Header />
      <main className={classes["home-page__content-wrapper"]}>
        <div className={classes["home-page__content"]}>
          <h1 className={classes["home-page__heading"]}>
            so, you want to travel to
          </h1>
          <h2 className={classes["home-page__space"]}>space</h2>
          <p className={classes["home-page__description"]}>
            Let`s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we`ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button
          className={classes["home-page__btn"]}
          onClick={goToDestinationHandler}
        >
          <span className={classes["home-page__btn-explore"]}>explore</span>
        </button>
      </main>
    </div>
  );
}

export default Home;
