import { updatePlaces } from "../slices/filter";
import { collection, where, query, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase";

export const getPlaces = (build) => {
  return build.mutation({
    async queryFn(payload, { signal, dispatch, getState }) {
      try {
        const q = query(
          collection(firestore, "places"),
          where("district", "==", payload?.district)
        );
        const querySnapshot = await getDocs(q);
        let temp = [];
        querySnapshot?.forEach((doc) => {
          console.log(doc.data(), "store bila");
          temp.push({ id: doc.id, ...doc.data() });
        });
        dispatch(updatePlaces(temp));
        return { data: temp };
      } catch (e) {
        return { data: e };
      }
    },
    providesTags: ["places"],
  });
};
