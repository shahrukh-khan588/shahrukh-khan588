import { auth } from "../firebase";
import { useAuthUser } from "@react-query-firebase/auth";
import { firestore } from "../firebase";
import { collection } from "firebase/firestore";
import { useToastContext, ADD } from "../store/responseMessage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { v4 as uuidv4 } from "uuid";
export const useAddPlaces = () => {
  const user = useAuthUser("user", auth);
  const { toastDispatch } = useToastContext();
  const firestoreRef = collection(firestore, "places");
  const places = useFirestoreCollectionMutation(firestoreRef);

  const handelPlaces = async (values, image, coordinates, address) => {
    console.log(values, image, coordinates, address, "values");
    try {
      const storage = getStorage();
      const imageREf = await ref(storage, `images/${uuidv4()}`);
      const response = await uploadBytes(imageREf, image);
      const url = await getDownloadURL(ref(storage, response.ref.fullPath));
      places.mutate({
        PlaceName: values.PlaceName,
        placeType: values.placeType,
        district: values.district,
        cordinates: coordinates,
        // userId: user.data.uid,
        address: address,
        image: url,
      });
      toastDispatch({
        type: ADD,
        payload: {
          content: { message: "Place added successfully" },
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
    handelPlaces,
  };
};
