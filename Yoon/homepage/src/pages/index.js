import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import TopView from "@/components/Main/TopView/TopView";

export default function Home() {
  return (
    <Layout>
      <Header />
      <TopView />
      <Footer />
    </Layout>
  );
}
