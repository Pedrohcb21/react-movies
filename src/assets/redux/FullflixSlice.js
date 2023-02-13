import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movie: {}
};

export const FullflixSlice = createSlice({
    name: 'fullflix',
    initialState,
    reducers: {
        getMovieInfo: (state, action) => {
            state.movie = action.payload
        }
    }
})

export const { getMovieInfo } = FullflixSlice.actions;

export default FullflixSlice.reducer;
