import React from "react";
import Trending from "../components/Trending";
import CoinSearch from "./../components/CoinSearch";

const Home = ({ coins }) => {
  return (
    <div>
      <CoinSearch coins={coins} />
      <Trending />
    </div>
  );
};

export default Home;
