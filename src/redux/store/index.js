import { configureStore, combineReducers } from "@reduxjs/toolkit";
import gameDataSlice from "../reducers/gameDataSlice";


const rootReducer = combineReducers({
    gameData: gameDataSlice
});


export const store = configureStore({
    reducer: rootReducer
})