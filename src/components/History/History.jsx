import React from "react";
import "./History.css";

const History = () => {
  return (
    <div id="history" className="history">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-10 text-center">
            <span>Bagaimana Cinta Kami Bersemi</span>
            <h2>Cerita Kami</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              magni illo nam ea nisi hic!
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <ul className="timeline">
              {/* timeliine 1 */}
              <li>
                <div className="timeline-img"></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3>peratama bertemu</h3>
                    <span>1 juni 2018</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias, quis? Nostrum quos a sit fuga.
                    </p>
                  </div>
                </div>
              </li>
              {/* timeline 1 */}
              {/* timeline2 */}
              <li className="timeline-inverted">
                <div className="timeline-img "></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3>Mulai serius</h3>
                    <span>1 agustus 2018</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias reiciendis ipsa magnam.
                    </p>
                  </div>
                </div>
              </li>
              {/* timeline2 */}
              {/* timeline3 */}
              <li className="">
                <div className="timeline-img "></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3>Mulai serius</h3>
                    <span>1 agustus 2018</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias reiciendis ipsa magnam.
                    </p>
                  </div>
                </div>
              </li>
              {/* timeline3 */}
              {/* timeline4 */}
              <li className="timeline-inverted">
                <div className="timeline-img "></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3>Mulai serius</h3>
                    <span>1 agustus 2018</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias reiciendis ipsa magnam.
                    </p>
                  </div>
                </div>
              </li>
              {/* timeline4 */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
