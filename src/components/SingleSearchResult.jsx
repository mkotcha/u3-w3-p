import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const singleSearchResult = ({ song }) => {
  return (
    <>
      <Col className="col text-center">
        <Link to={"/"}>
          <img className="img-fluid" src={song.album.cover_medium} alt="1" />
        </Link>
        <p>
          <Link to={"/album/" + song.album.id} className="text-decoration-none">
            Title: "{song.title.length < 16 ? song.title : song.title.substring(0, 16)}..."
            <br />
          </Link>
          <Link href={"/artist_page.html?id=" + song.artist.id} className="text-decoration-none">
            Artist: {song.artist.name}
          </Link>
        </p>
      </Col>
    </>
  );
};
export default singleSearchResult;
