import React from "react";
import CardItem from "./CardItem";
import "./MediaCards.css";

function MediaCards() {
  return (
    <div className="cards__container">
      <div className="cards__wrapper">
        <div className="cards__items cards__text__center">
          <CardItem
            src="images/All/logo-rainbow.gif"
            text="New Media"
            label=""
            path="/"
          />
          <CardItem
            src="images/All/logo.png"
            text="Top Media"
            label=""
            path="/"
          />
          <CardItem
            src="images/All/logo-rainbow.gif"
            text="Featured Media"
            label=""
            path="/"
          />
        </div>
      </div>
    </div>
  );
}

export default MediaCards;
