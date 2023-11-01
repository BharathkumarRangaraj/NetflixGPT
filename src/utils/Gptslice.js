import { createSlice } from "@reduxjs/toolkit";

const Gptslice = createSlice({
  name: "gpt",
  initialState: {
    showgptview: false,
  },
  reducers: {
    gptsearchview: (state, action) => {
      state.showgptview = !state.showgptview;
    },
  },
});
export const { gptsearchview } = Gptslice.actions;
export default Gptslice.reducer;
