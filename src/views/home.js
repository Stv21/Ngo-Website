import React from "react";

import { Player } from "@lottiefiles/react-lottie-player";
import { Helmet } from "react-helmet";
import axios from "../Axios/axios";
import "./Styles/home.css";
import bkimg from "./Images/test.jpeg";
import giftimg from "./Images/IMG_1698.jpg";
import outimg from "./Images/IMG_1694.jpg";
import NGOICON from "./../components/Images/GCAHF.png";
const Home = (props) => {
  const test = async () => {
    const res = await axios.get("/data");
    console.log(res);
  };
  return (
    <div className="home-container">
      <Helmet>
        <title>Geriatric Care and Health Foundation</title>
        <link rel="icon" href={NGOICON} />
        
        <meta name="title" content="Geriatric Care and Health Foundation" />
        <meta
          name="description"
          content="Dedicated to improving the health and well-being of older adults through high-quality, compassionate care."
        />
        <meta
          name="keywords"
          content="Geriatric Care, Health Foundation, Elderly Care, Senior Health"
        />
        <meta
          property="og:title"
          content="Geriatric Care and Health Foundation"
        />
        <meta
          property="og:description"
          content="Dedicated to improving the health and well-being of older adults through high-quality, compassionate care."
        />

        <meta property="og:url" content="https://geriatrichcf.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div>
        <h1 className=" tw-font-bold tw-text-xl">
          Welcome to Geriatic Care and Health Foundation
        </h1>
      </div>
      <div className="home-container01">
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="home-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="home-slider-slide swiper-slide"
              style={{ backgroundImage: `url(${giftimg})` }}
            >
              {/* <span>Text</span> */}
            </div>
            <div
              data-thq="slider-slide"
              className="home-slider-slide1 swiper-slide"
              style={{ backgroundImage: `url(${outimg})` }}
            >
              {/* <span>Lorem</span> */}
            </div>
            <div
              data-thq="slider-slide"
              className="home-slider-slide2 swiper-slide"
              style={{ backgroundImage: `url(${bkimg})` }}
            >
              {/* <span className="home-text02">Text</span> */}
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="home-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </div>
      

      <div className="tw-text-center tw-my-4">
        <h1 className=" tw-font-bold tw-text-xl">Our Mission</h1>
        <p className="tw-text-xl">
          At Geriatric Care and Health Foundation, we are dedicated to enhancing
          the quality of life for elderly individuals by providing comprehensive
          healthcare services, promoting healthy aging, and supporting research
          in geriatrics.
        </p>
      </div>
    </div>
  );
};

export default Home;
