import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Footer from "../Footer";
import Navbar from "../Navbar";
function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="images\kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="images\console.png"
        productName="Console"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account.Enjoy the investment experience on your Android and ios devices."
        learnMore=""
      />
      <LeftSection
        imageURL="images\coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account.Enjoy the investment experience on your Android and ios devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="images\kiteconnect.png"
        productName="Kite Connect Api"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase to it our clientbase."
        learnMore=""
      />
      <LeftSection
        imageURL="images\varsity.png"
        productName="Varsity mobile"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more.Enjoy the Kite experience seamlessly on your Android and ios devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
