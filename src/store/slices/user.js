import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: "",
  calculatedBudget: "",
};
const inboxSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      state.user = action.payload;
    },
    handelCalculatedBudget(state, action) {
      state.calculatedBudget = action.payload;
    },
  },
});
export const { updateUser, handelCalculatedBudget } = inboxSlice.actions;
export default inboxSlice.reducer;
