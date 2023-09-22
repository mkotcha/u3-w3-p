import { HIDE_SEARCH, SET_SEARCH_FILTER, SET_SEARCH_SONGS, SHOW_SEARCH, UNSET_SEARCH_SONGS } from "../actions";

const initialState = {
  showSearch: false,
  searchFilter: "",
  songs: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SEARCH:
      return {
        ...state,
        showSearch: true,
      };
    case HIDE_SEARCH:
      return {
        ...state,
        showSearch: false,
      };
    case SET_SEARCH_FILTER:
      return {
        ...state,
        searchFilter: action.payload,
      };

    case SET_SEARCH_SONGS:
      return {
        ...state,
        songs: [...state.songs, ...action.payload],
      };
    case UNSET_SEARCH_SONGS:
      return {
        ...state,
        songs: [],
      };

    default:
      return state;
  }
};

export default searchReducer;
