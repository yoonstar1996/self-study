import MainView from "@/components/view/MainView";
import styles from "./index.module.scss";
import SubView from "@/components/view/SubView";

export default function Home() {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.container}>
          <MainView />
          <SubView />
        </div>
      </div>
    </>
  );
}
