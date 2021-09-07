import React from "react";
import { Carousel } from "react-responsive-carousel";

function Carousel2() {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        stopOnHover={false}
        showThumbs={false}
      >
        <div>
          <img
            alt=""
            src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2015/08/Bitters-Love2.jpg"
          />
        </div>
        <div>
          <img
            alt=""
            src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2015/08/Shin-Gi-Tai.jpg"
          />
        </div>
        <div>
          <img
            alt=""
            src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2015/08/Bago.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Carousel2;
