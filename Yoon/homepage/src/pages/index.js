import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TopView from "@/components/Main/TopView/TopView";
import HouseMenu from "@/components/Main/HouseMenu/HouseMenu";
import BrandStory from "@/components/Main/BrandStory/BrandStory";
import HouseNews from "@/components/Main/HouseNews/HouseNews";
import RealReview from "@/components/Main/RealReview/RealReview";

export default function Home() {
  return (
    <>
      <Header />
      <TopView />
      <HouseMenu />
      <BrandStory />
      <HouseNews />
      <RealReview />
      <Footer />
    </>
  );
}
