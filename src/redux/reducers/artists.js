import { ADD_HH, ADD_POP, ADD_ROCK } from "../actions";

const initialState = {
  name: "",

  rockArtists: [],
  popArtists: [],
  hipHopArtists: [],
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCK:
      return {
        ...state,
        rockArtists: [...state.rockArtists, action.payload],
      };
    case ADD_POP:
      return {
        ...state,
        popArtists: [...state.popArtists, action.payload],
      };
    case ADD_HH:
      return {
        ...state,
        hipHopArtists: [...state.hipHopArtists, action.payload],
      };

    default:
      return state;
  }
};
export default artistReducer;
