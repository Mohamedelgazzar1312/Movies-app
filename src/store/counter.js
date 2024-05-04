
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  favorites: [],
  counter: 0,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: INITIAL_STATE,
  reducers: {
    addToFavorites: (state, action) => {
      const movie = action.payload;
      if (!state.favorites.map(fav => fav.id).includes(movie.id)) {
        state.favorites.push(movie);
        state.counter += 1;
      }
    },
    removeFromFavorites: (state, action) => {
      const movieId = action.payload;
      state.favorites = state.favorites.filter((fav) => fav.id !== movieId);
      state.counter -= 1;

    },
    decreasFavorites: (state) => {
     
      state.counter -= 1;
    },
  },
});

export const { addToFavorites, removeFromFavorites,decreasFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;


























// import { createSlice } from "@reduxjs/toolkit";


// const INITIAL_STATE={
    
//     counterVal: 6,
    
// }
// const counterSlice =createSlice({

//     name:"counter",
//     initialState:INITIAL_STATE,
//     reducers:{
//      increaseCounter:(state,action)=>{
//         state.counterVal=state.counterVal+1
//      }
//      ,decreaseCounter:(state,action)=>{
//         state.counterVal=state.counterVal-1
//      }
//     , increaseByValue:(state,action)=>{
//         state.counterVal=state.counterVal+action.payload
//      }
//     , resetCounter:(state)=>{
//         state.counterVal=0
//      }}
// })

// export const {increaseCounter,decreaseCounter,increaseByValue,resetCounter}=counterSlice.actions;
// export default counterSlice.reducer  ;







// export const {
//    increaseCounter,
//    decreaseCounter,
//    resetCounter,
//    increaseByValue,
//  } = counterSlice.actions;