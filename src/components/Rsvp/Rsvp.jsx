import React, { useState } from "react";
import "./Rsvp.css";
import Disqus from "../Disqus/Disqus";

const Rsvp = ({ nama }) => {
  const [jumlah, setJumlah] = useState(1);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("nama", nama);
    data.append("jumlah", jumlah);
    data.append("status", status);

    fetch(
      "https://script.google.com/macros/s/AKfycbwL0PQPCA7aajPrjTh-AWJDMxYItIwRNICi6YCVuGzVrfVyUmpVcmMIG2mKAuv36H3h/exec",
      {
        method: "POST",
        body: data,
      }
    ).then(() => {
      alert("Konfirmasi kehadiran terkirim!");
    });
  };

  return (
    <div className="rsvp" id="rsvp">
      <div className="container">
        {/* rsvp */}
        <div className="row justify-content-center text-center ">
          <h2>Konfirmasi Kehadiran</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius modi,
            reprehenderit et dolorum nam iste!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          // method="POST"
          // id="form"
          action="https://script.google.com/macros/s/AKfycbwL0PQPCA7aajPrjTh-AWJDMxYItIwRNICi6YCVuGzVrfVyUmpVcmMIG2mKAuv36H3h/exec"
          className="row row-cols-md-auto justify-content-center g-3 align-items-center"
        >
          {/* input 1 */}
          <div className="col-12">
            <div className="mb-3">
              <label for="nama" className="form-label">
                nama
              </label>
              <input
                type="text"
                className="form-control"
                id="nama"
                name="nama"
                value={nama}
                placeholder={nama || "masukan nama"}
              />
            </div>
          </div>
          {/* input 1 */}
          {/* input 2 */}
          <div className="col-12">
            <div className="mb-3">
              <label for="jumlah" className="form-label">
                Jumlah
              </label>
              <input
                type="number"
                className="form-control"
                id="jumlah"
                name="jumlah"
                min="1"
                max="5"
                length="1"
                onChange={(e) => setJumlah(Number(e.target.value))}
                value={jumlah}
              />
            </div>
          </div>
          {/* input 2 */}
          {/* input 1 */}
          <div className="col-12">
            <div className="mb-3">
              <label for="status" className="form-label">
                Konfirmasi
              </label>
              <select
                name="status"
                id="status"
                className="form-select"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
                required
              >
                <option value="">Pilih salah satu</option>
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
              </select>
            </div>
          </div>
          <div className="col-12 pt-3 ">
            <button type="submit" className="btn btn-warning">
              Kirim
            </button>
          </div>
          {/* input 1 */}
        </form>
      </div>
      {/* rsvp */}
      <div className=" w-100 h-25 container justify-content-center text-center ">
        <div className="row mx-auto col-md-6 ">
          {/* diskus */}
          <Disqus />
          {/* diskus */}
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
