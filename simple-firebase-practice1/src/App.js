import "./App.css";
import app from "./firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();
  const handleGoggleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="App">
      <h1>Auth</h1>
      <button onClick={handleGoggleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
