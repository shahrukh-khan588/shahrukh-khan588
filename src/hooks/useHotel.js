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
  const firestoreRef = collection(firestore, "hotels");
  const hotels = useFirestoreCollectionMutation(firestoreRef);

  const handleHotels = async (values, image) => {
    try {
      const storage = getStorage();
      const imageREf = await ref(storage, `images/${uuidv4()}`);
      const response = await uploadBytes(imageREf, image);
      const url = await getDownloadURL(ref(storage, response.ref.fullPath));
      hotels.mutate({
        hotelName: values.hotelName,
        roomPrice: values.roomPrice,
        address: values.address,
        userId: user.data.uid,
        image: url,
        averageRating: 0,
      });
      toastDispatch({
        type: ADD,
        payload: {
          content: { sucess: "PASS", message: "Hotel added successfully :)" },
          type: "danger",
        },
      });
    } catch (e) {
      toastDispatch({
        type: ADD,
        payload: {
          content: { sucess: "FAIL", message: e.message },
          type: "danger",
        },
      });
    }
  };

  return {
    handleHotels,
  };
};
