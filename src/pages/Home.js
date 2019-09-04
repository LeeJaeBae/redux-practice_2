import React from "react";

const Home = ({ history }) => {
  return (
    <div>
      <h2>HOME</h2>
      <button
        onClick={() => {
          history.push("/about/javascript");
        }}
      >
        use JAVASCRIPT for move
      </button>
    </div>
  );
};

export default Home;
