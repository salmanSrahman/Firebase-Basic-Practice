import "./App.css";
import app from "./firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();
  const handleGoggleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleGoggleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };

  return (
    <div className="App">
      <h1>Auth</h1>
      {user?.email ? (
        <button onClick={handleGoggleSignOut}>Google Sign Out</button>
      ) : (
        <button onClick={handleGoggleSignIn}>Google Sign In</button>
      )}
      <h2>{user.displayName}</h2>
      <h4>{user.email}</h4>
      <img src={user?.photoURL} alt="" />
    </div>
  );
}

export default App;
