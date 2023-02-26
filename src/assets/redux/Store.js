import { configureStore } from "@reduxjs/toolkit";
import FullflixSlice from "./FullflixSlice";


export const Store = configureStore({
    reducer: {
        fullflix: FullflixSlice,
    }
});