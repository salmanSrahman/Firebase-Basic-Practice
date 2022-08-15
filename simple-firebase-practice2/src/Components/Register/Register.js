import React from "react";
import { Button } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";
import "./Register.css";

const Register = () => {
  const { handleGoogleSignIn } = useFirebase();

  return (
    <div>
      <h1>Here is register.</h1>
      <Button onClick={handleGoogleSignIn}>Google Sign In</Button>
    </div>
  );
};

export default Register;
