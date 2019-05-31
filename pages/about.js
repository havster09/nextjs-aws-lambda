import React from "react";
import cowsay from "cowsay-browser";

import "./styles/about.css";

function CowsayHi() {
  return (
    <div className="aboutPage">
      <pre>{cowsay.say({ text: "why not use zeit" })}</pre>
    </div>
  );
}

export default CowsayHi;
