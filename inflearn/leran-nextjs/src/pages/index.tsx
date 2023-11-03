import Header from "@/components/common/Header";
import styles from "../styles/header.module.scss";
import Link from "next/link";
import { AiOutlineShareAlt } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import MapSection from "@/components/home/MapSection";

export default function Home() {
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
