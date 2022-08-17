import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
  handleEmailVerification,
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
        handleEmailVerification();
      })
      .catch((error) => {
        console.error("error", error.message);
      });
  };
  //handle google sign in

  const handleEmailVerification = () => {
    sendEmailVerification(auth.currentUser);
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  // handle sign out

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  // get current user

  return { user, handleGoogleSignIn, handleSignOut };
};

export default useFirebase;
