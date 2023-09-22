export const SET_SONG = "SET_SONG";
export const SHOW_SEARCH = "SHOW_SEARCH";
export const HIDE_SEARCH = "HIDE_SEARCH";
export const ADD_ROCK = "ADD_ROCK";
export const ADD_POP = "ADD_POP";
export const ADD_HH = "ADD_HH";

export const showSearch = () => ({ type: SHOW_SEARCH });
export const hideSearch = () => ({ type: HIDE_SEARCH });

export const addRockArtist = artist => ({ type: ADD_ROCK, payload: artist });
export const addPopArtist = artist => ({ type: ADD_POP, payload: artist });
export const addHhArtist = artist => ({ type: ADD_HH, payload: artist });
