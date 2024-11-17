import React from "react";
import HomePageBanner from "../../components/HomeComponents/HomePageBanner/HomePageBanner";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import DeliveryCities from "../../components/HomeComponents/DeliveryCities/DeliveryCities";
import SmallCard from "../../utils/SmallCard/SmallCard";

import orderOnlineImg from "../../assets/orderonline.jpg";
import diningoutImg from "../../assets/diningout.jpg";
import proandproplusImg from "../../assets/proandproplus.jpg";
import nightlifeandclubsImg from "../../assets/nightlifeandclubs.jpg";

const Home = () => {
  return (
    <>
      <HomePageBanner />
      <div className="chooseTypeCards">
        <SmallCard imgSrc={orderOnlineImg} text="Order Online" present={true} />
        <SmallCard imgSrc={diningoutImg} text="Dining Out" />
        <SmallCard imgSrc={proandproplusImg} text="Pro and Pro Plus" />
        <SmallCard imgSrc={nightlifeandclubsImg} text="Night Life and Clubs" />
      </div>
      <DeliveryCities />
      <Footer />
    </>
  );
};

export default Home;
