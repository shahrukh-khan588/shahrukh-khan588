import {
  updateHotels,
  updateTrips,
  updateEvents,
  updatePlaces,
} from "../slices/filter";
import { collection, where, query, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase";

export const getHotels = (build) => {
  return build.mutation({
    async queryFn(payload, { signal, dispatch, getState }) {
      let hotelBudgets = 0;
      if (payload.vachiels) {
        hotelBudgets = ((payload.Budget / 10) * 4) / payload.Days;
      } else {
        hotelBudgets = ((payload.Budget / 10) * 3) / payload.Days;
      }
      try {
        const coll = payload?.destination || "hotels";
        const q = query(
          collection(firestore, coll),
          where("roomPrice", "<=", hotelBudgets)
        );
        const querySnapshot = await getDocs(q);
        let temp = [];
        querySnapshot?.forEach((doc) => {
          temp.push({ id: doc.id, ...doc.data() });
        });
        if (coll === "hotels") {
          dispatch(updateHotels(temp));
        }
        if (coll === "places") {
          dispatch(updatePlaces(temp));
        }
        if (coll === "events") {
          dispatch(updateEvents(temp));
        }
        if (coll === "trips") {
          dispatch(updateTrips(temp));
        }
        return { data: temp };
      } catch (e) {
        return { data: e };
      }
    },
    providesTags: ["posts"],
  });
};
