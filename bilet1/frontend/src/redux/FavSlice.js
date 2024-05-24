import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fav: JSON.parse(localStorage.getItem("fav")) || [],
};

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      let elem = [...state.fav].find(
        (elem) => elem._id == action.payload._id
      );

      if (elem) {
        state.fav = [...state.fav].filter(
          (elem) => elem._id !== action.payload._id
        );
      } else {
        state.fav = [...state.fav, action.payload];
      }

      localStorage.setItem("fav", JSON.stringify(state.fav));
    },

    deleteFav: (state, action) => {
      state.fav = [...state.fav].filter(
        (elem) => elem._id !== action.payload._id
      );
      localStorage.setItem("fav", JSON.stringify(state.fav));
    },
    clearFav: (state, action) => {
      state.fav = [];
      localStorage.setItem("fav", JSON.stringify(state.fav));
    },
  },
});

export const { addToFav, deleteFav, clearFav } = favSlice.actions;
export default favSlice.reducer;
