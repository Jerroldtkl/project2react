import React from "react";
import { Carousel } from "react-responsive-carousel";

function Carousel1() {
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
            src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2019/07/1400-121-900x643.png"
          />
        </div>
        <div>
          <img
            alt=""
            src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2021/04/alleybar-cocktails-interiors-1-900x643.png"
          />
        </div>
        <div>
          <img
            alt=""
            src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2020/10/Origin-Bar-Singapore-Cocktail-Festival-900x643.png"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Carousel1;
