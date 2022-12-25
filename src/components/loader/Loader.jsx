import React from "react";
import { PropagateLoader } from "react-spinners";
function Loader() {
  return (
    <div className="loader">
      <PropagateLoader color="#d50000" />
    </div>
  );
}

export default Loader;
