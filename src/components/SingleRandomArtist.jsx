import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleRandomArtist = ({ artistName }) => {
  const [artist, setArtist] = useState("");

  useEffect(() => {
    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY_KEY,
    });
    const handleArtist = async artistName => {
      try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName, {
          method: "GET",
          headers,
        }); // gets the information
        if (response.ok) {
          let result = await response.json(); // transforms the response to json
          setArtist(result.data[0]);
        } else {
          console.log("error");
        }
      } catch (err) {
        console.log(err);
      }
    };
    handleArtist(artistName);
  }, [artistName]);

  return (
    <>
      {artist && (
        <Col className="col text-center">
          <Link to={"/album/" + artist.album.id}>
            <img className="img-fluid" src={artist.album.cover_medium} alt="1" />
          </Link>
          <p>
            <Link to={"/album/" + artist.album.id} className="text-decoration-none">
              Album: "{artist.album.title.length < 16 ? artist.album.title : artist.album.title.substring(0, 16)}..."
              <br />
            </Link>
            <Link to={"/artist/" + artist.artist.id} className="text-decoration-none">
              Artist: {artist.artist.name}
            </Link>
          </p>
        </Col>
      )}
    </>
  );
};

export default SingleRandomArtist;
