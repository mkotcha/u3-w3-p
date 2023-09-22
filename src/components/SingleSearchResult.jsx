import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSong } from "../redux/actions";

const SingleSearchResult = ({ song }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Col className="col text-center">
        <Link to={"/"}>
          <img className="img-fluid" src={song.album.cover_medium} alt="1" />
        </Link>
        <p>
          <div className="text-decoration-none" onClick={() => dispatch(setSong(song))}>
            Title: "{song.title.length < 16 ? song.title : song.title.substring(0, 16)}..."
            <br />
          </div>
          <Link href={"/artist_page.html?id=" + song.artist.id} className="text-decoration-none">
            Artist: {song.artist.name}
          </Link>
        </p>
      </Col>
    </>
  );
};
export default SingleSearchResult;
