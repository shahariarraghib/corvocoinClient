import React from "react";
import "./About.css";
import CardItem from "../cards/Card2";
import Cheat from "../magic/Cheat";

function About() {
  return (
    <div className="AboutCards">
      
      <div>
        <Cheat />
      </div>
      <h1>About</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items cards__text__center">
            <CardItem src="" text="Media" label="" path="/media" />
            <CardItem src="" text="services" label="" path="/services" />
          </ul>
          <div>
            <Cheat />
          </div>
          <ul className="cards__items cards__text__center">
            <CardItem src="images/About/11.png" text="1" label="" path="/bio" />
            <CardItem src="images/About/11.png" text="2" label="" path="/bio" />
            <CardItem src="images/About/11.png" text="3" label="" path="/bio" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
