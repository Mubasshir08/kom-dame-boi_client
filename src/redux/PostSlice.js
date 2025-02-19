import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
    name: "post",
    initialState: {
        popup: false,
    },
    reducers: {
        setPopup: (state, action) => {
            state.popup = action.payload;
        },
    },
});

export const { setPopup } = PostSlice.actions;
export default PostSlice.reducer;