import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import SingleAlbumSong from "./SingleAlbumSong";
import SearchResult from "./SearchResult";
import { useDispatch, useSelector } from "react-redux";
import { hideSearch, unsetSearchSongs } from "../redux/actions";
import TopBar from "./TopBar";

const Album = () => {
  const [album, setAlbum] = useState(null);
  const params = useParams();
  const showSearch = useSelector(state => state.search.showSearch);
  const dispatch = useDispatch();

  let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY_KEY,
  });

  useState(() => {
    dispatch(unsetSearchSongs());
    dispatch(hideSearch());
    const fetchAlbum = async () => {
      try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + params.id, {
          method: "GET",
          headers,
        });
        if (response.ok) {
          let album = await response.json(); // transforms the response into a JSON
          setAlbum(album);
        } else {
          console.log(response.text);
        }
      } catch (exception) {
        console.log(exception);
      }
    };
    fetchAlbum();
  }, []);

  return (
    <>
      <TopBar />
      <Row>
        <Col xs={10}>{showSearch && <SearchResult />}</Col>
      </Row>
      <Row>
        <Col md={3} className="pt-5" id="img-container">
          {album && (
            <>
              <img src={album.cover_medium} className="card-img img-fluid" alt="Album" />
              <div className="mt-4 text-center">
                <p className="album-title">{album.title}</p>
              </div>
              <Link to={"/artist/" + album.artist.id} className="text-center text-decoration-none">
                <p className="artist-name ">{album.artist.name}</p>
              </Link>
              <div className="mt-4 text-center">
                <button id="btnPlay" className="btn btn-success" type="button">
                  Play
                </button>
              </div>
            </>
          )}
        </Col>
        <Col md={8} className="p-5">
          <Row>
            <Col md={10} className="mb-5" id="trackList">
              {album && album.tracks.data.map((track, i) => <SingleAlbumSong key={i} track={track} />)}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Album;
