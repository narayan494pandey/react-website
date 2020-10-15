import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="videos/video-2.mp4" autoPlay loop muted></video>
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          button-size="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          button-size="btn--large"
        >
          Watch Trailer <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
