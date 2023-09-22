import { Col, Row } from "react-bootstrap";

const Player = () => {
  return (
    <>
      <div className="container-fluid fixed-bottom bg-container ">
        <Row>
          <Col lg={{ span: 10, offset: 2 }}>
            <Row className="justify-content-center ">
              <Col xs={{ span: 6, offset: 3 }} lg={{ span: 5, offset: 2 }} className="playerControls mt-1">
                <Row>
                  <Col>
                    <a href="#">
                      <img src="/assets/img/playerbuttons/Shuffle.png" alt="shuffle" />
                    </a>
                  </Col>
                  <Col>
                    <a href="#">
                      <img src="/assets/img/playerbuttons/Previous.png" alt="previous" />
                    </a>
                  </Col>
                  <Col>
                    <a href="#">
                      <img src="/assets/img/playerbuttons/Play.png" alt="play" />
                    </a>
                  </Col>
                  <Col>
                    <a href="#">
                      <img src="/assets/img/playerbuttons/Next.png" alt="next" />
                    </a>
                  </Col>
                  <Col>
                    <a href="#">
                      <img src="/assets/img/playerbuttons/Repeat.png" alt="repeat" />
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center  py-3">
              <Col xs={{ span: 7, offset: 0 }} lg={{ span: 5, offset: 2 }}>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Player;
