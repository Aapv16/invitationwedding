import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="info" id="info">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-8 col-10 mx-auto my-auto text-center">
            <h2>Informasi Acara</h2>
            <p className="alamat">
              Lorem ipsum dolor sit amet, Lorem, ipsum.. <br /> Lorem, ipsum
              dolor.
            </p>
            {/* img */}
            <div className="peta">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31713.91525758461!2d107.4724864!3d-6.4913408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e690d870660ea93%3A0xd164d4f4f1a00cb1!2sSiloam%20Hospitals%20Purwakarta!5e0!3m2!1sid!2sid!4v1755023660625!5m2!1sid!2sid"
                // width="600"
                // height="450"
                // style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* img */}
            <a
              className="btn btn-light btn-sm mb-2"
              href="https://maps.app.goo.gl/h49YYzLesBh1LaCo9"
              target="_blank"
            >
              Klik untuk membuka peta
            </a>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              nulla similique ducimus molestias et quasi?
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-md-5 col-10">
            {/* card */}
            <div class="card mb-3  text-center text-bg-light">
              <div class="card-header">Akad Nikah</div>
              <div class="card-body">
                <div className="row justify-content-center ">
                  <div className="col-md-6 ">
                    {/* icon */}
                    <span>
                      <i className="bi bi-clock d-block"></i>
                    </span>
                    <span>08.00 wib</span>
                    {/* icon */}
                  </div>
                  <div className="col-md-6 ">
                    {/* icon */}
                    <span>
                      <i class="bi bi-calendar-week d-block"></i>
                    </span>
                    <span>Mingu, 20 November 2025</span>
                    {/* icon */}
                  </div>
                </div>
              </div>
              <div className="card-footer">
                Saat acara diharpkan kondusif Lorem, ipsum dolor.
              </div>
            </div>
            {/* card */}
          </div>

          {/* kolom ke dua */}
          <div className="col-md-5 col-10">
            {/* card */}
            <div class="card text-center text-bg-light">
              <div class="card-header">Resepsi</div>
              <div class="card-body">
                <div className="row justify-content-center ">
                  <div className="col-md-6 ">
                    {/* icon */}
                    <span>
                      <i className="bi bi-clock d-block"></i>
                    </span>
                    <span>11.00 - Selesai</span>
                    {/* icon */}
                  </div>
                  <div className="col-md-6 ">
                    {/* icon */}
                    <span>
                      <i class="bi bi-calendar-week d-block"></i>
                    </span>
                    <span>Mingu, 20 November 2025</span>
                    {/* icon */}
                  </div>
                </div>
              </div>
              <div className="card-footer">
                Saat acara diharpkan kondusif Lorem, ipsum dolor.
              </div>
            </div>
            {/* card */}
          </div>
          {/* kolom ke dua */}
        </div>
      </div>
    </div>
  );
};

export default Info;
