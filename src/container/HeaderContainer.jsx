import React from "react";
import Header from "../components/Header/Header";
import TopCategories from "../components/TopCategories/TopCategories";
import Advertisement from "../components/Advertisement/Advertisement";

const HeaderContainer = () => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <TopCategories/>
      <Advertisement/>
    </div>
  );
};

export default HeaderContainer;
