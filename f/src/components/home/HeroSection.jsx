import React from "react";
import "./style/home.scss";
import "./style/about.scss";
import { content } from "../../utils/content";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const { header, subHeader, callToAction } = content.heroSection;
  const nav = useNavigate();
  return (
    <div className="align-items-center flex-column d-flex justify-content-center w-100 p-4 text-white hero-section">
      <div className="div-1">
        <p className="heading mb-3">{header}</p>
        <p className="sub-heading">{subHeader}</p>
      </div>
      <button
        onClick={() => nav(`${import.meta.env.BASE_URL}coach`)}
        className="mt-3 rounded p-3 call-to-action-btn"
        alt="Call to Action"
      >
        {callToAction}
      </button>
    </div>
  );
};

export default HeroSection;
