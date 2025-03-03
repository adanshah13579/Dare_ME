import React from "react";
import HeroSection from "../../component/Heropage/herosection";
import ModernCard from "../../component/Maincard/maincard";
import Stories from "../../component/Stories/Stories";
import SquareCard from "../../component/Squrecard/sqaurecard";
import RectangleCard from "../../component/Rectanglecard/reactanglecard";
import MainLayout from "../../layouts/Mainlayout";
import LiveDares from "../../component/LiveDares/Livedares";
import PopularCategories from "../../component/Popularcategories/popularcategories";
import RecommendedVideos from "../../component/Recommendedvideos/recommendedvideos";
import NavbarHeader from "../../component/Navigation_header/Header";

const HomePage = () => {
  return (
    <>
    <MainLayout>
      <HeroSection />
      <LiveDares></LiveDares>
      

      <Stories />

      <PopularCategories/>

      <RecommendedVideos/>
      </MainLayout>
    </>
  );
};

export default HomePage;
