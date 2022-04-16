import { auth } from "../firebase"
import { useAuthCreateUserWithEmailAndPassword } from "@react-query-firebase/auth"
import { firestore } from "../firebase"
import { doc, setDoc } from "firebase/firestore"
export const useSignUp = () => {
  const signup = useAuthCreateUserWithEmailAndPassword(auth, {
    onSuccess(data, variables) {
      handleAddDocuments(data.user.uid, data.user.email, variables.displayName)
    },
  })
  return {
    signup,
  }
}

const handleAddDocuments = async (id, email, displayName) => {
  try {
    await setDoc(doc(firestore, "users", id), {
      displayName,
      email,
    })
  } catch (err) {
    console.log("errot", err)
  }
}
