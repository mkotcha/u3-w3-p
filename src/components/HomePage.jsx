import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchResult from "./SearchResult";
import { useEffect, useState } from "react";
import SingleRandomArtist from "./SingleRandomArtist";
import { hideSearch, unsetSearchSongs } from "../redux/actions";

const HomePage = () => {
  const showSearch = useSelector(state => state.search.showSearch);

  const [rockRand, setRockRand] = useState([]);
  const [popRand, setPopRand] = useState([]);
  const [hhRand, setHhRand] = useState([]);

  const dispatch = useDispatch();

  const getRandom = arr => {
    const rand = [];
    while (rand.length < 4) {
      const name = arr[Math.floor(Math.random() * arr.length)];
      console.log("name: ", name);
      if (!rand.includes(name)) {
        rand.push(name);
      }
    }
    return rand;
  };

  useEffect(() => {
    const rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];
    const popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];
    const hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];
    dispatch(unsetSearchSongs());
    dispatch(hideSearch());

    setRockRand(getRandom(rockArtists));
    setPopRand(getRandom(popArtists));
    setHhRand(getRandom(hipHopArtists));
  }, [dispatch]);

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
              {rockRand && rockRand.map((artist, i) => <SingleRandomArtist key={i} artistName={artist} />)}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
              {popRand && popRand.map((artist, i) => <SingleRandomArtist key={i} artistName={artist} />)}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
              {hhRand && hhRand.map((artist, i) => <SingleRandomArtist key={i} artistName={artist} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
