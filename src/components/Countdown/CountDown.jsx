import React, { useEffect } from "react";
import simplyCountdown from "../Countdown/simplyCountdown.js";
import "./Countdown.css";

const CountDown = () => {
  useEffect(() => {
    simplyCountdown("#countdown", {
      year: 2025,
      month: 9,
      day: 25,
      hours: 0,
      minutes: 0,
      seconds: 0,
      words: {
        days: { lambda: (n, e) => (e > 1 ? n + "" : n), root: "hari" },
        hours: { lambda: (n, e) => (e > 1 ? n + "" : n), root: "jam" },
        minutes: { lambda: (n, e) => (e > 1 ? n + "" : n), root: "menit" },
        seconds: { lambda: (n, e) => (e > 1 ? n + "" : n), root: "menit" },
      },
    });
  }, []);
  return (
    <div
      id="countdown"
      className="simply-countdown my-time"
      data-aos="fade-up"
      data-aos-delay="45"
      data-aos-duration="5000"
    ></div>
  );
};

export default CountDown;
