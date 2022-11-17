import {
  updateHotels,
  updateTrips,
  updateEvents,
  updatePlaces,
} from "../slices/filter";
import {
  query,
  collection,
  limit,
  where,
  onSnapshot,
  QuerySnapshot,
  DocumentData,
  getDocs,
} from "firebase/firestore";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
// import { useToastContext, ADD } from "../store/responseMessage";
import { firestore } from "../../firebase";

// export const markAsUnRead = (build) => {
//   return build.mutation({
//     query: (id) => ({
//       url: `${conversationsUrl}/conversations/${id}/mark-as-unread`,
//       method: "PUT",
//     }),
//   });
// };

// export const getAllChannels = (build) => {
//   return build.query({
//     query: (payload) => ({
//       url: `${
//         payload.userType === "superAdmin" || "Admin" ? "account" : "user"
//       }-svc/v1/channels`,
//       method: "GET",
//     }),
//   });
// };

export const getHotels = (build) => {
  return build.mutation({
    async queryFn(payload, { signal, dispatch, getState }) {
      try {
        const coll = payload?.destination || "hotels";
        const hotelsQuery = collection(firestore, coll);
        const querySnapshot = await getDocs(
          hotelsQuery,
          where("roomPrice", "<=", payload.Budget)
        );
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
        if (coll === "events") {
          dispatch(updateTrips(temp));
        }
        return { data: temp };
        // return { data: requestRideList };
      } catch (e) {
        return { data: e };
        // toastDispatch({
        //   type: ADD,
        //   payload: {
        //     content: { sucess: "FAIL", message: e.message },
        //     type: "danger",
        //   },
        // });
      }
    },
    providesTags: ["posts"],
  });
};
// const FilterResult = () => {
//   const [hotels, setHotels] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   // const { toastDispatch } = useToastContext();
//   const hotelsQuery = collection(firestore, "hotels");

//   export const HandleGetResult = async (payload) => {
//     try {
//       setIsLoading(true);
//       const requestRideQuery = await query(
//         hotelsQuery,
//         where("roomPrice", "<=", payload.Budget)
//       );
//       onSnapshot(requestRideQuery, (querySnapshot) => {
//         let requestRideList = [];
//         querySnapshot.forEach(async (doc) => {
//           requestRideList.push({ ...doc.data(), docId: doc.id });
//         });
//         setHotels(requestRideList);
//       });
//     } catch (e) {
//       // toastDispatch({
//       //   type: ADD,
//       //   payload: {
//       //     content: { sucess: "FAIL", message: e.message },
//       //     type: "danger",
//       //   },
//       // });
//     }
//   };
//   return {
//     isLoading,
//     hotels,
//     HandleGetResult,
//   };
// };
