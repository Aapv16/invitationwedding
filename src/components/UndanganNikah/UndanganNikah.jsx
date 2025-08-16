import React from "react";
import "./UndanganNikah.css";
import CountDown from "../Countdown/CountDown";
import vidio from "../../assets/wedding/bg.mp4";

// import NavbarWed from "../../components/NavbarWed/NavbarWed";

const UndanganNikah = ({ setShowUndangan, nama }) => {
  return (
    <div
      id="#"
      className=" hero w-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white"
    >
      {/* <video autoPlay loop muted playsInline>
        <source src={vidio} type="video/mp4" />
      </video> */}
      <main data-aos="fade-up" data-aos-delay="90" data-aos-duration="1000">
        <h4 data-aos="fade-left" data-aos-delay="45" data-aos-duration="1000">
          Kepada Bapak/Ibu/Saudara/i, {nama ? nama : "Tamu Undangan"}!
        </h4>
        <h1 data-aos="fade-up" data-aos-delay="15" data-aos-duration="1000">
          Afrianus & Deli
        </h1>
        <p> Akan melangsungkan resepsi pernikahan dalam</p>
        <CountDown />
        <a
          href="#home"
          onClick={() => setShowUndangan(true)}
          className="info-btn btn btn-lg mt-4"
        >
          Lihat Undangan
        </a>
        {/* <button onClick={handleClose}>ok</button> */}
      </main>
      {/* <div className="m y-nav">
        <NavbarWed />
      </div> */}
    </div>
  );
};

export default UndanganNikah;
