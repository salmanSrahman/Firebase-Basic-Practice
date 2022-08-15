import React from "react";
import useFirebase from "../../Hooks/useFirebase";
import "./Home.css";

const Home = () => {
  const { user } = useFirebase();

  return (
    <div className="mt-5 pt-5 text-center">
      <h1>This is home.</h1>
      <h2>{user.displayName}</h2>
    </div>
  );
};

export default Home;
