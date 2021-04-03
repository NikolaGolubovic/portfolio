import React from "react";
import Loader from "react-loader-spinner";

function Preloader({ preloaderClass }) {
  return (
    <div className={preloaderClass}>
      {
        <Loader
          type="Bars"
          color="#eff7fa"
          height={100}
          width={100}
          className="loader"
        />
      }
    </div>
  );
}

export default Preloader;
