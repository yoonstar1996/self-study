import Header from "@/components/common/Header";
import styles from "../styles/header.module.scss";
import Link from "next/link";
import { AiOutlineShareAlt } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import MapSection from "@/components/home/MapSection";
import { Store } from "@/types/store";
import useStores from "@/hooks/useStore";
import { useEffect } from "react";

interface Props {
  stores: Store[];
}

export default function Home({ stores }: Props) {
  // console.log(stores);
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <>
      <Header
        rightElements={[
          <button
            className={styles.box}
            key="button"
            onClick={() => {
              alert("복사");
            }}
            style={{ marginRight: 8 }}
          >
            <AiOutlineShareAlt size={20} />
          </button>,
          <Link href="/feedback" className={styles.box} key="Link">
            <VscFeedback size={20} />
          </Link>,
        ]}
      />
      <main style={{ width: "100%", height: "100%" }}>
        <MapSection />
      </main>
    </>
  );
}

export async function getStaticProps() {
  // TODO : next api routes롤 불러오기 ( 리팩토링 예정 )
  const stores = (await import("../../public/stores.json")).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
