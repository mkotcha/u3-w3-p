import { useDispatch } from "react-redux";
import { setSong } from "../redux/actions";
import { Col, Row } from "react-bootstrap";

const SingleAlbumSong = ({ track }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Row className="py-3 trackHover" onClick={() => dispatch(setSong(track))}>
        <Col className="card-title trackHover px-3 text-white">{track.title}</Col>
        <Col xs={2} className="duration text-white ">
          <small>
            {Math.floor(parseInt(track.duration) / 60)}:
            {parseInt(track.duration) % 60 < 10 ? "0" + (parseInt(track.duration) % 60) : parseInt(track.duration) % 60}
          </small>
        </Col>
      </Row>
    </>
  );
};

export default SingleAlbumSong;
