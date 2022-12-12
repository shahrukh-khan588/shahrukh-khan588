import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getHotels } from "./filterHotels";
import { getTrips } from "./filterGroups";

const appSlice = createApi({
  reducerPath: "posts",
  tagTypes: ["Post"],
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    getHotels: getHotels(build),
    getTrips: getTrips(build),
  }),
});
export default appSlice;
export const { useGetHotelsMutation, useGetTripsMutation } = appSlice;
