import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  hotels: [],
  places: [],
  events: [],
  trips: [],
};
const inboxSlice = createSlice({
  name: "inbox",
  initialState,
  reducers: {
    updateHotels(state, action) {
      state.hotels = action.payload;
    },
    updatePlaces(state, action) {
      state.places = action.payload;
    },
    updateEvents(state, action) {
      state.events = action.payload;
    },
    updateTrips(state, action) {
      state.trips = action.payload;
    },
  },
});
export const { updateHotels, updatePlaces, updateEvents, updateTrips } =
  inboxSlice.actions;
export default inboxSlice.reducer;
