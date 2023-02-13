import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import FullflixSlice from "./FullflixSlice";


export const Store = configureStore({
    reducer: {
        fullflix: FullflixSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
});