import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import SingleAlbumSong from "./SingleAlbumSong";

const Album = () => {
  const [album, setAlbum] = useState(null);
  const params = useParams();
  let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
  });

  useState(() => {
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
      <div className="col-12 col-md-9 offset-md-3 mainPage">
        <div className="row mb-3">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <Link to="/">TRENDING</Link>
            <Link to="/">PODCAST</Link>
            <Link to="/">MOODS AND GENRES</Link>
            <Link to="/">NEW RELEASES</Link>
            <Link to="/">DISCOVER</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 pt-5 text-center" id="img-container">
            {album && (
              <>
                <img src={album.cover_medium} class="card-img img-fluid" alt="Album" />
                <div class="mt-4 text-center">
                  <p class="album-title">{album.title}</p>
                </div>
                <div class="text-center">
                  <p class="artist-name">{album.artist.name}</p>
                </div>
                <div class="mt-4 text-center">
                  <button id="btnPlay" class="btn btn-success" type="button">
                    Play
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="col-md-8 p-5">
            <div className="row">
              <div className="col-md-10 mb-5" id="trackList">
                {album && album.tracks.data.map(track => <SingleAlbumSong track={track} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Album;
