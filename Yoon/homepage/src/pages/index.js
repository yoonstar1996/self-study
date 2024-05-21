import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TopView from "@/components/Main/TopView/TopView";
import Container from "@/components/Container/Container";
import HouseMenu from "@/components/Main/HouseMenu/HouseMenu";
import BrandStory from "@/components/Main/BrandStory/BrandStory";
import HouseNews from "@/components/Main/HouseNews/HouseNews";

export default function Home() {
  return (
    // <Layout>
    <>
      <Header />
      {/* <Container> */}
      <TopView />
      <HouseMenu />
      <BrandStory />
      <HouseNews />
      {/* </Container> */}
      <Footer />
    </>
    // </Layout>
  );
}
