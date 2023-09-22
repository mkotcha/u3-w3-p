import { SET_SONG } from "../actions";

const initialState = {
  song: null,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONG:
      return {
        ...state,
        song: action.payload,
      };

    default:
      return state;
  }
};

export default playerReducer;
