import React from "react";
import "./Header.css";
import myimage from "../../assets/wedding/portfolio.png";

const Header = () => {
  return (
    <div id="home" className="header">
      <div className="container">
        <div className="row justify-content-center">
          <div className="my-header col-md-8 text-center mt-lg-5">
            <h2 data-aos="fade-up" data-aos-delay="20" data-aos-duration="1000">
              Acara Pernikahan
            </h2>
            <p
              className="mx-auto text-center"
              data-aos="fade-up"
              data-aos-delay="20"
              data-aos-duration="2000"
            >
              Diselengarkan pada
            </p>
            <h3 data-aos="fade-up" data-aos-delay="20" data-aos-duration="2000">
              <br /> 20 november 2023 di Bandung, jawa Barat.
            </h3>
            <p
              data-aos="fade-down"
              data-aos-delay="20"
              data-aos-duration="3000"
            >
              Oleh karena itu, dengan segala hormat, kami bermaksud untuk
              mengundang Bapak/Ibu, Saudara/i, untuk hadir pada acara pernikahan
              kami
            </p>
          </div>
        </div>
        <div className="row couple  ">
          <div className="col-lg-6">
            <div className="row">
              <div
                className="col-8 text-end mt-5"
                data-aos="fade-up"
                data-aos-delay="25"
                data-aos-duration="1200"
              >
                <h3>Afrianus vicky</h3>
                <p
                  data-aos="fade-up"
                  data-aos-delay="25"
                  data-aos-duration="2500"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  eveniet eius facilis alias molestiae numquam.
                </p>
                <p>
                  Putra dari Bapak. Lorem <br />
                  dan <br />
                  Ibu ipsum
                </p>
              </div>
              <div
                className="col-4  "
                data-aos="fade-left"
                data-aos-delay="35"
                data-aos-duration="3000"
              >
                <img
                  src={myimage}
                  alt="Afrianus"
                  className="my-image img-responsiv rounded-circle"
                />
              </div>
            </div>
          </div>
          <span className="heart">
            <i
              data-aos="zoom-in-down"
              data-aos-delay="25"
              data-aos-duration="1200"
              className="bi bi-heart-fill"
            ></i>
          </span>
          {/* kollom kedua */}
          <div className="col-lg-6">
            <div className="row">
              {/* img */}
              <div className="col-4">
                <img
                  data-aos="fade-right"
                  data-aos-delay="30"
                  data-aos-duration="3000"
                  src={myimage}
                  alt="Afrianus"
                  className="my-image img-responsiv rounded-circle"
                />
              </div>
              {/* img */}
              <div
                data-aos="fade-up"
                data-aos-delay="25"
                data-aos-duration="2500"
                className="col-8 mt-5"
              >
                <h3>Afrianus vicky</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  eveniet eius facilis alias molestiae numquam.
                </p>
                <p>
                  Putra dari Bapak. Lorem <br />
                  dan <br />
                  Ibu ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
