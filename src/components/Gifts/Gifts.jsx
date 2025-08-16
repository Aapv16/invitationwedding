import React from "react";
import "./Gifts.css";
import img from "../../assets/wedding/portfolio.png";

const Gifts = () => {
  return (
    <section id="gifts" className="gifts">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-10 text-center">
            <span>ungkapan tanda kasih</span>
            <h2>Kirim Hadiah</h2>
            <p className="">Lorem ipsum dolor sit amet dipi Lorem, ipsum.</p>
          </div>
        </div>

        {/*  */}
        <div className="row justify-content-center text-center">
          <div className="col-md-6">
            <ul className="list-group">
              {/* list 1 */}
              <li className="list-group-item">
                <div className="fw-bold">BCA </div>
                123456780 - Afrianus vicky
              </li>
              {/* list 1 */}
              {/* list 1 */}
              <li className="list-group-item">
                <div className="fw-bold">Ovo </div>
                123456780 - Afrianus vicky
              </li>
              {/* list 1 */}
              {/* list 1 */}
              <li className="list-group-item">
                <div className="fw-bold">Saweria</div>
                <img
                  className="w-25 d-block text-center  mx-auto"
                  src={img}
                  alt=""
                />
                123456780 - Afrianus vicky
              </li>
              {/* list 1 */}
            </ul>
          </div>
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default Gifts;
