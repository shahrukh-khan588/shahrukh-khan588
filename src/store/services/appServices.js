import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getHotels } from "./filter";

const appSlice = createApi({
  reducerPath: "posts",
  tagTypes: ["Post"],
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    getHotels: getHotels(build),
  }),
});
export default appSlice;
export const { useGetHotelsMutation } = appSlice;
