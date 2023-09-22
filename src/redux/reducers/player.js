import { SET_SONG } from "../actions";

const initialState = {
  content: [],
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONG:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    default:
      return state;
  }
};

export default playerReducer;
