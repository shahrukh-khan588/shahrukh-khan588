import { auth } from "../firebase"
import { useAuthSignInWithEmailAndPassword } from "@react-query-firebase/auth"

export default function useLogin(email, password) {
  const login = useAuthSignInWithEmailAndPassword(auth)
  login.mutate({
    email,
    password,
  })
}
