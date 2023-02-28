import { auth } from "../firebase";
import { useAuthUser } from "@react-query-firebase/auth";
import { firestore } from "../firebase";
import { collection } from "firebase/firestore";
import { useToastContext, ADD } from "../store/responseMessage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { v4 as uuidv4 } from "uuid";
export const useAddEvents = () => {
  //   const user = useAuthUser("user", auth);
  const { toastDispatch } = useToastContext();
  const firestoreRef = collection(firestore, "events");
  const places = useFirestoreCollectionMutation(firestoreRef);

  const handelAddEvents = async (values, image, coordinates, address) => {
    try {
      const storage = getStorage();
      const imageREf = await ref(storage, `images/${uuidv4()}`);
      const response = await uploadBytes(imageREf, image);
      const url = await getDownloadURL(ref(storage, response.ref.fullPath));
      places.mutate({
        EventName: values.EventName,
        from: values.fromdate,
        to: values.todate,
        district: values.district,
        description: values.description,
        cordinates: coordinates,
        // userId: user.data.uid,
        address: address,
        image: url,
      });
      toastDispatch({
        type: ADD,
        payload: {
          content: { message: "Your Event added successfully" },
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
    handelAddEvents,
  };
};
