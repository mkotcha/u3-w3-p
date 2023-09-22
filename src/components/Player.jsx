import { useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Player = () => {
  const song = useSelector(state => state.player.song);

  const playerRef = useRef(null);
  const [musicIndex, setMusicIndex] = useState(0);

  useState(() => {}, []);

  return (
    <>
      {song ? (
        <audio src={song.preview} ref={playerRef} crossOrigin=""></audio>
      ) : (
        <audio ref={playerRef} src="" crossOrigin=""></audio>
      )}
      <div className="container-fluid fixed-bottom bg-container ">
        <Row>
          <Col lg={{ span: 10, offset: 2 }}>
            <Row className="justify-content-center ">
              <Col xs={{ span: 7, offset: 0 }} lg={{ span: 5, offset: 2 }} className="playerControls mt-1 text-center">
                <Row>
                  <Col>
                    <span>
                      <img src="/assets/img/playerbuttons/Shuffle.png" alt="shuffle" />
                    </span>
                  </Col>
                  <Col>
                    <span>
                      <img src="/assets/img/playerbuttons/Previous.png" alt="previous" />
                    </span>
                  </Col>
                  <Col>
                    <span onClick={() => playerRef?.current?.play()}>
                      <img src="/assets/img/playerbuttons/Play.png" alt="play" />
                    </span>
                  </Col>
                  <Col>
                    <span>
                      <img src="/assets/img/playerbuttons/Next.png" alt="next" />
                    </span>
                  </Col>
                  <Col>
                    <span>
                      <img src="/assets/img/playerbuttons/Repeat.png" alt="repeat" />
                    </span>
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
