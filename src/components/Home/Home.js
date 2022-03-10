import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import LetShopUs from "../LetShopUs/LetShopUs";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <LetShopUs />
      <ShopByCategory />
    </div>
  );
};

export default Home;
