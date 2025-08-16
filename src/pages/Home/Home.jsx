import React, { useEffect, useRef, useState } from "react";
// import React from "react";
import "./Home.css";
import UndanganNikah from "../../components/UndanganNikah/UndanganNikah";
import Header from "../../components/Header/Header";
import Info from "../../components/Info/Info";
import History from "../../components/History/History";
import Gallery from "../../components/Gallery/Gallery";
import Rsvp from "../../components/Rsvp/Rsvp";
import Gifts from "../../components/Gifts/Gifts";
import Footer from "../../components/Footer/Footer";
import Audio from "../../components/Audio/Audio";
import NavbarWed from "../../components/NavbarWed/NavbarWed";
import { useLocation } from "react-router-dom";
import Disqus from "../../components/Disqus/Disqus";

const Home = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nama = queryParams.get("nama");
  const [showUndangan, setShowUndangan] = useState(false);
  const [playSong, setPlaySong] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (showUndangan) {
      document.body.style.overflow = "auto";
      handlePlay();
      // Artinya:
      // Cek apakah showUndangan bernilai true (artinya undangan sedang ditampilkan).
    } else {
      document.body.style.overflow = "auto";
      handlePause();
      // Artinya:
      // Jika showUndangan tidak true (berarti undangan sedang ditutup).
    }

    return () => {
      document.body.style.overflow = "auto";
      handlePause();
    };
  }, [showUndangan]);

  const handlOpen = () => {
    setShowUndangan(true);
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlaySong(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlaySong(false);
    }
  };

  const togglePlay = () => {
    if (playSong) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  return (
    <div className="Home">
      {/* <NavbarWed /> */}

      <Audio
        audioRef={audioRef}
        togglePlay={togglePlay}
        playSong={playSong}
        setPlaySong={setPlaySong}
      />

      <>
        <UndanganNikah nama={nama} setShowUndangan={setShowUndangan} />
      </>

      {showUndangan && (
        <div>
          <NavbarWed />
          {/* <NavbarWed /> */}
          {/* home */}
          <Header />
          {/* home */}
          {/* info */}
          <Info />
          {/* info */}
          {/* history */}
          <History />
          {/* history */}
          {/* gallery */}
          <Gallery />
          {/* gallery */}
          {/* Rsvp */}
          <Rsvp nama={nama} />
          {/* Rsvp */}
          {/* Gifts */}
          <Gifts />
          {/* Gifts */}

          <Footer />

          {/* <ExploreMenu category={category} setCategory={setCategory} /> */}
          {/* <FoodDisplay category={category} /> */}
          {/* <AppDownload /> */}
        </div>
      )}
    </div>
  );
};

export default Home;
