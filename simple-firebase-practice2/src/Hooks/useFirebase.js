import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../Firebase.init/firebase.init";

const auth = getAuth(app);

const useFirebase = () => {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("error", error.message);
      });
  };
  // google sign in

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return { user, handleGoogleSignIn };
};

export default useFirebase;
