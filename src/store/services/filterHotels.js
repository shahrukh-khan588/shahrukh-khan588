import { updateHotels } from "../slices/filter";
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
        const q = query(
          collection(firestore, "hotels"),
          where(
            "roomPrice",
            "<=",
            hotelBudgets,
            "district",
            "==",
            payload.district
          )
        );
        const querySnapshot = await getDocs(q);
        let temp = [];
        querySnapshot?.forEach((doc) => {
          if (doc.data().district === payload.district) {
            temp.push({ id: doc.id, ...doc.data() });
          }
        });
        dispatch(updateHotels(temp));
        return { data: temp };
      } catch (e) {
        return { data: e };
      }
    },
    providesTags: ["posts"],
  });
};
