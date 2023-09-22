import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchResult from "./SearchResult";
import { useEffect } from "react";
import SingleRandomArtist from "./SingleRandomArtist";
import { addHhArtist, addPopArtist, addRockArtist, hideSearch, unsetSearchSongs } from "../redux/actions";

const HomePage = () => {
  const showSearch = useSelector(state => state.search.showSearch);
  const artistRandom = useSelector(state => state.artist);
  const dispatch = useDispatch();
  let rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];

  let popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];

  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  let rockRandomArtists = [];
  let popRandomArtists = [];
  let hipHopRandomArtists = [];

  useEffect(() => {
    dispatch(unsetSearchSongs());
    dispatch(hideSearch());

    while (rockRandomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        rockRandomArtists.push(artist); // pushes the artist in the array
        dispatch(addRockArtist(artist));
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
        dispatch(addPopArtist(artist));
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist = hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
        dispatch(addHhArtist(artist));
      }
    }

    // for (let j = 0; j < rockRandomArtists.length; j++) await handleArtist(rockRandomArtists[j], "#rockSection");

    // for (let k = 0; k < popRandomArtists.length; k++) await handleArtist(popRandomArtists[k], "#popSection");

    // for (let l = 0; l < hipHopRandomArtists.length; l++) await handleArtist(hipHopRandomArtists[l], "#hipHopSection");
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <Link to="/">TRENDING</Link>
          <Link to="/">PODCAST</Link>
          <Link to="/">MOODS AND GENRES</Link>
          <Link to="/">NEW RELEASES</Link>
          <Link to="/">DISCOVER</Link>
        </div>
      </div>
      <div className="row">
        <div className="col-10">{showSearch && <SearchResult />}</div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              {artistRandom.rockArtists &&
                artistRandom.rockArtists.map((artist, i) => <SingleRandomArtist key={i} artistName={artist} />)}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
              {artistRandom.popArtists &&
                artistRandom.popArtists.map((artist, i) => <SingleRandomArtist key={i} artistName={artist} />)}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
              {artistRandom.hipHopArtists &&
                artistRandom.hipHopArtists.map((artist, i) => <SingleRandomArtist key={i} artistName={artist} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
