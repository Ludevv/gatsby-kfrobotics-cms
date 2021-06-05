import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <main>
      <h2>K.F. Robotics</h2>
      <StaticImage
        src="../images/render.png"
        width={600}
        alt="render"
        placeholder="tracedSVG"
        quality={100}
      />
    </main>
  );
};

export default IndexPage;
