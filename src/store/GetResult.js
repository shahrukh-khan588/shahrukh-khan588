import React, { useState } from "react";
import { query, collection, where, onSnapshot } from "firebase/firestore";
// import { useToastContext, ADD } from "../store/responseMessage";
import { firestore } from "../firebase";

const FilterResult = () => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const { toastDispatch } = useToastContext();
  const hotelsQuery = collection(firestore, "hotels");

  const HandleGetResult = async (payload) => {
    try {
      setIsLoading(true);
      const requestRideQuery = await query(
        hotelsQuery,
        where("roomPrice", "<=", payload.Budget)
      );
      onSnapshot(requestRideQuery, (querySnapshot) => {
        let requestRideList = [];
        querySnapshot.forEach(async (doc) => {
          requestRideList.push({ ...doc.data(), docId: doc.id });
        });
        setHotels(requestRideList);
      });
    } catch (e) {
      // toastDispatch({
      //   type: ADD,
      //   payload: {
      //     content: { sucess: "FAIL", message: e.message },
      //     type: "danger",
      //   },
      // });
    }
  };
  return {
    isLoading,
    hotels,
    HandleGetResult,
  };
};

export default FilterResult;
