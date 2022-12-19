import React from 'react';
import Cheat from '../magic/Cheat';
import Footer from './Footer';
import "./MediaHighlight.css";

const MediaHighlight = () => {
    return (
        <div class="bg-wrapper">
        <div class="container">
          <div>
            <Cheat />
          </div>
          <h2 class="text-center page-title">Text</h2>
          <div>
            <Cheat />
          </div>
          <div class="row">
            <div class="column">
              <div
                class="card"
                // onclick="openInNewTab('https://www.google.com/');"
                onClick={() =>  window.open("https://www.google.com", "_blank")}
              >
                <h2 className="text">Text1</h2>
                <h3 className="text">Text1</h3>
                <button id="connecting-button">
                  <div>
                    <h3>Shop</h3>
                  </div>
                </button>
              </div>
            </div>
            <div class="column">
              <div
                class="card"
                // onclick="openInNewTab('https://www.google.com/');"
                onClick={() =>  window.open("https://www.google.com", "_blank")}
              >
                <h2 className="text">Text2</h2>
                <h3 className="text">Text2</h3>
                <button id="connecting-button">
                  <h3>Shop</h3>
                </button>
              </div>
            </div>
           
          </div>
        </div>
        <Footer/>
      </div>
    );
};

export default MediaHighlight;