import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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

        // let imgContainer = document.querySelector("#img-container"); // gets a reference to the image container
        // let trackList = document.querySelector("#trackList"); // gets a reference to the tracklist div

        if (response.ok) {
          let album = await response.json(); // transforms the response into a JSON
          //   imgContainer.innerHTML = albumArt(album); // creates the albumArt for the img-container
          //   for (let i = 0; i < album.tracks.data.length; i++) {
          //     let div = document.createElement("div");
          //     div.innerHTML += song(album.tracks.data[i]); // use "song" method to create the item
          //     trackList.appendChild(div); // add the item to the tracklist
          //   }
          console.log(album);
          setAlbum(album);
        } else {
          // something went wrong with the request --> i.e. headers missing, wrong HTTP Method
          //   document.querySelector("#img-container").innerHTML = "NOT OK" + (await response.text());
          console.log(response.text);
        }
      } catch (exception) {
        // ex.: Url is not correct, Internal Server Error
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
              {album && album.tracks.data.map(track => <SingleAlbumSong track={track} />)}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Album;
