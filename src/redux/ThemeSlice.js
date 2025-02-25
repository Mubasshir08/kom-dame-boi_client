import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
    name: "theme",
    initialState: {
        islight: true,
    },
    reducers: {
        setTheme: (state, action) => {
            state.islight = action.payload;
        },
    },
});

export const { setTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;