import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from'./counter'



export default configureStore({
reducer:{
    counter: favoritesSlice 

}


})



