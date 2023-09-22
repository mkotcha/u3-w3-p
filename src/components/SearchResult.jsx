import { useSelector } from "react-redux";
import SingleSearchResult from "./SingleSearchResult";

const SearchResult = () => {
  const songs = useSelector(state => state.search.songs);

  return (
    <>
      <div id="searchResults">
        <h2>Search Results</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
          {songs && songs.map(song => <SingleSearchResult song={song} />)}
        </div>
      </div>
    </>
  );
};
export default SearchResult;
