import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSong } from "../redux/actions";

const SingleAlbumSong = ({ track }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="py-3 trackHover" onClick={() => dispatch(setSong(track))}>
        <div className="card-title trackHover px-3 text-white">{track.title}</div>
        <small className="duration text-white">
          {Math.floor(
            parseInt(track.duration) / 60 // setting the duration minutes
          )}
          :
          {parseInt(track.duration) % 60 < 10
            ? "0" + (parseInt(track.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
            : parseInt(track.duration) % 60}
        </small>
      </div>
    </>
  );
};

export default SingleAlbumSong;
