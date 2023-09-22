import { useSelector } from "react-redux";

export const SET_SONG = "SET_SONG";
export const SHOW_SEARCH = "SHOW_SEARCH";
export const HIDE_SEARCH = "HIDE_SEARCH";
export const ADD_ROCK = "ADD_ROCK";
export const ADD_POP = "ADD_POP";
export const ADD_HH = "ADD_HH";
export const SET_SEARCH_FILTER = "SET_SEARCH_FILTER";
export const SET_SEARCH_SONGS = "SET_SEARCH_SONGS";
export const UNSET_SEARCH_SONGS = "UNSET_SEARCH_SONGS";

export const showSearch = () => ({ type: SHOW_SEARCH });
export const hideSearch = () => ({ type: HIDE_SEARCH });

export const addRockArtist = artist => ({ type: ADD_ROCK, payload: artist });
export const addPopArtist = artist => ({ type: ADD_POP, payload: artist });
export const addHhArtist = artist => ({ type: ADD_HH, payload: artist });
export const setSearchFilter = searchFilter => ({ type: SET_SEARCH_FILTER, payload: searchFilter });
export const setSearchSongs = searchSongs => ({ type: SET_SEARCH_SONGS, payload: searchSongs });
export const unsetSearchSongs = () => ({ type: UNSET_SEARCH_SONGS });
export const setSong = track => ({ type: SET_SONG, payload: track });

export const searchFetch = searchFilter => {
  return async dispatch => {
    dispatch(unsetSearchSongs());
    if (searchFilter.length > 2) {
      //if there's a value in the search box => fetch the information from rapidapi & display the result

      let headers = new Headers({
        // sets the headers
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
      });

      try {
        dispatch(showSearch());
        let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchFilter, {
          method: "GET",
          headers,
        }); // gets the information

        if (response.ok) {
          let result = await response.json(); // transforms the response to json
          let songs = result.data; // gets the songs info
          console.log(songs);
          dispatch(setSearchSongs(songs));
        } else {
          console.log("error");
          dispatch(hideSearch());
        }
      } catch (err) {
        console.log(err);
        dispatch(hideSearch());
      }
    } else {
      //else just hide the section!
      dispatch(hideSearch());
    }
  };
};
