import { updateTrips } from "../slices/filter";
import { collection, where, query, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase";

export const getTrips = (build) => {
  return build.mutation({
    async queryFn(payload, { signal, dispatch, getState }) {
      try {
        console.log(payload.location)
        const q = query(
          collection(firestore, "trips"),
          where("location", "==", payload?.district)
        );
        const querySnapshot = await getDocs(q);
        let temp = [];
        querySnapshot?.forEach((doc) => {
          // console.log(doc.data(), "data");
          temp.push({ id: doc.id, ...doc.data() });
        });
        dispatch(updateTrips(temp));
        return { data: temp };
      } catch (e) {
        return { data: e };
      }
    },
    providesTags: ["trips"],
  });
};
