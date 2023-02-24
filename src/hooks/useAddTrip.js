import { auth } from "../firebase";
import { useAuthUser } from "@react-query-firebase/auth";
import { firestore } from "../firebase";
import { collection } from "firebase/firestore";
import { useToastContext, ADD, REMOVE_ALL } from "../store/responseMessage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { v4 as uuidv4 } from "uuid";
export const useAddHotels = () => {
  const user = useAuthUser("user", auth);
  const { toastDispatch } = useToastContext();
  const firestoreRef = collection(firestore, "trips");
  const hotels = useFirestoreCollectionMutation(firestoreRef);

  const handleHotels = async (values, image, multiCordinates) => {
    console.log(values, "values");
    try {
      const storage = getStorage();
      const imageREf = await ref(storage, `images/${uuidv4()}`);
      const response = await uploadBytes(imageREf, image);
      const url = await getDownloadURL(ref(storage, response.ref.fullPath));
      hotels.mutate({
        TripName: values.TripName,
        ChargesPerPerson: values.ChargesPerPerson,
        location: values.location,
        userId: user.data.uid,
        image: url,
        from: values.fromdate,
        to: values.todate,
        cordinates: multiCordinates,
      });
      toastDispatch({
        type: ADD,
        payload: {
          content: { message: "Trip added successfully" },
          type: "success",
        },
      });
    } catch (e) {
      toastDispatch({
        type: ADD,
        payload: {
          content: { message: e.message },
          type: "error",
        },
      });
    }
  };

  return {
    handleHotels,
  };
};
