import "./App.css";
import app from "./firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const handleGoggleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;        setUser(user);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleGithubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .then((error) => {
        console.error("error", error);
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
      {user?.uid ? (
        <button onClick={handleGoggleSignOut}>Google Sign Out</button>
      ) : (
        <div>
          <button onClick={handleGoggleSignIn}>Google Sign In</button>
          <button onClick={handleGithubSignIn}>Github Sign In</button>
        </div>
      )}
      <h2>{user.displayName}</h2>
      <h4>{user.email}</h4>
      <img src={user?.photoURL} alt="" />
    </div>
  );
}

export default App;
