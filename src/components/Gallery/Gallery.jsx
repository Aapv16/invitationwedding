import React from "react";
import LightGallery from "lightgallery/react";
import "./Gallery.css";

//vidio
import vidio from "../../assets/gallery/top.mp4";

// Gambar
import img from "../../assets/gallery/tes.jpg";
import img2 from "../../assets/gallery/tes1.jpg";

// Styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// styles vidio
import "lightgallery/css/lg-video.css";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallery = () => {
  return (
    <div className="gallery" id="gallery">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-10 text-center">
            <span>Memori Kisah Kami</span>
            <h2>Gallery Foto</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              deserunt.
            </p>
          </div>
        </div>
        <div className="my-rowjustify-content-center text-center">
          <LightGallery
            speed={500}
            plugins={[lgThumbnail]}
            className="row row-cols-lg-10 row-cols-md-3 row-cols-sm-2 row-cols-1  "
          >
            <a className="col" href={img}>
              <img
                src={img}
                className="img-fluid w-25 m-1 rounded"
                alt="Foto 1"
              />
            </a>
            <a className="col" href={img}>
              <img
                src={img}
                className="img-fluid w-25 m-1 rounded"
                alt="Foto 1"
              />
            </a>
            <a className="col " href={img}>
              <img
                src={img}
                className="img-fluid w-25 m-1 rounded"
                alt="Foto 1"
              />
            </a>
            <a className="col " href={img}>
              <img
                src={img}
                className="img-fluid w-25 m-1 rounded"
                alt="Foto 1"
              />
            </a>
            <a className="col " href={img}>
              <img
                src={img}
                className="img-fluid w-25 m-1 rounded"
                alt="Foto 1"
              />
            </a>
            <a className="col " href={img}>
              <img
                src={img}
                className="img-fluid w-25 m-1 rounded"
                alt="Foto 1"
              />
            </a>
            <a className="col  " href={img}>
              <img
                src={img}
                className="img-fluid w-25 m-1 rounded"
                alt="Foto 1"
              />
            </a>
            <a className="col  " href={img}>
              <img
                src={img}
                className="img-fluid w-25 m-1 rounded"
                alt="Foto 1"
              />
            </a>
            <a className="col  " href={img}>
              <img
                src={img}
                className="img-fluid w-25 m-1 rounded"
                alt="Foto 1"
              />
            </a>

            {/* Tambahkan gambar lain dengan pola sama */}

            {/* Video YouTube */}
            {/* <a
            className="col mt-3"
            data-lg-size="1280-720"
            data-video='{"source": [{"src":"../../assets/gallery/top.mp4", "type":"youtube"}], "attributes": {"preload": false, "controls": true}}'
            // data-video='{"source": [{"src":"https://www.youtube.com/watch?v=F0d8JJUNkqo&list=RDMMF0d8JJUNkqo&start_radio=1", "type":"youtube"}], "attributes": {"preload": false, "controls": true}}'
            data-poster="https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg"
            // href="https://www.youtube.com/watch?v=F0d8JJUNkqo&list=RDMMF0d8JJUNkqo&start_radio=1"
          >
            <img
              src={vidio}
              className="img-fluid w-100 rounded"
              alt="Video YouTube"
            />
          </a> */}
          </LightGallery>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
